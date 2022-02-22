const calculator = {
    add : function(a,b) {
        return a+b;
    },
    minus : function(a,b) {
        return a-b;
    },
    divide : function(a,b) {
        return a/b;
    },
    power : function(a,b) {
        return a**b;
    },
}

const addResult = calculator.add(8,4);
const minusResult = calculator.minus(addResult,4);
const divideResult = calculator.divide(addResult,minusResult);
const powerResult = calculator.power(divideResult,addResult);
