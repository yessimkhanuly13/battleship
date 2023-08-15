import GameBoard from "./gameboard"
import Player from "./player"
import Ship from "./ship"

const gameBoard = GameBoard();
const ship = Ship();
const player = Player("DSss");

gameBoard.recieveAttack();
ship.hit();
console.log(player.name);
