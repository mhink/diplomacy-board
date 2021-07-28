export default class Edge {
  constructor(board, fromId, toId, edgeType) {
    this._board = board;
    this._fromId  = fromId;
    this._toId = toId;
    this._type = edgeType;
  }

  get isLand() {
    return this._type === 'land';
  }

  get isSea() {
    return this._type === 'sea';
  }

  get fromId() {
    return this._fromId;
  }

  get toId() {
    return this._toId;
  }

  get fromProvince() {
    return this._board.getProvinceById(this._fromId);
  }

  get toProvince() {
    return this._board.getProvinceById(this._toId);
  }
}
