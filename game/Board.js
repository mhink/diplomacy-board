import Province from './Province';
import Edge from './Edge';
import Power from './Power';

export default class Board {
  constructor() {
    this._provinces = new Map();
    this._powers = new Map();
  }

  *provinces() {
    yield* this._provinces.values();
  }

  *powers() {
    yield* this._powers.values();
  }

  addProvince(id, opts) {
    this.refuteProvinceExists(id);
    this._provinces.set(id, new Province(this, id, opts));
    return true;
  }

  addPower(id, opts) {
    const power = new Power(this, id, opts);
    this._powers.set(power.id, power);
    return true;
  }

  getProvinceById(id) {
    if (id === null) return null;
    this.assertProvinceExists(id);
    return this._provinces.get(id);
  }

  addEdge(fromId, toId, edgeType) {
    const edge = new Edge(this, fromId, toId, edgeType);
    const fromProvince = this.getProvinceById(fromId);
    const toProvince = this.getProvinceById(toId);
    try {
      fromProvince.addEdge(edge);
      toProvince.addEdge(edge);
    } catch (err) {
      fromProvince.removeEdge(edge);
      toProvince.removeEdge(edge);
      throw err;
    }
    this._edges.set(edge.id, edge);
    return true;
  }

  assertProvinceExists(id) {
    if (!this._provinces.has(id)) {
      throw new Error(`Province with ID '${id}' does not exist`);
    }
  }

  refuteProvinceExists(id) {
    if (this._provinces.has(id)) {
      throw new Error(`Province with ID '${id}' already exists`);
    }
  }

  assertPowerExists(id) {
    if (!this._powers.has(id)) {
      throw new Error(`Power with ID '${id}' does not exist`);
    }
  }

  refutePowerExists(id) {
    if (this._powers.has(id)) {
      throw new Error(`Power with ID '${id}' already exists`);
    }
  }
}
