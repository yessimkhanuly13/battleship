function Ship(length, hits){

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
        length, hits, hit, isSunk
    }
}

module.exports = Ship;
