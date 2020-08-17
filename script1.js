
// hey ="dude";
var sharkfreeder ={};

sharkfreeder.hey ="dude";
var greet="hi";
sharkfreeder.sayHi = function () {
    console.log(greet+sharkfreeder.hey );
}

    (function (){
        var sharkfreeder ={};
        sharkfreeder.hey ="dude";
        var greet="hi";
        sharkfreeder.sayHi = function () {
            console.log(greet+sharkfreeder.hey );
        }
        this.sharkfreeder= sharkfreeder;
        // or 
        window.sharkfreeder=sharkfreeder;
    })();
