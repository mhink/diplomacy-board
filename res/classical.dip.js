export const players = {
  "austria": {
    name: "Austria-Hungary",
    startingPositions: {
      "vie": "army",
      "bud": "army",
      "tri": "fleet",
    },
  },
  "england": {
    name: "England",
    startingPositions: {
      "lon": "fleet",
      "edi": "fleet",
      "lvp": "army",
    },
  },
  "france": {
    name: "France",
    startingPositions: {
      "par": "army",
      "mar": "army",
      "bre": "fleet",
    },
  },
  "germany": {
    name: "Germany",
    startingPositions: {
      "ber": "army",
      "mun": "army",
      "kie": "fleet",
    },
  },
  "italy": {
    name: "Italy",
    startingPositions: {
      "rom": "army",
      "ven": "army",
      "nap": "fleet",
    }
  },
  "russia": {
    name: "Russia",
    startingPositions: {
      "mos": "army",
      "sev": "fleet",
      "war": "army",
      "stp/sc": "fleet",
    }
  },
  "turkey": {
    name: "Turkey",
    startingPositions: {
      "ank": "fleet",
      "con": "army",
      "smy": "army",
    },
  },
};

export const provinces = {
  // Africa
  "naf": {
    name:   "North Africa",
    region: "Africa",
    land:   true,
    sea:    true,
    edges: {
      "mao": "sea",
      "wms": "sea",
      "tun": ["land", "sea"],
    },
    path: "M203,520L179,515L169,518L150,511L117,509L106,511L99,515L89,512L84,518L79,520L68,516L68,511L64,514L46,509L42,502L41,494L37,495L33,496L17,518L0,520L0,559L195,559L197,527Z",
  },
  "tun": {
    name:         "Tunis",
    region:       "Africa",
    land:         true,
    sea:          true,
    supplyCenter: true,
    edges: {
      "naf": ["land", "sea"],
      "wms": "sea",
      "tys": "sea",
      "ion": "sea",
    },
    path: "M232,559L234,551L232,544L225,535L231,531L236,524L233,523L224,527L223,518L218,516L212,517L208,521L203,520L197,527L195,559Z"
  },

  // Austria
  "boh": {
    name:   "Bohemia",
    region: "Austria",
    land:   true,
    edges: {
      "mun": "land",
      "sil": "land",
      "gal": "land",
      "vie": "land",
      "tyr": "land",
    },
    path: "M281,356L276,346L268,343L264,329L266,325L278,326L288,321L297,322L311,334L314,332L321,339L322,347L316,348L303,346L295,349L292,357Z" 
  },
  "bud": {
    name:         "Budapest",
    region:       "Austria",
    land:         true,
    supplyCenter: "austria",
    edges: {
      "tri": "land",
      "vie": "land",
      "gal": "land",
      "rum": "land",
      "ser": "land",
    },
    path: "M394,376L395,382L401,385L406,396L401,402L387,402L367,406L365,412L360,413L342,410L338,412L335,410L332,410L323,408L321,398L311,394L308,383L311,375L322,370L335,354L337,350L350,347L360,351L368,353L377,360L378,363L384,365Z" 
  },
  "gal": {
    name:     "Galacia",
    region:   "Austria",
    land:     true,
    edges: {
      "boh": "land",
      "sil": "land",
      "war": "land",
      "ukr": "land",
      "rum": "land",
      "bud": "land",
      "vie": "land",
    },
    path: "M333,330L341,330L344,332L353,327L356,323L361,324L367,329L374,327L379,324L383,327L385,332L399,338L404,354L403,360L404,371L394,376L384,365L378,363L377,360L368,353L360,351L350,347L337,350L329,346L322,347L321,339L322,347L321,339L325,340L329,338Z" 
  },
  "tri": {
    name:         "Trieste",
    region:       "Austria",
    land:         true,
    sea:          true,
    supplyCenter: "austria",
    edges: {
      "adr": "sea",
      "ven": ["land", "sea"],
      "tyr": "land",
      "vie": "land",
      "bud": "land",
      "ser": "land",
      "alb": ["land", "sea"],
    },
    path: "M276,399L275,403L278,410L282,401L286,402L289,418L306,436L331,454L330,445L337,446L330,437L327,429L331,424L330,416L332,410L323,408L321,398L311,394L308,383L299,385L294,380L289,385L276,386L279,389Z" 
  },
  "tyr": {
    name:   "Tyrolia",
    region: "Austria",
    land:   true,
    edges: {
      "mun": "land",
      "boh": "land",
      "vie": "land",
      "tri": "land",
      "ven": "land",
      "pie": "land",
    },
    path: "M234,366L243,370L246,369L250,371L267,368L271,370L269,362L275,362L281,356L292,357L295,362L294,380L289,385L276,386L268,385L259,388L255,394L250,397L246,392L243,388L245,384L241,378L234,374Z" 
  },
  "vie": {
    name:         "Vienna",
    region:       "Austria",
    land:         true,
    supplyCenter: "austria",
    edges: {
      "tyr": "land",
      "boh": "land",
      "gal": "land",
      "bud": "land",
      "tri": "land",
    },
    path: "M292,357L295,349L303,346L316,348L322,347L329,346L337,350L335,354L322,370L311,375L308,383L299,385L294,380L295,362Z" 
  },

  // Balkans
  "alb": {
    name:     "Albania",
    region:   "Balkans",
    land:     true,
    sea:      true,
    edges: {
      "adr": "sea",
      "tri": ["land", "sea"],
      "ser": "land",
      "gre": ["land", "sea"],
      "ion": "sea",
    },
    path: "M331,454L331,477L335,480L339,487L350,477L350,471L346,466L346,452L337,446L330,445Z" 
  },

  "bul": {
    name:         "Bulgaria",
    region:       "Balkans",
    subprovinces: ["bul/ec", "bul/sc"],
    land:         true,
    edges: {
      "ser": "land",
      "rum": "land",
      "gre": "land",
      "con": "land",
    },
    path: "M413,464L412,454L420,451L426,450L422,441L425,427L429,426L430,423L422,420L410,420L404,422L398,427L390,425L382,427L375,423L370,425L367,421L365,425L368,433L371,438L366,439L371,456L365,461L369,464L376,464L388,460L392,472L400,468L408,470L413,464L412,454Z" 
  },
  "bul/ec": {
    name:           "Bulgaria (East Coast)",
    region:         "Balkans",
    superprovince:  "bul",
    sea:            true,
    edges: {
      "rum": "sea",
      "bla": "sea",
      "con": "sea",
    },
  },
  "bul/sc": {
    name:           "Bulgaria (South Coast)",
    region:         "Balkans",
    superprovince:  "bul",
    sea:            true,
    edges: {
      "gre": "sea",
      "con": "sea",
      "aeg": "sea",
    },
  },
  "gre": {
    name:         "Greece",
    region:       "Balkans",
    land:         true,
    sea:          true,
    supplyCenter: true,
    edges: {
      "ion":    "sea",
      "alb":    ["land", "sea"],
      "ser":    "land",
      "bul":    "land",
      "bul/sc": "sea",
      "aeg":    "sea",
    },
    path: "M339,487L346,498L350,498L347,500L352,508L367,507L371,511L355,510L350,514L357,521L359,533L360,528L367,536L368,531L376,537L371,520L378,521L377,513L386,516L385,509L370,494L371,491L378,494L368,483L371,477L379,484L382,483L381,477L386,478L380,472L392,472L388,460L376,464L369,464L361,467L356,471L350,471L350,477Z" 
  },
  "rum": {
    name:         "Rumania",
    region:       "Balkans",
    land:         true,
    sea:          true,
    supplyCenter: true,
    aliases:      ["rma"],
    edges: {
      "bla":    "sea",
      "bud":    "land",
      "gal":    "land",
      "ukr":    "land",
      "sev":    ["land", "sea"],
      "bul/ec": "sea",
      "bul":    "land",
      "ser":    "land",
    },
    path: "M403,360L404,371L394,376L395,382L401,385L406,396L401,402L387,402L367,406L365,412L367,421L370,425L375,423L382,427L390,425L398,427L404,422L410,420L422,420L430,423L432,409L439,404L438,397L427,399L422,382L423,376L414,372L411,361Z" 
  },
  "ser": {
    name:         "Serbia",
    region:       "Balkans",
    land:         true,
    supplyCenter: true,
    edges: {
      "tri": "land",
      "bud": "land",
      "rum": "land",
      "bul": "land",
      "gre": "land",
      "alb": "land",
    },
    path: "M365,412L360,413L342,410L338,412L335,410L332,410L330,416L331,424L327,429L330,437L337,446L346,452L346,466L350,471L356,471L361,467L369,464L365,461L371,456L366,439L371,438L368,433L365,425L367,421Z" 
  },

  // England
  "cly": {
    name:       "Clyde",
    region:     "England",
    land:       true,
    sea:        true,
    edges: {
      "nat": "sea",
      "nrg": "sea",
      "edi": ["land", "sea"],
      "lvp": ["land", "sea"],
    },
    path: "M138,214L130,208L129,197L139,189L140,182L148,177L162,181L161,185L154,188L152,194L146,200L144,213Z" 
  },
  "edi": {
    name:         "Edinburgh",
    region:       "England",
    land:         true,
    sea:          true,
    supplyCenter: "england",
    edges: {
      "cly": ["land", "sea"],
      "nrg": "sea",
      "nth": "sea",
      "yor": ["land", "sea"],
      "lvp": "land",
    },
    path: "M152,194L158,193L171,197L170,202L165,210L158,214L151,215L157,216L161,218L163,226L155,228L145,217L144,213L146,200Z" 
  },
  "lvp": {
    name:         "Liverpool",
    region:       "England",
    aliases:      ["lpl"],
    land:         true,
    sea:          true,
    supplyCenter: "england",
    edges: {
      "iri": "sea",
      "nat": "sea",
      "cly": ["land", "sea"],
      "edi": "land",
      "yor": "land",
      "wal": ["land", "sea"],
    },
    path: "M128,262L126,256L121,257L132,250L135,250L139,240L136,229L130,227L130,223L138,217L138,214L144,213L145,217L155,228L155,239L151,248L150,264L143,262Z" 
  },
  "lon": {
    name:         "London",
    region:       "England",
    land:         true,
    sea:          true,
    supplyCenter: "england",
    edges: {
      "wal": ["land", "sea"],
      "yor": ["land", "sea"],
      "nth": "sea",
      "eng": "sea",
    },
    path: "M166,269L168,270L171,268L177,270L178,274L176,283L165,293L172,294L168,296L160,298L147,295L145,281L150,277L153,271Z" 
  },
  "wal": {
    name:         "Wales",
    region:       "England",
    land:         true,
    sea:          true,
    edges: {
      "iri": "sea",
      "lvp": ["land", "sea"],
      "yor": "land",
      "lon": ["land", "sea"],
      "eng": "sea",
    },
    path: "M100,291L112,287L122,281L130,282L127,276L119,272L116,272L115,265L128,262L143,262L150,264L153,271L150,277L145,281L147,295L134,294L124,291L120,295L110,292Z" 
  },
  "yor": {
    name:   "York",
    region: "England",
    land:   true,
    sea:    true,
    edges: {
      "lvp": "land",
      "edi": ["land", "sea"],
      "nth": "sea",
      "lon": ["land", "sea"],
      "wal": "land",
    },
    path: "M163,226L163,239L168,246L170,252L169,265L166,269L153,271L150,264L151,248L155,239L155,228Z" 
  },

  // France
  "bre": {
    name:         "Brest",
    region:       "France",
    land:         true,
    sea:          true,
    supplyCenter: "france",
    edges: {
      "mao": "sea",
      "eng": "sea",
      "pic": ["land", "sea"],
      "par": "land",
      "gas": ["land", "sea"],
    },
    path: "M150,319L144,318L142,312L136,310L136,326L124,323L122,318L102,317L100,322L103,328L109,329L123,344L122,350L123,357L128,363L146,365L146,337L148,329Z" 
  },
  "bur": {
    name:     "Burgundy",
    region:   "France",
    land:     true,
    edges: {
      "par": "land",
      "pic": "land",
      "bel": "land",
      "ruh": "land",
      "mun": "land",
      "mar": "land",
      "gas": "land",
    },
    path: "M192,323L205,331L204,338L211,346L213,352L209,363L208,367L194,382L178,381L178,390L173,396L168,395L163,387L165,383L158,380L156,374L165,365L185,344L188,332Z" 
  },
  "gas": {
    name:     "Gascony",
    region:   "France",
    land:     true,
    sea:      true,
    edges: {
      "mao":    "sea",
      "bre":    ["land", "sea"],
      "par":    "land",
      "bur":    "land",
      "mar":    "land",
      "spa":    "land",
      "spa/nc": "sea",
    },
    path: "M128,363L121,382L122,384L112,399L113,407L123,412L134,417L135,414L142,417L149,403L157,397L168,395L163,387L165,383L158,380L156,374L149,372L146,365Z" 
  },
  "mar": {
    name:         "Marseilles",
    region:       "France",
    land:         true,
    sea:          true,
    supplyCenter: "france",
    edges: {
      "gas":    "land",
      "bur":    "land",
      "pie":    ["land", "sea"],
      "gol":    "sea",
      "spa":    "land",
      "spa/sc": "sea",
    },
    path: "M142,417L149,403L157,397L168,395L173,396L178,390L178,381L194,382L197,385L203,379L207,386L204,390L207,396L201,399L204,402L203,410L211,416L198,421L188,422L176,417L169,412L158,418L158,425L154,427Z"    
  },
  "par": {
    name:         "Paris",
    region:       "France",
    land:         true,
    supplyCenter: "france",
    edges: {
      "bre": "land",
      "pic": "land",
      "bur": "land",
      "gas": "land",
    },
    path: "M146,365L149,372L156,374L165,365L185,344L188,332L172,328L165,331L159,331L148,329L146,337Z" 
  },
  "pic": {
    name:     "Picardy",
    region:   "France",
    land:     true,
    sea:      true,
    edges: {
      "bre": ["land", "sea"],
      "eng": "sea",
      "bel": ["land", "sea"],
      "bur": "land",
      "par": "land",
    },
    path: "M169,311L153,315L155,320L150,319L148,329L159,331L165,331L172,328L188,332L192,323L184,315Z" 
  },

  // Germany
  "ber": {
    name:         "Berlin",
    region:       "Germany",
    supplyCenter: "germany",
    land:         true,
    sea:          true,
    edges: {
      "kie": ["land", "sea"],
      "bal": "sea",
      "pru": ["land", "sea"],
      "sil": "land",
      "mun": "land",
    },
    path: "M294,275L286,274L287,267L280,266L266,275L266,283L262,287L264,293L261,296L263,310L288,305L296,300L297,296L292,290Z" 
  },

  "kie": {
    name:         "Kiel",
    region:       "Germany",
    supplyCenter: "germany",
    land:         true,
    sea:          true,
    edges: {
      "hol": ["land", "sea"],
      "hel": "sea",
      "den": ["land", "sea"],
      "bal": "sea",
      "ber": ["land", "sea"],
      "mun": "land",
      "ruh": "land",
    },
    path: "M244,254L243,257L245,263L244,270L244,273L235,277L234,274L230,273L226,275L227,280L225,292L220,298L215,297L213,302L232,308L241,316L243,322L263,310L261,296L264,293L262,287L266,283L266,275L261,274L260,269L256,266L256,263L254,255Z" 
  },
  "mun": {
    name:         "Munich",
    region:       "Germany",
    supplyCenter: "germany",
    land:         true,
    edges: {
      "bur": "land",
      "ruh": "land",
      "kie": "land",
      "ber": "land",
      "sil": "land",
      "boh": "land",
      "tyr": "land",
    },
    path: "M234,366L243,370L246,369L250,371L267,368L271,370L269,362L275,362L281,356L276,346L268,343L264,329L266,325L278,326L288,321L284,314L288,305L263,310L243,322L237,322L219,344L211,346L213,352L209,363L222,365L225,362L232,363Z" 
  },
  "pru": {
    name:   "Prussia",
    region: "Germany",
    land:   true,
    sea:    true,
    edges: {
      "ber": ["land", "sea"],
      "bal": "sea",
      "lvn": ["land", "sea"],
      "war": "land",
      "sil": "land",
    },
    path: "M347,243L347,248L348,254L344,262L337,264L334,273L328,274L326,265L314,266L307,273L294,275L292,290L297,296L296,300L320,303L324,299L326,292L341,287L345,289L359,286L365,281L367,265L362,260L356,261L354,251Z" 
  },
  "ruh": {
    name:     "Ruhr",
    aliases: ["rhr"],
    region:   "Germany",
    land:     true,
    edges: {
      "bel": "land",
      "hol": "land",
      "kie": "land",
      "mun": "land",
      "bur": "land",
    },
    path: "M213,302L210,313L208,315L210,326L205,331L204,338L211,346L219,344L237,322L243,322L241,316L232,308Z" 
  },
  "sil": {
    name:     "Silesia",
    region:   "Germany",
    land:     true,
    edges: {
      "mun": "land",
      "ber": "land",
      "pru": "land",
      "war": "land",
      "gal": "land",
      "boh": "land",
    },
    path: "M288,321L297,322L311,334L314,332L321,339L325,340L329,338L333,330L326,327L323,322L320,303L296,300L288,305L284,314Z" 
  },

  // Iberian regions
  "spa": {
    name:           "Spain",
    region:         "Iberia",
    subprovinces:   ["spa/nc", "spa/sc"],
    land:           true,
    supplyCenter:   true,
    edges: {
      "por": "land",
      "gas": "land",
    },
    path: "M134,417L123,412L113,407L112,399L101,396L96,397L72,384L59,381L54,375L48,374L46,378L39,375L33,381L35,384L32,396L43,395L42,399L55,400L62,407L61,411L52,412L42,432L37,431L40,441L40,441L34,447L36,457L27,468L33,475L34,484L37,490L47,488L52,489L60,486L78,491L83,494L86,485L90,483L98,484L107,474L113,473L115,469L110,461L124,444L131,439L146,438L157,432L158,425L154,427L142,417L135,414Z" 
  },
  "spa/nc": {
    name:           "Spain (North Coast)",
    region:         "Iberia",
    superprovince:  "spa",
    sea:            true,
    edges: {
      "por": "sea",
      "mao": "sea",
      "gas": "sea",
    },
  },
  "spa/sc": {
    name:           "Spain (South Coast)",
    region:         "Iberia",
    superprovince:  "spa",
    sea:            true,
    edges: {
      "por": "sea",
      "mao": "sea",
      "mar": "sea",
      "gol": "sea",
      "wms": "sea",
    },
  },
  "por": {
    name:         "Portugal",
    region:       "Iberia",
    land:         true,
    sea:          true,
    supplyCenter: true,
    edges: {
      "spa":    "land",
      "spa/nc": "sea",
      "spa/sc": "sea",
      "mao":    "sea",
    },
    path: "M32,396L30,406L17,427L14,427L10,433L13,440L15,441L12,450L13,454L8,462L19,469L27,468L36,457L34,447L40,441L37,431L42,432L52,412L61,411L62,407L55,400L42,399L43,395Z" 
  },

  // Italy
  "apu": {
    name:     "Apulia",
    region:   "Italy",
    land:     true,
    sea:      true,
    edges: {
      "rom": "land",
      "ven": ["land", "sea"],
      "adr": "sea",
      "ion": "sea",
      "nap": ["land", "sea"],
    },
    path: "M304,484L310,480L318,485L322,485L322,480L297,456L300,453L290,453L278,443L274,447L279,451L280,455L279,458L293,481Z" 
  },
  "nap": {
    name:         "Naples",
    region:       "Italy",
    land:         true,
    sea:          true,
    supplyCenter: "italy",
    edges: {
      "tys": "sea",
      "rom": ["land", "sea"],
      "apu": ["land", "sea"],
      "ion": "sea",
    },
    path: "M271,464L276,474L290,487L294,502L289,511L290,514L295,515L308,500L311,491L304,484L293,481L279,458Z" 
  },
  "pie": {
    name:     "Piedmont",
    region:   "Italy",
    land:     true,
    sea:      true,
    edges: {
      "mar": ["land", "sea"],
      "tyr": "land",
      "ven": "land",
      "tus": ["land", "sea"],
      "gol": "sea",
    },
    path: "M207,386L204,390L207,396L201,399L204,402L203,410L211,416L222,410L233,415L236,411L233,404L246,392L243,388L229,385L227,390L221,385L213,387Z" 
  },
  "rom": {
    name:         "Rome",
    region:       "Italy",
    supplyCenter: "italy",
    land:         true,
    sea:          true,
    edges: {
      "tys": "sea",
      "tus": ["land", "sea"],
      "ven": "land",
      "apu": "land",
      "nap": ["land", "sea"],
    },
    path: "M247,442L248,447L256,458L271,464L279,458L280,455L279,451L274,447L263,434L250,438Z" 
  },
  "tus": {
    name:     "Tuscany",
    region:   "Italy",
    land:     true,
    sea:      true,
    edges: {
      "gol": "sea",
      "pie": ["land", "sea"],
      "ven": "land",
      "rom": ["land", "sea"],
      "tys": "sea",
    },
    path: "M233,415L238,431L247,442L250,438L263,434L253,418L246,416L240,415L236,411Z" 
  },
  "ven": {
    name:         "Venice",
    region:       "Italy",
    supplyCenter: "italy",
    land:         true,
    sea:          true,
    edges: {
      "tus": "land",
      "pie": "land",
      "tyr": "land",
      "tri": ["land", "sea"],
      "adr": "sea",
      "apu": ["land", "sea"],
      "rom": "land",
    },
    path: "M278,443L272,424L260,417L261,401L270,398L276,399L279,389L276,386L268,385L259,388L255,394L250,397L246,392L233,404L236,411L240,415L246,416L253,418L263,434L274,447Z" 
  },

  // the Netherlands
  "bel": {
    name:         "Belgium",
    region:       "Low Countries",
    supplyCenter: true,
    land:         true,
    sea:          true,
    edges: {
      "pic": ["land", "sea"],
      "eng": "sea",
      "nth": "sea",
      "hol": ["land", "sea"],
      "ruh": "land",
      "bur": "land",
    },
    path: "M191,299L194,303L206,306L205,311L208,315L210,326L205,331L192,323L184,315L169,311L173,301Z" 
  },
  "hol": {
    name:         "Holland",
    region:       "Low Countries",
    supplyCenter: true,
    land:         true,
    sea:          true,
    edges: {
      "nth": "sea",
      "hel": "sea",
      "kie": ["land", "sea"],
      "ruh": "land",
      "bel": ["land", "sea"],
    },
    path: "M226,275L227,280L225,292L220,298L215,297L213,302L210,313L208,315L205,311L206,306L194,303L191,299L198,289L205,276L205,279L207,279L211,274Z" 
  },

  // Russian region
  "fin": {
    name:   "Finland",
    region: "Russia",
    land:   true,
    sea:    true,
    edges: {
      "nwy":    "land",
      "bot":    "sea",
      "swe":    ["land", "sea"],
      "stp":    "land",
      "stp/sc": "sea",
    },
    path: "M362,107L368,108L372,120L366,121L359,136L345,151L347,160L350,165L348,178L349,184L357,186L365,191L384,185L402,177L412,161L410,152L414,147L410,130L402,118L401,110L392,92L393,73L387,68L388,61L386,58L388,54L379,48L370,49L369,61L355,62L346,54L342,61L356,71Z" 
  },
  "lvn": {
    name:     "Livonia",
    aliases:  ["lva"],
    region:   "Russia",
    land:     true,
    sea:      true,
    edges: {
      "stp":    "land",
      "stp/sc": "sea",
      "bal":    "sea",
      "bot":    "sea",
      "mos":    "land",
      "war":    "land",
      "pru":    ["land", "sea"],
    },
    path: "M369,202L365,204L368,210L372,213L373,221L377,227L373,229L366,228L359,220L349,229L347,243L354,251L356,261L362,260L367,265L365,281L372,283L379,290L389,285L392,278L404,275L405,239L409,228L405,217L394,205L382,206L372,205Z" 
  },
  "mos": {
    name:         "Moscow",
    region:       "Russia",
    supplyCenter: "russia",
    land:         true,
    edges: {
      "stp": "land",
      "sev": "land",
      "ukr": "land",
      "war": "land",
      "lvn": "land",
    },
    path: "M609,117L598,132L573,143L564,159L534,164L515,169L489,184L476,183L458,194L456,207L457,210L451,213L447,209L439,211L428,225L421,229L409,228L405,239L404,275L392,278L389,285L379,290L386,309L390,306L456,292L468,295L477,289L494,295L505,280L516,286L526,287L533,283L549,284L554,304L564,305L569,321L597,330L609,330Z" 
  },
  "sev": {
    name:         "Sevastopol",
    region:       "Russia",
    supplyCenter: "russia",
    land:         true,
    sea:          true,
    edges: {
      "ukr": "land",
      "mos": "land",
      "arm": ["land", "sea"],
      "bla": "sea",
      "rum": ["land", "sea"],
    },
    path: "M438,397L446,378L459,375L461,377L459,379L465,383L476,381L478,383L472,385L468,392L477,396L477,401L486,404L488,397L494,396L497,392L507,389L506,384L494,387L485,378L503,364L526,351L527,354L514,365L517,371L520,371L515,384L511,383L510,386L517,393L528,394L554,406L567,408L573,417L570,427L589,442L594,439L603,441L609,440L609,330L597,330L569,321L564,305L554,304L549,284L533,283L526,287L516,286L505,280L494,295L477,289L468,295L470,303L466,307L460,345L445,350L434,360L432,372L423,376L422,382L427,399Z" 
  },
  "stp": {
    name:           "St. Petersburg",
    region:         "Russia",
    subprovinces:   ["stp/nc", "stp/sc"],
    supplyCenter:   "russia",
    land:           true,
    edges: {
      "fin": "land",
      "nwy": "land",
      "mos": "land",
      "lvn": "land",
    },
    path: "M534,164L564,159L573,143L598,132L609,117L609,0L540,0L535,9L530,6L517,19L516,33L513,38L513,23L507,20L505,26L499,33L492,48L495,58L488,60L479,57L477,55L481,50L473,43L466,45L472,62L478,66L478,74L472,72L468,74L457,91L469,100L467,106L462,109L444,101L442,110L447,115L454,119L452,122L434,118L426,103L426,94L414,88L412,83L445,84L457,79L459,66L453,61L417,47L405,49L401,45L397,48L388,61L387,68L393,73L392,92L401,110L402,118L410,130L414,147L410,152L412,161L402,177L403,183L411,184L414,187L408,187L400,192L399,197L387,196L371,198L369,202L372,205L382,206L394,205L405,217L409,228L421,229L428,225L439,211L447,209L451,213L457,210L456,207L458,194L476,183L489,184L515,169Z" 
  },
  "stp/nc": {
    name:           "St. Petersburg (North Coast)",
    region:         "Russia",
    superprovince:  "stp",
    sea:            true,
    edges: {
      "bar": "sea",
      "nwy": "sea",
    },
  },
  "stp/sc": {
    name:           "St. Petersburg (South Coast)",
    region:         "Russia",
    superprovince:  "stp",
    sea:            true,
    edges: {
      "bot": "sea",
      "fin": "sea",
      "lvn": "sea",
    },
  },
  "ukr": {
    name:   "Ukraine",
    region: "Russia",
    land:   true,
    edges: {
      "war": "land",
      "mos": "land",
      "sev": "land",
      "rum": "land",
      "gal": "land",
    },
    path: "M383,327L385,332L399,338L404,354L403,360L411,361L414,372L423,376L432,372L434,360L445,350L460,345L466,307L470,303L468,295L456,292L390,306L386,309Z" 
  },
  "war": {
    name:         "Warsaw",
    region:       "Russia",
    supplyCenter: "russia",
    land:         true,
    edges: {
      "sil": "land",
      "pru": "land",
      "lvn": "land",
      "mos": "land",
      "ukr": "land",
      "gal": "land",
    },
    path: "M333,330L326,327L323,322L320,303L324,299L326,292L341,287L345,289L359,286L365,281L372,283L379,290L386,309L383,327L379,324L374,327L367,329L361,324L356,323L353,327L344,332L341,330Z" 
  },

  // Scandinavian region
  "den": {
    name:         "Denmark",
    region:       "Scandinavia",
    supplyCenter: true,
    land:         true,
    sea:          true,
    edges: {
      "hel": "sea",
      "nth": "sea",
      "ska": "sea",
      "swe": ["land", "sea"],
      "bal": "sea",
      "kie": ["land", "sea"],
    },
    path: "M279,243L275,242L269,243L266,240L267,234L266,221L263,223L248,224L245,237L243,247L244,254L254,255L266,255L271,260L278,254L277,250L280,248Z" 
  },
  "nwy": {
    name:         "Norway",
    region:       "Scandinavia",
    supplyCenter: true,
    land:         true,
    sea:          true,
    edges: {
      "nth":    "sea",
      "nrg":    "sea",
      "bar":    "sea",
      "stp":    "land",
      "stp/nc": "sea",
      "fin":    "land",
      "swe":    ["land", "sea"],
      "ska":    "sea",
    },
    path: "M397,48L391,47L395,41L394,38L384,33L382,40L380,33L377,31L374,38L371,33L366,42L366,33L362,33L357,39L343,44L324,54L320,64L310,75L309,84L303,86L292,111L277,132L269,134L264,142L258,141L236,154L237,160L233,167L231,180L233,186L229,192L231,201L241,209L246,210L266,201L270,193L275,203L279,204L287,177L285,170L290,164L292,133L301,132L300,126L309,115L308,104L311,101L324,71L332,74L330,64L341,65L342,61L346,54L355,62L369,61L370,49L379,48L388,54L386,58L388,61Z" 
  },
  "swe": {
    name:         "Sweden",
    region:       "Scandinavia",
    supplyCenter: true,
    land:         true,
    sea:          true,
    edges: {
      "ska": "sea",
      "nwy": ["land", "sea"],
      "fin": ["land", "sea"],
      "bot": "sea",
      "bal": "sea",
      "den": ["land", "sea"],
    },
    path: "M275,203L277,218L276,224L282,236L279,240L279,243L282,253L289,254L294,245L305,244L312,229L311,220L314,209L322,206L328,203L331,193L326,183L320,182L321,161L330,146L343,138L351,128L347,121L349,112L355,104L362,107L356,71L342,61L341,65L330,64L332,74L324,71L311,101L308,104L309,115L300,126L301,132L292,133L290,164L285,170L287,177L279,204Z" 
  },

  // Turkish region
  "ank": {
    name:         "Ankara",
    region:       "Turkey",
    supplyCenter: "turkey",
    land:         true,
    sea:          true,
    edges: {
      "con": ["land", "sea"],
      "bla": "sea",
      "arm": ["land", "sea"],
      "smy": "land",
    },
    path: "M555,438L551,437L520,441L514,438L511,440L502,433L481,438L470,447L464,457L468,461L468,479L466,491L473,491L490,480L501,482L508,480L531,460L546,462L555,460L557,449Z" 
  },
  "arm": {
    name:     "Armenia",
    region:   "Turkey",
    land:     true,
    sea:      true,
    edges: {
      "ank": ["land", "sea"],
      "bla": "sea",
      "sev": ["land", "sea"],
      "syr": "land",
      "smy": "land",
    },
    path: "M609,493L584,478L563,479L562,471L556,467L555,460L557,449L555,438L570,427L589,442L594,439L603,441L609,440Z" 
  },
  "con": {
    name:         "Constantinople",
    region:       "Turkey",
    supplyCenter: "turkey",
    land:         true,
    sea:          true,
    edges: {
      "bul":    "land",
      "bul/sc": "sea",
      "bul/ec": "sea",
      "bla":    "sea",
      "ank":    ["land", "sea"],
      "smy":    ["land", "sea"],
      "aeg":    "sea",
    },
    path: "M408,470L410,473L414,475L410,482L409,487L417,486L417,489L423,487L432,493L452,495L466,491L468,479L468,461L464,457L442,460L440,458L430,455L426,450L420,451L412,454L413,464Z" 
  },
  "smy": {
    name:         "Smyrna",
    region:       "Turkey",
    supplyCenter: "turkey",
    land:         true,
    sea:          true,
    edges: {
      "aeg": "sea",
      "con": ["land", "sea"],
      "ank": "land",
      "arm": "land",
      "syr": ["land", "sea"],
      "eas": "sea",
    },
    path: "M417,489L420,495L417,498L417,507L423,510L427,524L435,523L435,530L441,526L447,528L453,534L464,531L466,521L475,520L485,528L491,530L505,526L511,514L520,517L527,508L530,509L536,494L545,486L555,484L563,479L562,471L556,467L555,460L546,462L531,460L508,480L501,482L490,480L473,491L466,491L452,495L432,493L423,487Z" 
  },
  "syr": {
    name:     "Syria",
    region:   "Turkey",
    land:     true,
    sea:      true,
    edges: {
      "eas": "sea",
      "smy": ["land", "sea"],
      "arm": "land",
    },
    path: "M530,509L536,494L545,486L555,484L563,479L584,478L609,493L609,559L528,559L532,535L526,530L525,518Z" 
  },

  // Atlantic region
  "bar": {
    name:     "Barents Sea",
    region:   "Atlantic",
    sea:      true,
    convoy:   true,
    edges: {
      "nrg":    "sea",
      "stp/nc": "sea",
      "nwy":    "sea",
    },
    path: "M540,0L535,9L530,6L517,19L516,33L513,38L513,23L507,20L505,26L499,33L492,48L495,58L488,60L479,57L477,55L481,50L473,43L466,45L472,62L478,66L478,74L472,72L468,74L457,91L469,100L467,106L462,109L444,101L442,110L447,115L454,119L452,122L434,118L426,103L426,94L414,88L412,83L445,84L457,79L459,66L453,61L417,47L405,49L401,45L397,48L391,47L395,41L394,38L384,33L382,40L380,33L377,31L374,38L371,33L366,42L366,33L362,33L362,0Z" 
  },
  "eng": {
    name:     "English Channel",
    region:   "Atlantic",
    aliases:  ["ech", "enc"],
    sea:      true,
    convoy:   true,
    edges: {
      "mao": "sea",
      "iri": "sea",
      "wal": "sea",
      "lon": "sea",
      "nth": "sea",
      "bel": "sea",
      "pic": "sea",
      "bre": "sea",
    },
    path: "M173,301L169,311L153,315L155,320L150,319L144,318L142,312L136,310L136,326L124,323L122,318L102,317L88,303L100,291L110,292L120,295L124,291L134,294L147,295L160,298L168,296Z" 
  },
  "hel": {
    name:     "Heligoland Bight",
    region:   "Atlantic",
    aliases:  ["hgb"],
    sea:      true,
    convoy:   true,
    edges: {
      "nth": "sea",
      "den": "sea",
      "kie": "sea",
      "hol": "sea",
    },
    path: "M245,237L243,247L244,254L243,257L245,263L244,270L244,273L235,277L234,274L230,273L226,275L211,274L211,237Z" 
  },
  "iri": {
    name:     "Irish Sea",
    region:   "Atlantic",
    aliases:  ["irs"],
    sea:      true,
    convoy:   true,
    edges: {
      "nat": "sea",
      "lvp": "sea",
      "wal": "sea",
      "eng": "sea",
      "mao": "sea",
    },
    path: "M100,291L112,287L122,281L130,282L127,276L119,272L116,272L115,265L128,262L126,256L121,257L132,250L135,250L139,240L136,229L130,227L120,227L110,232L109,246L98,259L87,257L70,261L58,273L88,303Z" 
  },
  "mao": {
    name:     "Mid-Atlantic Ocean",
    region:   "Atlantic",
    aliases:  ["mid"],
    sea:      true,
    convoy:   true,
    edges: {
      "wms":    "sea",
      "nat":    "sea",
      "iri":    "sea",
      "eng":    "sea",
      "bre":    "sea",
      "gas":    "sea",
      "spa/nc": "sea",
      "spa/sc": "sea",
      "por":    "sea",
      "naf":    "sea",
    },
    path: "M102,317L100,322L103,328L109,329L123,344L122,350L123,357L128,363L121,382L122,384L112,399L101,396L96,397L72,384L59,381L54,375L48,374L46,378L39,375L33,381L35,384L32,396L30,406L17,427L14,427L10,433L13,440L15,441L12,450L13,454L8,462L19,469L27,468L33,475L34,484L37,490L37,495L33,496L17,518L0,520L0,273L58,273Z" 
  },
  "nat": {
    name:     "North Atlantic Ocean",
    region:   "Atlantic",
    aliases:  ["nao"],
    sea:      true,
    convoy:   true,
    edges: {
      "nrg": "sea",
      "cly": "sea",
      "lvp": "sea",
      "iri": "sea",
      "mao": "sea",
    },
    path: "M70,261L64,250L67,242L71,245L81,234L74,228L80,225L78,218L82,217L89,220L94,220L95,218L94,216L97,216L101,212L110,212L119,217L120,227L130,227L130,223L138,217L138,214L130,208L129,197L139,189L140,182L148,177L148,0L0,0L0,273L58,273Z" 
  },
  "nth": {
    name:     "North Sea",
    region:   "Atlantic",
    aliases:  ["nts"],
    sea:      true,
    convoy:   true,
    edges: {
      "eng": "sea",
      "edi": "sea",
      "nrg": "sea",
      "nwy": "sea",
      "ska": "sea",
      "den": "sea",
      "hel": "sea",
      "hol": "sea",
      "bel": "sea",
      "lon": "sea",
      "yor": "sea",
    },
    path: "M245,237L248,224L241,224L241,209L231,201L229,192L233,186L231,180L233,167L237,160L236,154L198,154L171,181L171,197L170,202L165,210L158,214L151,215L157,216L161,218L163,226L163,239L168,246L170,252L169,265L166,269L168,270L171,268L177,270L178,274L176,283L165,293L172,294L168,296L173,301L191,299L198,289L205,276L205,279L207,279L211,274L211,237Z" 
  },
  "nrg": {
    name:     "Norwegian Sea",
    region:   "Atlantic",
    aliases:  ["nws", "nwg"],
    sea:      true,
    convoy:   true,
    edges: {
      "nat": "sea",
      "bar": "sea",
      "nwy": "sea",
      "nth": "sea",
      "edi": "sea",
      "cly": "sea",
    },
    path: "M362,33L357,39L343,44L324,54L320,64L310,75L309,84L303,86L292,111L277,132L269,134L264,142L258,141L236,154L198,154L171,181L171,197L158,193L152,194L154,188L161,185L162,181L148,177L148,0L362,0Z"    
  },
  "ska": {
    name:     "Skagerrak",
    region:   "Atlantic",
    aliases:  ["skg"],
    sea:      true,
    convoy:   true,
    edges: {
      "nth": "sea",
      "nwy": "sea",
      "swe": "sea",
      "den": "sea",
    },
    path: "M241,209L246,210L266,201L270,193L275,203L277,218L276,224L282,236L279,240L279,243L275,242L269,243L266,240L267,234L266,221L263,223L248,224L241,224Z" 
  },

  // Baltic region
  "bal": {
    name:     "Baltic Sea",
    region:   "Baltic",
    sea:      true,
    convoy:   true,
    edges: {
      "den": "sea",
      "swe": "sea",
      "bot": "sea",
      "lvn": "sea",
      "pru": "sea",
      "ber": "sea",
      "kie": "sea",
    },
    path: "M266,255L271,260L278,254L277,250L280,248L279,243L282,253L289,254L294,245L305,244L312,229L311,220L359,220L349,229L347,243L347,248L348,254L344,262L337,264L334,273L328,274L326,265L314,266L307,273L294,275L286,274L287,267L280,266L266,275L261,274L260,269L256,266L256,263L254,255Z" 
  },
  "bot": {
    name:     "Gulf of Bothnia",
    aliases:  ["gob"],
    region:   "Baltic",
    sea:      true,
    convoy:   true,
    edges: {
      "swe":    "sea",
      "fin":    "sea",
      "stp/sc": "sea",
      "lvn":    "sea",
    },
    path: "M311,220L314,209L322,206L328,203L331,193L326,183L320,182L321,161L330,146L343,138L351,128L347,121L349,112L355,104L362,107L368,108L372,120L366,121L359,136L345,151L347,160L350,165L348,178L349,184L357,186L365,191L384,185L402,177L403,183L411,184L414,187L408,187L400,192L399,197L387,196L371,198L369,202L365,204L368,210L372,213L373,221L377,227L373,229L366,228L359,220Z" 
  },

  // Mediterranean region
  "adr": {
    name:     "Adriatic Sea",
    region:   "Mediterranean",
    aliases:  ["ads"],
    sea:      true,
    convoy:   true,
    edges: {
      "ven": "sea",
      "tri": "sea",
      "alb": "sea",
      "ion": "sea",
      "apu": "sea",
    },
    path: "M322,480L297,456L300,453L290,453L278,443L272,424L260,417L261,401L270,398L276,399L275,403L278,410L282,401L286,402L289,418L306,436L331,454L331,477L335,480Z" 
  },
  "aeg": {
    name:     "Aegean Sea",
    region:   "Mediterranean",
    sea:      true,
    convoy:   true,
    edges: {
      "eas":    "sea",
      "ion":    "sea",
      "gre":    "sea",
      "bul/sc": "sea",
      "con":    "sea",
      "smy":    "sea",
    },
    path: "M376,537L371,520L378,521L377,513L386,516L385,509L370,494L371,491L378,494L368,483L371,477L379,484L382,483L381,477L386,478L380,472L392,472L400,468L408,470L410,473L414,475L410,482L409,487L417,486L417,489L420,495L417,498L417,507L423,510L427,524L435,523L435,530L416,549L412,547L387,546L383,544Z" 
  },
  "bla": {
    name:     "Black Sea",
    region:   "Mediterranean",
    sea:      true,
    convoy:   true,
    edges: {
      "bul/ec": "sea",
      "rum":    "sea",
      "sev":    "sea",
      "arm":    "sea",
      "ank":    "sea",
      "con":    "sea",
    },
    path: "M440,458L430,455L426,450L422,441L425,427L429,426L430,423L432,409L439,404L438,397L446,378L459,375L461,377L459,379L465,383L476,381L478,383L472,385L468,392L477,396L477,401L486,404L488,397L494,396L497,392L507,389L506,384L494,387L485,378L503,364L526,351L527,354L514,365L517,371L520,371L515,384L511,383L510,386L517,393L528,394L554,406L567,408L573,417L570,427L555,438L551,437L520,441L514,438L511,440L502,433L481,438L470,447L464,457L442,460Z" 
  },
  "eas": {
    name:     "Eastern Mediterranean Sea",
    region:   "Mediterranean",
    aliases:  ["ems"],
    sea:      true,
    convoy:   true,
    edges: {
      "ion": "sea",
      "aeg": "sea",
      "smy": "sea",
      "syr": "sea",
    },
    path: "M435,530L441,526L447,528L453,534L464,531L466,521L475,520L485,528L491,530L505,526L511,514L520,517L527,508L530,509L525,518L526,530L532,535L528,559L400,559L400,554L414,552L416,549Z" 
  },
  "gol": {
    name:     "Gulf of Lyons",
    region:   "Mediterranean",
    aliases:  ["lyo"],
    sea:      true,
    convoy:   true,
    edges: {
      "spa/sc": "sea",
      "mar":    "sea",
      "pie":    "sea",
      "tus":    "sea",
      "tys":    "sea",
      "wms":    "sea",
    },
    path: "M115,469L110,461L124,444L131,439L146,438L157,432L158,425L158,418L169,412L176,417L188,422L198,421L211,416L222,410L233,415L238,431L224,431L221,434L211,436L213,451L218,454L218,458L214,461L206,462L205,466L154,466L148,463L142,469Z" 
  },
  "ion": {
    name:     "Ionian Sea",
    region:   "Mediterranean",
    aliases:  ["ios", "ins"],
    sea:      true,
    convoy:   true,
    edges: {
      "apu": "sea",
      "adr": "sea",
      "tun": "sea",
      "tys": "sea",
      "nap": "sea",
      "alb": "sea",
      "gre": "sea",
      "aeg": "sea",
      "eas": "sea",
    },
    path: "M289,511L290,514L295,515L308,500L311,491L304,484L310,480L318,485L322,485L322,480L335,480L339,487L346,498L350,498L347,500L352,508L367,507L371,511L355,510L350,514L357,521L359,533L360,528L367,536L368,531L376,537L383,544L380,547L383,550L400,554L400,559L232,559L234,551L232,544L225,535L231,531L236,524L247,513L258,519L273,531L281,532L282,521L285,513L285,511Z" 
  },
  "tys": {
    name:     "Tyrrhenian Sea",
    region:   "Mediterranean",
    aliases:  ["tyn"],
    sea:      true,
    convoy:   true,
    edges: {
      "wms": "sea",
      "gol": "sea",
      "tus": "sea",
      "rom": "sea",
      "nap": "sea",
      "ion": "sea",
      "tun": "sea",
    },
    path: "M238,431L247,442L248,447L256,458L271,464L276,474L290,487L294,502L289,511L285,511L285,508L276,510L263,510L257,507L252,508L247,513L236,524L233,523L224,527L223,518L218,516L218,490L220,490L224,468L222,458L218,458L218,454L223,450L225,444L225,436L224,431Z" 
  },
  "wms": {
    name:     "Western Mediterranean Sea",
    region:   "Mediterranean",
    aliases:  ["wes"],
    sea:      true,
    convoy:   true,
    edges: {
      "mao":    "sea",
      "spa/sc": "sea",
      "gol":    "sea",
      "tys":    "sea",
      "tun":    "sea",
      "naf":    "sea",
    },
    path: "M37,490L47,488L52,489L60,486L78,491L83,494L86,485L90,483L98,484L107,474L113,473L115,469L142,469L150,471L154,466L205,466L206,476L204,485L208,492L212,492L217,489L218,490L218,516L212,517L208,521L203,520L179,515L169,518L150,511L117,509L106,511L99,515L89,512L84,518L79,520L68,516L68,511L64,514L46,509L42,502L41,494L37,495Z" 
  },

  // cannot be occupied, but still considered "areas" for drawing/labelling purposes.
  "cas": {
    name:     "Caspian Sea",
    aliases:  ["css"],
  },
  "ice": {
    name:     "Iceland",
    aliases:  ["icl", "iln"],
  },
  "sib": {
    name:     "Siberia",
  },
  "swi": {
    name:     "Switzerland",
  },
};
