import clearPairs from './';


describe("clear pair game", () => {
  test("first turn goes to Alice, she wins", () => {
    const board = [1, 1];
    const result = clearPairs(board);
    expect(result).toBe("Alice");
  });
  test("four elements, but only one pair: Alice wins", () => {
    const board = [1, 1, 2, 3];
    const result = clearPairs(board);
    expect(result).toBe("Alice");
  });
  test("four elements, and two pairs: Bob wins", () => {
    const board = [1, 1, 5, 5];
    const result = clearPairs(board);
    expect(result).toBe("Bob");
  });
  test("four elements, and two pairs (inverted): Bob wins", () => {
    const board = [5, 1, 1, 5];
    const result = clearPairs(board);
    expect(result).toBe("Bob");
  });
});

