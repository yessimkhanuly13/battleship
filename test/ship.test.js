const Ship = require('../src/ship');

let destroyer = Ship(4, 'destroyer');

test('Ship: length : 4, name : destroyer ', ()=>{
    expect(destroyer.name).toBe("destroyer");
    expect(destroyer.length).toBe(4);
})