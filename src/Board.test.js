import { merge } from "lodash";
import Board from "Board";
import Player from "Player";
import Province from "Province";
import * as testSupplyCenters from "test-supply-centers.dip.js";
import * as classical from "classical.dip.js";
import * as testSimple from "test-simple.dip.js";
import * as testSubprovinces from "test-subprovinces.dip.js";

expect.extend({
  setContaining(received, ...elements) {
    if (!(received instanceof Set)) {
      return {
        pass: false,
        message: () => 'Received object was not an instance of Set',
      };
    }
    for (const el of elements) {
      if (!received.has(el)) {
        return {
          pass: false,
          message: () => '',
        };
      }
    }
    return {
      pass: true,
      message: () => '',
    };
  }
});

describe("Board", () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test("expected players exist", () => {
    board.initialize(testSimple);
    const alice = board.getPlayerById("alice");
    const bob = board.getPlayerById("bob");
    expect(alice).toBeInstanceOf(Player);
    expect(bob).toBeInstanceOf(Player);
    expect(alice.name).toBe("Alice");
    expect(bob.name).toBe("Bob");
  });

  test("expected provinces exist", () => {
    board.initialize(testSimple);
    const foo = board.getProvinceByCanonicalId("foo");
    const bar = board.getProvinceByCanonicalId("bar");
    expect(foo).toBeInstanceOf(Province);
    expect(bar).toBeInstanceOf(Province);
    expect(foo).toMatchObject({
      name: "Foo",
      flags: expect.setContaining("land"),
    });
    expect(bar).toMatchObject({
      name: "Bar",
      flags: expect.setContaining("land"),
    });
  });

  test("warn on aliased starting position", () => {
    const result = board.initialize(testSimple);
    expect(result).toContain(
      "Starting position 'b' for player 'bob' is an alias of 'bar'"
    );
  });

  test("provinces can only have one occupant at a time", () => {
    const badConfig = merge(testSimple, {
      players: {
        "alice": {
          startingPositions: {
            "foo": "army",
          },
        },
        "bob": {
          startingPositions: {
            "foo": "army",
          },
        },
      },
    });

    expect(() => {
      board.initialize(badConfig);
    }).toThrow();
  });

  test("provinces cannot be occupied by incompatible unit types", () => {
    const badConfig = merge(testSimple, {
      players: {
        "alice": {
          startingPositions: {
            "foo": "fleet",
          }
        }
      }
    });
    expect(() => {
      board.initialize(badConfig);
    }).toThrow();
  });

  test("subprovinces", () => {
    board.initialize(testSubprovinces);
  });

  test("superprovince occupancy blocks subprovince", () => {
    const badConfig = {
      provinces: testSubprovinces.provinces,
      players: {
        "alice": {
          startingPositions: {
            "baz": "army",
          }
        },
        "bob": {
          startingPositions: {
            "baz/nc": "fleet",
          },
        },
      },
    };
    expect(() => {
      board.initialize(badConfig);
    }).toThrow("Occupied province 'baz/nc' cannot accept unit 'bob-0' (blocked by 'alice-0' occupying related province 'baz'");
  });

  test("subprovince occupancy blocks superprovince", () => {
    const badConfig = {
      provinces: testSubprovinces.provinces,
      players: {
        "alice": {
          startingPositions: {
            "baz/nc": "fleet",
          }
        },
        "bob": {
          startingPositions: {
            "baz": "army",
          },
        },
      },
    };
    expect(() => {
      board.initialize(badConfig);
    }).toThrow("Occupied province 'baz' cannot accept unit 'bob-0' (blocked by 'alice-0' occupying related province 'baz/nc'");
  });

  test("subprovince occupancy blocks siblings", () => {
    const badConfig = {
      provinces: testSubprovinces.provinces,
      players: {
        "alice": {
          startingPositions: {
            "baz/nc": "fleet",
          }
        },
        "bob": {
          startingPositions: {
            "baz/sc": "fleet",
          },
        },
      },
    };
    expect(() => {
      board.initialize(badConfig);
    }).toThrow("Occupied province 'baz/sc' cannot accept unit 'bob-0' (blocked by 'alice-0' occupying related province 'baz/nc'");
  });

  test("supply centers", () => {
    expect(() => {
      board.initialize(testSupplyCenters);
    }).not.toThrow();
  });

  test("classical", () => {
    let warnings;
    expect(() => {
      warnings = board.initialize(classical);
    }).not.toThrow();
    expect(warnings).toBe(undefined);
  });
});
