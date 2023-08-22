function Ship(length, name){

    let hits = 0;

    const hit = () =>{
        hits++;
        return hits;
    }

    const isSunk = () =>{
        if(hits === length){
            return true;
        }

        return false;
    }

    return {
        length, hit, isSunk, name
    }
}

module.exports = Ship;
