const Ship = require('../src/ship');
const GameBoard = require('../src/gameboard');
const Player = require('../src/player');

let gameboard = GameBoard(1, 1);
let gameboardLarge = GameBoard(100, 100);

let destroyer = Ship(4, 'destroyer');

let player = Player('Adam');

test(' Ship: length : 4, name : destroyer ', ()=>{
    expect(destroyer.name).toBe("destroyer");
    expect(destroyer.length).toBe(4);
})


test("Gameboard : {row: 0, col: 1, isShip: false, isHit: false}", ()=>{
    expect(gameboard.board).toEqual([[{row: 0, col: 0, isShip: false, isHit: false}]]);
})

test('Gameboard  row 5 cell 5: {row: 4, col: 4}', ()=>{
    expect(gameboardLarge.board[4][4].row).toBe(4);
    expect(gameboardLarge.board[4][4].col).toBe(4);
})


test('Gameboard  row 99 cell 94: {row: 98, col: 93}', ()=>{
    expect(gameboardLarge.board[98][93].row).toBe(98);
    expect(gameboardLarge.board[98][93].col).toBe(93);
})


test('Player name: "Adam"', ()=>{
    expect(player.name).toBe("Adam");
})