
// ===> function constructors
        // function Circle (radius){
        //     this.radius = radius;
        //     this.getArea = function (){
        //         return Math.PI * Math.pow(this.radius,2);
        //     }
        // }
        //  var myCircle = new Circle(10);
        //  console.log(myCircle.getArea());
        function Circle(radius){
            this.radius =radius;

        }
        Circle.prototype.getArea = function (){
            return  Math.PI * Math.pow(this.radius,3);
        };
        Circle.prototype.getMyName = function (){
            // return  Math.PI * Math.pow(this.radius,3);
            return "shashi";
        };
        var myCircle = new Circle(10);
        console.log(myCircle.getArea());
        console.log(myCircle);

        var myOthCircle = new Circle(20);
        console.log(myOthCircle.getArea());
        console.log(myOthCircle);

