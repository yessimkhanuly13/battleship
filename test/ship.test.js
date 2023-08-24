const Ship = require('../src/ship');
const GameBoard = require('../src/gameboard');
const Player = require('../src/player');

let gameboard = GameBoard(1, 1);

let destroyer = Ship(4, 'destroyer');

let player = Player('Adam');

test(' Ship: length : 4, name : destroyer ', ()=>{
    expect(destroyer.name).toBe("destroyer");
    expect(destroyer.length).toBe(4);
})


test("Gameboard : {row: 0, col: 1, isShip: false, isHit: false}", ()=>{
    expect(gameboard.board).toEqual([[{row: 0, col: 0, isShip: false, isHit: false}]]);
})


test('Player name: "Adam"', ()=>{
    expect(player.name).toBe("Adam");
})