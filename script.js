// var x ="hey dude";

 var message="i am globval value";
//  console.log("global value: the  value==>"+message);

 var a  = function(){
     var message="inside the scope"
     console.log("the scope value ==>" +message);

    b();
 }
 
 function b (){
    console.log("the b value"+message);
}

 a();