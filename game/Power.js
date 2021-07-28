export default class Power {
  constructor(board, id, {
    name,
    homeSupplyCenters,
    startingPositions,
  }) {
    this._board = board;
    this._id = id;
    this._name = name;
    this._homeSupplyCenterIds = new Set(homeSupplyCenters);
    this._startingPositions = new Map(Object.entries(startingPositions));
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  *homeSupplyCenters() {
    for (const id of this._homeSupplyCenterIds) {
      yield this._board.getProvinceById(id);
    }
  }

  *startingPositions() {
    for (const [provinceId, unitType] of this._startingPositionIds.entries()) {
      yield [this._board.getProvinceById(id), unitType];
    }
  }
}
