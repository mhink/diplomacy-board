export const players = {
  "alice": {
    name: "Alice",
    startingPositions: {
      "foo": "fleet",
    },
  },
  "bob": {
    name: "Bob",
    startingPositions: {
      "bar": "army",
    },
  },
};

export const provinces = {
  "foo": {
    name:     "Foo",
    land:     true,
    sea:      true,
    edges: {
      "bar":    "land",
      "baz/nc": "sea",
    }
  },
  "bar": {
    name:     "Bar",
    aliases:  ["b"],
    land:     true,
    sea:      true,
    edges: {
      "foo": "land",
      "baz/sc": "sea",
    }
  },
  "baz": {
    name:   "Baz",
    land:   true,
    subprovinces: ['baz/nc', 'baz/sc'],
    edges: {
      "bar": "land",
    },
  },
  "baz/nc": {
    name: "Baz (North Coast",
    sea:  true,
    superprovince: 'baz',
    edges: {
      "foo": "sea",
    }
  },
  "baz/sc": {
    name: "Baz (South Coast)",
    sea:  true,
    superprovince: 'baz',
    edges: {
      "bar": "sea",
    }
  },
};
