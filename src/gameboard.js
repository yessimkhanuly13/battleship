function CreateCell(row, col){
    return {
        row, col, isShip:false, isHit:false
    }
}


function GameBoard(rows, cols){

    const board = [];
    

    for(let row = 0; row < rows; row++){
        const rowArr = [];
        for(let col = 0; col < cols; col++){
            rowArr.push(CreateCell(row, col))
        }

        board.push(rowArr);
    }
    

    return {
        board,
        recieveAttack: function(row, col){
            const cell = board[row][col];
            if(cell.isShip && !cell.isHit){
                cell.isHit = true;
                return true;
            }

            return false;
        }
    }
}

module.exports = GameBoard;
