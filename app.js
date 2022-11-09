const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    minus: function(a,b){
        console.log(a - b);
    },
    div: function(a, b){
        console.log(a/b);
    },
    powerof: function (a,b) {
        console.log(a**b);
    }
};

calculator.add(111,1);
calculator.minus(100,1);
calculator.div(100,5);
calculator.powerof(2,7);
