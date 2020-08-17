/* 1)the undefined dataType */

        // var m;
        // console.log(m);

        // if(m== undefined){
        //     console.log("m is undefined");

        // }
        // else{
            //     console.log(' m is defined');
            // }
        //  m="ns";
        //  if(m==undefined){
            //      console.log('m is undefined');
            //  }
        //  else{
            //      console.log('m is defined');
            //  }


// 2) /* string concatination */
            //  var string="shashi";
            //  string +="kumar";
            //  console.log(string);                    //op => shashikumar
            //   /* in other way to write */
            //   var string="shiVA";
            //   string=string +"kumar"
            //   console.log(string);                   //op => shiVAkumar


/*  3) regular math operators +, -,*,/   */
         
    //     console.log((5+4)/3);               /** op => 3 */
         
    //     console.log((undefined)/2);                /** op => NaN */


 /*  4) NaN example undefined key */

    //     function testUndefined(s){
    //         // s=2;                                                /** op => 8  if u declare s =2*/
    //         console.log(s*4);                            /** op => NaN */
    //     }
    //     testUndefined();


/* 5) equality  expressions */

        // var j = 5; var l = 5;
        //       /** Or*/
        //       var j = 5, l=5;
        //       if(j==l){
        //           console.log("j(5) is equal to l(5)");
        //       }
        //     l="5"   /* assigned the value in string  than in number */
        //     if(j==l){
        //         console.log("j(5) is equal to l(5) after changing variable from number to string");       /** string value can eqaul to number its called type coercion
        //                                                                                                     coercion  language converts  something one data type to another data type  automatically                                          */
        //     }

  /* 6) strict equality  expressions */
        //  var k=9,v=9;
        //  if(k === v){
        //     console.log("the value of k(9) is equal to v(9) ");
        //  }
        //  v="9";
        //  if (k === v){
        //      console.log("the value of k(9) will not be equal to v('9')");   /* strict equality expressions wont coverts any data type automatically */
        //  }

/* 7) boolean true and false expressions */
         // if(false || null || undefined || "" || 0 || NaN){
         //     console.log(" this line wont excute as the condition turned into false")
        
            // }
            // else
            // {
            //     console.log('all false');
            // }

/* 8) boolean true and true expressions */
            //  if(true && "hello" && 1 && -1 && "false"){
            //      console.log("all true")
            //  }

/* 9) best practices  for {}  style 
            curly brace on the next or same line  */
             
            // function hi(){
            //     return                                     /** the funcion returning return or return; both are same will return the value in the same wont allow next line*/
            //     {
            //         name:"shashi"; 
            //     }
            // }
            // function namasthe(){
            //     return{
            //         name:"hi dude",
            //     }
            // }
            // console.log(hi());                        /** op => undefined as the functions returns before it reaches the next object  */
            // console.log(namasthe());

 /** for loop */
        // var sum =0;
        // for(var i=0;i<10; i++){
        // console.log(i);
        // sum=sum+i;   
        //     }
        //     console.log("sum of 0-9 is "+sum);