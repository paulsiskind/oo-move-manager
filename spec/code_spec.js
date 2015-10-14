var MoveManager = require("../code.js");

describe("moveManager", function() {
  it("gets constructed with a grid-like array to represent the board", function() {
    var manager = new MoveManager();
    expect(manager.board).toEqual([
      ['x','x','x'],
      ['x','x','x'],
      ['x','x','x']
      ]);
  });

  it("can insert a players into a specific spot", function() {
    var managerOne = new MoveManager();
    expect(managerOne.insert(0,0)).toEqual([
      ['o','x','x'],
      ['x','x','x'],
      ['x','x','x']]);

    var managerTwo = new MoveManager();
    expect(managerTwo.insert(1,2)).toEqual([
      ['x','x','x'],
      ['x','x','o'],
      ['x','x','x']]);

    var managerThree = new MoveManager();
    expect(managerThree.insert(2,1)).toEqual([
      ['x','x','x'],
      ['x','x','x'],
      ['x','o','x']]);
  });

  it("can move a specific player in a specific direction", function() {
    var manager = new MoveManager();
    manager.insert(0,0);
    expect(manager.movePlayer(0,0, 'right')).toEqual([
      ['x','o','x'],
      ['x','x','x'],
      ['x','x','x']]);

    expect(manager.movePlayer(0,1, 'left')).toEqual([
      ['o','x','x'],
      ['x','x','x'],
      ['x','x','x']]);

    expect(manager.movePlayer(0,0, 'down')).toEqual([
      ['x','x','x'],
      ['o','x','x'],
      ['x','x','x']]);

    expect(manager.movePlayer(1,0, 'up')).toEqual([
      ['o','x','x'],
      ['x','x','x'],
      ['x','x','x']]);
  });

  it("raises an error if trying to move a piece that doesn't exist", function() {
    var manager = new MoveManager();
    expect(function() { manager.movePlayer(0,0, 'right')}).toThrow(new Error("Piece does not exist"))
    expect(function() { manager.movePlayer(2,0, 'right')}).toThrow(new Error("Piece does not exist"))
  });

  it("raises an error if the move takes the piece off of the board", function() {
    var manager = new MoveManager();
    manager.insert(0,0)
    expect(function() {manager.movePlayer(0,0,'left')}).toThrow(new Error("Invalid Move"));
    expect(function() {manager.movePlayer(0,0,'up')}).toThrow(new Error("Invalid Move"));
  })
});