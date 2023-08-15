function Ship(){
    const a = "dddd";
    return {
        hit: function(){
            console.log('hit '+a);
        },

        isSunk: function(){
            console.log('isSunk')
        }
    }
}

module.exports = Ship;