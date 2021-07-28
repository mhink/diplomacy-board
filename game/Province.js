const sampleSet = (set) => {
  const { value, done } = set.values();
  if (done) {
    return undefined;
  } else {
    set.delete(value);
    return value;
  }
};

export default class Province {
  constructor(board, id, {
    name,
    tags = [],
    superprovince,
    subprovinces = [],
  }) {
    this._board = board;
    this._id = id;
    this._tags = new Set(tags);
    if (superprovince) {
      this._superprovince = superprovince;
    } else {
      this._superprovince = null;
    }
    this._subprovinces = new Set(subprovinces);
    this._incomingEdges = new Set();
    this._outgoingEdges = new Set();
  }

  get id() {
    return this._id;
  }

  get isLand() {
    return this._tags.has('land');
  }

  get isSea() {
    return this._tags.has('sea');
  }

  get canConvoy() {
    return this.isSea && !this.isLand;
  }

  get isSupplyCenter() {
    return this._tags.has('supply-center');
  }

  get hasSuperprovince() {
    return this._superprovince !== null;
  }

  get superprovince() {
    return this._board.getProvinceById(this._superprovince);
  }

  get hasSubprovinces() {
    return (this._subprovinces.size > 0);
  }

  *subprovinces() {
    for (const id of this._subprovinces) {
      yield this._board.getProvinceById(id);
    }
  }

  addEdge(edge) {
    if (edge.isLand && !this.isLand) {
      throw new Error(`Cannot add land edge '${edge.id}' to non-land province
      '${this.id}'`);
    }
    if (edge.isSea && !this.isSea) {
      throw new Error(`Cannot add sea edge '${edge.id}' to non-sea province
      '${this.id}'`);
    }
    if (edge.fromId === this.id) {
      this._outgoingEdges.add(edge);
    } else if (edge.toId === this.id) {
      this._incomingEdges.add(edge);
    } else {
      throw new Error(`Edge '${edge.id}' does not refer to province '${this.id}'`);
    }
  }

  removeEdge(edge) {
    const wasIncoming = this._incomingEdges.delete(edge);
    const wasOutgoing = this._outgoingEdges.delete(edge);
    return (wasIncoming || wasOutgoing);
  }

  get provinceGroup() {
    const open = [this];
    const closed = new Set();
    while (open.length > 0) {
      const province = open.shift();
      closed.add(province);
      const superprovince = province.superprovince;
      if (superprovince && !closed.has(superprovince)) {
        open.push(superprovince);
      }
      for (const subprovince of province.subprovinces) {
        if (!closed.has(subprovince)) {
          open.push(subprovince);
        }
      }
    }
    return closed;
  }
}
