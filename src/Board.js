import Player from "./Player";
import Province from "./Province";

export default class Board {
  constructor() {
    this.players = new Map();
    this.provinces = new Map();
    this.aliases = new Map();
    this.neutralSupplyCenters = new Set();
    this.warnings = null;
  }

  warn(message) {
    this.warnings.push(message);
  }

  initialize({
    players: playerConfigs,
    provinces: provinceConfigs,
  }) {
    this.warnings = [];
    try {
      this.playerConfigs = playerConfigs;
      this.provinceConfigs = provinceConfigs;
      // Construct 
      for (const provinceId in provinceConfigs) {
        this.provinces.set(provinceId, new Province(this, provinceId));
      }
      for (const playerId in playerConfigs) {
        this.players.set(playerId, new Player(this, playerId));
      }
      for (const province of this.provinces.values()) {
        province.initialize();
      }
      for (const player of this.players.values()) {
        player.initialize();
      }
      // Have to make a second pass for this, because edges aren't valid unless
      // their target supports the type of edge.
      for (const province of this.provinces.values()) {
        province.initializeDependentProvinces();
        province.initializeEdges();
      }
      for (const player of this.players.values()) {
        player.initializePositions();
      }
      if (this.warnings.length === 0) {
        return;
      } else {
        return this.warnings;
      }
    } finally {
      this.warnings = null;
    }
  }

  getPlayerConfig(id) {
    return this.playerConfigs[id];
  }

  getProvinceConfig(id) {
    return this.provinceConfigs[id];
  }

  createProvinceAlias(aliasId, provinceId) {
    if (this.provinces.has(aliasId)) {
      throw new Error(`Cannot create ambiguous province alias: '${aliasId}'`);
    }
    if (this.aliases.has(aliasId)) {
      const existingAliasedId = this.aliases.get(aliasId);
      throw new Error(`Cannot create alias for '${provinceId}': '${aliasId}' already points to '${existingAliasedId}'!`);
    }
    this.aliases.set(aliasId, provinceId);
  }

  getPlayerById(playerId) {
    return this.players.get(playerId);
  }

  getProvinceById(unresolvedProvinceId, warningPattern="") {
    const canonicalId = this.resolveCanonicalProvinceId(unresolvedProvinceId);
    if (unresolvedProvinceId !== canonicalId) {
      let warning = warningPattern;
      warning = warning.replace(/%%CANONICAL_ID%%/g, canonicalId);
      warning = warning.replace(/%%UNRESOLVED_ID%%/g, unresolvedProvinceId);
      this.warnings.push(warning);
    }
    return this.getProvinceByCanonicalId(canonicalId);
  }

  isAlias(unresolvedProvinceId) {
    return this.aliases.has(unresolvedProvinceId);
  }

  getIdForAlias(aliasId) {
    return this.aliases.get(id);
  }

  resolveCanonicalProvinceId(unresolvedId) {
    if (this.provinces.has(unresolvedId)) {
      return unresolvedId;
    } else if (this.aliases.has(unresolvedId)) {
      return this.aliases.get(unresolvedId);
    } else {
      throw new Error(`Unrecognized ID or alias: '${unresolvedId}'`);
    }
  }

  getProvinceByCanonicalId(resolvedProvinceId) {
    if (this.provinces.has(resolvedProvinceId)) {
      return this.provinces.get(resolvedProvinceId);
    } else {
      throw new Error(`Unrecognized canonical province ID: '${resolvedProvinceId}'`);
    }
  }

  registerSupplyCenter(provinceId, supplyCenter) {
    if (supplyCenter === true) {
      this.neutralSupplyCenters.add(provinceId);
    } else if (typeof supplyCenter === 'string') {
      const playerId = supplyCenter;
      const player = this.players.get(playerId);
      if (!player) {
        throw new Error(`Error while registering '${provinceId}' as supply center for '${supplyCenter}': no such player exists`);
      }
      player.registerSupplyCenter(provinceId);
    } else {
      throw new Error(`Invalid \`supplyCenter\` value: '${supplyCenter}'`);
    }
  }
}

