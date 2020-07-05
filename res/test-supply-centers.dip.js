export const players = {
  "alice": {
    name: "Alice",
    startingPositions: {
      "foo": "army",
    },
  },
  "bob": {
    name: "Bob",
    startingPositions: {
      "b": "army",
    },
  },
};

export const provinces = {
  "foo": {
    name:     "Foo",
    land:     true,
    supplyCenter: "alice",
    edges: {
      "bar": "land",
      "baz": "land",
    }
  },
  "bar": {
    name:     "Bar",
    aliases:  ["b"],
    land:     true,
    supplyCenter: "bob",
    edges: {
      "foo": "land",
      "baz": "land",
    }
  },
  "baz": {
    name: "Baz",
    supplyCenter: true,
    land: true,
    edges: {
      "foo": "land",
      "bar": "land",
      "qux": "land",
    },
  },
  "qux": {
    name: "Quux",
    land: true,
    edges: {
      "baz": "land",
    }
  }
};
