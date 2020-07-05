export default class Province {
  constructor(board, id) {
    this.board  = board;
    this.id     = id;
    this.name   = null;
    this.region = null;
    this.flags  = new Set();
    this.land   = null;
    this.sea    = null;
    this.convoy = null;
    this._edges = new Map();
    this._superprovince = null;
    this._subprovinces = new Set();
    this._occupant = null;
  }

  get config() {
    return this.board.getProvinceConfig(this.id);
  }

  initialize(ctx) {
    const {
      name,
      aliases = [],
      region,
      land,
      sea,
      supplyCenter,
      convoy,
      superprovince,
      subprovinces = [],
    } = this.config;
    this.name = name;
    if (!Array.isArray(aliases)) {
      throw new Error(`Unexpected \`aliases\` type for province with id '${this.id}': expected Array or undefined, but got '${typeof aliases}'`);
    }
    for (const aliasId of aliases) {
      this.board.createProvinceAlias(aliasId, this.id);
    }
    this.region = region;
    if (land)   this.flags.add("land");
    if (sea)    this.flags.add("sea");
    if (convoy) this.flags.add("convoy");
    if (supplyCenter) {
      this.board.registerSupplyCenter(this.id, supplyCenter);
    }
    if (superprovince) {
      this._superprovince = superprovince;
    }
    for (const subprovince of subprovinces) {
      this._subprovinces.add(subprovince);
    }
  }

  hasFlag(flagName) {
    return this.flags.has(flagName);
  }

  initializeDependentProvinces() {
    if (this._superprovince) {
      const superprovince = this.board.getProvinceById(this._superprovince);
      if (superprovince._subprovinces.has(this) || superprovince._subprovinces.has(this.id)) {
        this._superprovince = superprovince;
      } else {
        throw new Error(`Superprovince '${superprovince.id}' of '${this.id}' does not appear to claim '${this.id}' as a subprovince`);
      }
    }

    const subs = [...this._subprovinces];
    this._subprovinces.clear();
    for (const subprovinceId of subs) {
      const subprovince = this.board.getProvinceById(subprovinceId);
      if (subprovince._superprovince === this || subprovince._superprovince === this.id) {
        this._subprovinces.add(subprovince);
      } else {
        throw new Error(`Subprovince '${subprovince.id}' of ${this.id} does not appear to claim '${this.id}' as a superprovince.`);
      }
    }
  }

  initializeEdges(ctx) {
    const {
      edges,
    } = this.config;
    for (const targetProvinceId in edges) {
      const edgeTypeOrTypes = edges[targetProvinceId];
      if (Array.isArray(edgeTypeOrTypes)) {
        for (const edgeType of edgeTypeOrTypes) {
          this.addEdge(targetProvinceId, edgeType);
        }
      } else {
        this.addEdge(targetProvinceId, edgeTypeOrTypes);
      }
    }
  }

  addEdge(targetProvinceId, edgeType) {
    this.assertCanAddEdge(targetProvinceId, edgeType);
    const targetProvince = this.board.getProvinceById(
      targetProvinceId,
      `Outgoing edge '%%UNRESOLVED_ID%%' for province '${this.id}' is an alias of '%%CANONICAL_ID%%'`
    );
    this._edges.set(targetProvince, edgeType);
  }

  assertCanAddEdge(targetProvinceId, edgeType) {
    const invalidMessage = this.validateCanAddEdge(targetProvinceId, edgeType);
    if (invalidMessage) {
      throw new Error(invalidMessage);
    }
  }

  validateCanAddEdge(targetProvinceId, edgeType) {
    const targetProvince = this.board.getProvinceById(targetProvinceId);
    switch (edgeType) {
      case 'land':
        if (!this.hasFlag('land')) {
          return `Outgoing edge '${this.id} -> ${targetProvinceId}' has type
          'land', but source province '${this.id}' does not have the 'land'
          flag.`;
        }
        if (!targetProvince.hasFlag('land')) {
          return `Outgoing edge '${this.id} -> ${targetProvinceId}' has type
          'land', but target province '${targetProvinceId}' does not have the
          'land' flag.`;
        }
        break;
      case 'sea':
        if (!this.hasFlag('sea')) {
          return `Outgoing edge '${this.id} -> ${targetProvinceId}' has type
          'sea', but source province '${this.id}' does not have the 'sea' tag`;
        }
        if (!targetProvince.hasFlag('sea')) {
          return `Outgoing edge '${this.id} -> ${targetProvinceId}' has type
          'sea', but target province '${targetProvinceId}' does not have the
          'sea' flag.`;
        }
        break;
      default:
        return `Unrecognized edge type: '${edgeType}'`;
    }
  }

  acceptUnit(unit) {
    unit.assertCanOccupyProvince(this);
    const occupant = this.findOccupant();
    if (occupant) {
      let errorMessage = `Occupied province '${this.id}' cannot accept unit '${unit.id}'`;
      if (occupant.province !== this) {
        errorMessage += ` (blocked by '${occupant.id}' occupying related province '${occupant.province.id}')`;
      }
      throw new Error(errorMessage);
    }
    this._occupant = unit;
    unit.province = this;
  }

  findOccupant() {
    if (this._occupant !== null) {
      return this._occupant;
    }
    if (this._superprovince) {
      return this._superprovince.findOccupant();
    }
    if (this._subprovinces.size > 0) {
      return this._anySubprovinceOccupant();
    }
    return false;
  }

  _anySubprovinceOccupant() {
    for (const subprovince of this._subprovinces) {
      if (subprovince._occupant !== null) {
        return subprovince._occupant;
      }
      const occupant = subprovince._anySubprovinceOccupant();
      if (occupant) {
        return occupant;
      }
    }
    return;
  }
}
