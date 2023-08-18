const Ship = require('./ship');
const Player = require('./player');
const GameBoard = require('./gameboard');

let gameboard = GameBoard(5,5);

const firstBoard = document.querySelector('.first-board');

const startBtn = document.querySelector('.btn');


startBtn.addEventListener('click', ()=>{

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
})

console.log(gameboard.board)