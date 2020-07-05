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
    edges: {
      "bar": "land",
    }
  },
  "bar": {
    name:     "Bar",
    aliases:  ["b"],
    land:     true,
    edges: {
      "foo": "land",
    }
  },
};
