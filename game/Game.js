export default class Game {
  constructor(board) {
    this._board = board;
    this._provinceStates = new Map();
    this._players = new Set();
  }

  initialize() {
    this._provinceStates.clear();
    this._players.clear();
    for (const province of this._board.provinces()) {
      this._provinceStates.set(province, new ProvinceState(this, province));
    }
    for (const power of this._board.powers()) {
      this._players.add(new Player(this, power));
    }
    for (const player of this._players) {
      player.initialize();
    }
  }

  getStateForProvince(province) {
    return this._provinceStates.get(province);
  }
}

class Player {
  constructor(game, power) {
    this._game      = game;
    this._power     = power;
    this._units     = new Set();
    this._centers   = new Set();
  }

  initialize() {
    for (const [province, unitType] of this._power.startingPositions()) {
      this._centers.add(province);
      const unit = new Unit(this._game, this, province, unitType);
      unit.initialize();
      this._units.add(unit);
    }
  }
}

class ProvinceState {
  constructor(game, province) {
    this._game      = game;
    this._province  = province;
    this._occupant  = null;
  }

  get occupant() {
    return this._occupant;
  }

  set occupant(value) {
    this._occupant = value;
  }
}

class Unit {
  constructor(game, player, province, type) {
    this._game = game;
    this._player = player;
    this._province = province;
    this._type = type;
  }

  initialize() {
    const provinceState = this._game.getStateForProvince(this._province);
    provinceState.occupant = this;
  }
}
