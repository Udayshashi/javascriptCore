// copy by reference vs copy by value

// ===> pass by value
    //  var a  = 5;
    //  var b = a;
    //  console.log("the value of a is :"+a);
    //  console.log("the value of a is :"+b);

    // b= 3;
    // console.log("after b changed");
    //  console.log("a value is:"+a);
    //  console.log("b value is:"+b);

 // ===> pass by reference

//         var a ={m:5};
//         var b = a;
//         console.log("a value is:",a);
//         console.log("b value is:",b);
    
//  b.m=3;
// // var b ={m:3};
//         console.log("after b changed passed by refrence");
//         console.log("a value is",a);
//         console.log("b value is",b);


// ===> pass by value
//         function changePrimitive(dataValue){

//             console.log( "the data value is  bfr change",dataValue);
//             dataValue= 32;
//             console.log( "the data value is  after change",dataValue);

//         }
//         var value =23;
//      changePrimitive(value);
//      console.log("after change primitive origial value",value);

// // ===> pass by refernce

//      function chnageObject(objvalue){
//          console.log("is change object");
//          console.log('before');
//          console.log(objvalue);

//          objvalue.v=4;
//          console.log('after');
//          console.log(objvalue);

//      }
//         value ={v:9};
//          chnageObject(value);
//      console.log('after value changed  origial value');
//      console.log(value);