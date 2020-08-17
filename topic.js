// function orderData(value){
//     // if(value === undefined){
//     //     value = "anything";
//     // }
//     value = value || 'anything';
//     console.log("data with "+value);
// }
// orderData(value=12);

// orderData();

// var nameObj = new Object();
// nameObj.user ="google";
// nameObj.ruler=new Object();
// nameObj.ruler.name="hara";
// nameObj.models = new Object();
// nameObj.models.firstName="vishnu";
// nameObj.models.flower="lotus";
// console.log(nameObj);

// console.log("name of the lord:" + nameObj.models.firstName);
// console.log("flower of the lord vishnu:"+nameObj["models"]["flower"]);

/* better way to create an object literal */

// var google ={
//     name:"google india",
//     ceo:{
//         firstName:'sundar',
//         lastName:"pichhai",
//     },
//     "profit of the comapny":168
// };
// console.log(google);
// // console.log(google.profit of the comapny)  wrong way to acces the elment using dot operator
// console.log(google["profit of the comapny"]);


/* functions are an object and data types */
    //     function addition (n,s){
    //      return n+s;
    //     }

    // console.log(addition(2,3))
    //     addition.addVariable =23;
    //     console.log(addition.addVariable);
    //     console.log(addition(23,addition.addVariable));

//         function makeMultiply (multiplier){
   
//         var myKey = function (n){
          
//             return multiplier * n;
         
//         };
//         // console.log(myKey);
//         return myKey;
       
//     }    
//             var multiplyBy2 = makeMultiply(2);

//             console.log(multiplyBy2(2));

// /* passing function as paramater */
//         function doOperate(f,operation){
//             return operation (f);

//             }
//             var result = doOperate(3,multiplyBy2);
//             console.log(result)