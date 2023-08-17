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
        recieveAttack: function(){
            console.log('recieved attack');
        }
    }
}

module.exports = GameBoard;
