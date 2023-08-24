const Ship = require('./ship');
const Player = require('./player');
const GameBoard = require('./gameboard');

let gameboard = GameBoard(10,10);

console.log(gameboard.board);

const firstBoard = document.querySelector('.first-board');

const startBtn = document.querySelector('.btn');

const shipPlace = document.querySelector('.ships'); 

const destroyer = Ship(2,"destroyer");
const submarine = Ship(3, "submarine");
const battleship = Ship(4, "battleship");
const cruiser = Ship(3, "cruiser");
const carier = Ship(5, "carrier");

const ships = [destroyer, submarine, battleship, cruiser, carier];

let isCliked = false;

startBtn.addEventListener('click', (e)=>{
    if(!isCliked){
    for(let row = 0; row < gameboard.board.length; row++){
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        
        for(let col = 0; col < gameboard.board[row].length; col++){
            const cell = document.createElement('div');
            cell.classList.add('cell');

            cell.addEventListener('click', ()=>{
                console.log(gameboard.board[row][col]);
            })

            rowElement.appendChild(cell);
            console.log(rowElement)
        }
        firstBoard.appendChild(rowElement);
    }

    ships.forEach((ship)=>{
        const shipForm = document.createElement('div');
        shipForm.classList.add('ship');
        for(let i = 0; i<ship.length; i++ ){
            const shipEach = document.createElement('div');
            shipEach.classList.add(ship.name);
            shipForm.appendChild(shipEach);
        }
        shipPlace.appendChild(shipForm);
    })

    isCliked = true;
    }
})


console.log(ships);