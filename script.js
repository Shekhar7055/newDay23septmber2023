// "this" in node js (non-strict mode)
// console.log(this); => {} //Empty object 
// function => global object
// object-> function => object itself
// object -> function -> function =>global object

// console.log(this);

// function myFun(){
//     console.log(this);
// }
// myFun();

// let myObj = {
//     Name : "Shekhar",
//     Age : 25,

//     myFun1 : function(){
//         console.log(this.Name);

//     }
// }
// myObj.myFun1();


// let myObj2 ={
//     car : "Thar",
//     company : "Mahindra",
//     myFun2 : function(){
//         function myFun3(){
//             console.log(this);
//         }
//         myFun3();
//     }
// }
// myObj2.myFun2();
//above are call the function 


// "this" in node js (strict mode)
// console.log(this); => {} //Empty object 
// function => undefined
// object-> function => object itself
// object -> function -> function =>global object

// 'use strict' //to use strict mode
// console.log(this);

// function myFun(){
//     console.log(this);
// }
// myFun();

// let myObj = {
//     Name : "Shekhar",
//     Age : 25,

//     myFun1 : function(){
//         console.log(this.Name);

//     }
// }
// myObj.myFun1();


// let myObj2 ={
//     car : "Thar",
//     company : "Mahindra",
//     myFun2 : function(){
//         function myFun3(){
//             console.log(this);
//         }
//         myFun3();
//     }
// }
// myObj2.myFun2();


// //"this" in browser (non-strict mode)

// // "this" in node js (strict mode)
// // console.log(this); => {} //window object 
// // function => window object
// // object-> function => object itself
// // object -> function -> function => window object

// console.log(this);
// console.log("hello world");

// function myFun(){
//     console.log(this);
// }
// myFun();

// let myObj = {
//     Name : "Shekhar",
//     Age : 25,

//     myFun1 : function(){
//         console.log(this);

//     }
// }
// myObj.myFun1();

// let myObj2 ={
//     car : "Thar",
//     company : "Mahindra",
//     myFun2 : function(){
//         function myFun3(){
//             console.log(this);
//         }
//         myFun3();
//     }
// }
// myObj2.myFun2();


//"this" in browser (strict mode)

// "this" in node js (strict mode)
// console.log(this); => {} //window object 
// function => undefined
// object-> function => object itself
// object -> function -> function => window object

'use strict'

console.log(this);
 console.log("hello world");

 function myFun(){
    console.log(this);
}
myFun();

let myObj = {
    Name : "Shekhar",
    Age : 25,

    myFun1 : function(){
        console.log(this);

    }
}
myObj.myFun1();

let myObj2 ={
    car : "Thar",
    company : "Mahindra",
    myFun2 : function(){
        function myFun3(){
            console.log(this);
        }
        myFun3();
    }
}
myObj2.myFun2();