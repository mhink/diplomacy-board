const VALID_UNIT_TYPES = ["army", "fleet"];
const COMPATIBLE_PROVINCE_TAGS = {
  "army":   ["land"],
  "fleet":  ["sea"],
};

export default class Unit {
  constructor(board, player, id) {
    this.board = board;
    this.player = player;
    this.id = `${player.id}-${id}`;
    this.kind = null;
    this.province = null;
  }

  initialize({
    unitType
  }) {
    if (!VALID_UNIT_TYPES.includes(unitType)) {
      throw new Error(`Tried to initialize unit '${this.id}' with invalid unit type '${unitType}'`);
    }
    this.kind = unitType;
  }

  assertCanOccupyProvince(province) {
    const invalidMessage = this.canOccupyProvince(province);
    if (invalidMessage) {
      throw new Error(invalidMessage);
    }
  }

  canOccupyProvince(province) {
    const occupiableFlags = COMPATIBLE_PROVINCE_TAGS[this.kind];
    for (const flag of occupiableFlags) {
      if (province.hasFlag(flag)) {
        return;
      }
    }
    return `Unit of kind '${this.kind}' cannot occupy '${province.id}': incompatible flags (requires one of ${occupiableFlags})`;
  }
}
