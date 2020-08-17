// ===> object literals and this
     
     var literalCircle ={
          radius:10,

          getArea: function() {
              var self =this;
              console.log(this);
            
             var increaseRadius = function (argument){
                self.radius =20;
             };
               return Math.PI * Math.pow(this.radius,2);
          }
     };
     literalCircle.getArea();