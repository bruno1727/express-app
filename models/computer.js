const Opponent  = require('./opponent');
class Computer extends Opponent{
    getMove(array){

        if(!array)
            throw 'empty parameter';
    
        if(!Array.isArray(array))
            throw 'not array';
    
        if(array.length == 0)
            throw 'empty array';
    
    
        let result;
        array.forEach((e, i) => {
            if(!e) result = i;
        });
        return result;
    }
}
module.exports = Computer;