import Unit from "Unit";

export default class Player {
  constructor(board, id) {
    this.board          = board;
    this.id             = id;
    this.name           = null;
    this.supplyCenters  = new Set();
    this.nextUnitId     = 0;
    this.units          = new Set();
  }

  get config() {
    return this.board.getPlayerConfig(this.id);
  }

  initialize(ctx) {
    const {
      name,
    } = this.config;
    this.name = name;
  }

  initializePositions() {
    const {
      startingPositions,
    } = this.config;
    for (const unresolvedProvinceId in startingPositions) {
      const province = this.board.getProvinceById(
        unresolvedProvinceId,
        `Starting position '%%UNRESOLVED_ID%%' for player '${this.id}' is an alias of '%%CANONICAL_ID%%'`
      );
      const unitType = startingPositions[unresolvedProvinceId];
      const unit = new Unit(this.board, this, this.nextUnitId++);
      unit.initialize({
        unitType
      });
      province.acceptUnit(unit);
    }
  }

  registerSupplyCenter(provinceId) {
    this.supplyCenters.add(provinceId);
  }
}
