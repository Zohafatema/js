// console.log("STRIKE is Comming");
// variable
// let
// let name = zoha;
// let age = 25;0
// console.log("name , age")

// const
// const account = 1234;

// var b = 30;

// // Data Types

// // Primitive Data Type

// //number,string, boolean, undefined, null, bigint, symbol


// // Number
// let a = 10;
// let b =2.36;
// console.log(a,b);


// // String

// let c = "Strike is comming";
// let d = "Anjali";
// console.log(c,d);


// // Boolean 
// let login = true;
// let f = false;
// console.log(login,f);

// //undefine
// let user;
// console.log(user);

// // Bigint
// let bigNumber =123456789565256n;

// // Null
// // let weather = null;
// let weather = current_weather("dwarka");
// // 25
// // null
// // undefined

// // Symbol
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id2==id1);

// // Non Primitive Data Type
// // array, object, functions

// // Array
// let arr =[10, 11, "anjali", true];
// console.log(arr);

// // Object
// let user = {
//     name:"anjali",
//     account:1234,
//     age:18,
//     category:'gen'
// }

// console.log(user);

// // Function 
// function
// let s = function add(){
//     console.log("Hello");
// }
// console.log(s); 


// // operator

// // Arithmetic
// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(2/5);
// console.log(2%5); //reminder(modulus)
// console.log(2**5); 

// // Assignment operator

// // x = x + y > x+=y;
// // x = x - y > x-=y
// // x = x * y > x*=y;
// // x = x / y > x/=y;
// // x = x % y > x%=y;

// let x = 10;
 
// x+=5;
// console.log(x);
// x*=2;
// console.log(x);

// comparison operator
// let x = 20;
// let y = 10;

// console.log(x>y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x<=y);
// console.log(x==y);
// console.log(x===y);

// type check (dono same typr ke hone chahiye ===, uske baad wo compare karega)

// number and string cpompare(string convert number)
// string --> Number
// console.log(x==y);
// let z = "120";
// let a = Number(z);

// console.log(a);
// NaN: Not a number(type of it is number)

// let a = "121ac";
// let b = Number(a);
// console.log(typeof b);

// Number --> String
// let a = 10;
// let b = String(a);
// console.log( typeof b);


// convert boolean in number data type
// let a = true;
// console.log(Number(true));
// console.log(Number(false));

// console.log(Number(null)); ---null ko number me convert krne 
// null --> 
// console.log(Number(undefined)); ---number ko undefined me convert krne
// undefined --> NaN

// console.log(String(true));---> boolean ko string me convert krne

// boolean convert krne
// console.log(Boolean(10)); --> (yaha -10 ya 10 bhi hua to true ayega sirf zero(0) raha tab hi false dega)

//string ko convert krna h 
// console.log(Boolean("Hello World")) ---> string ko boolean me convert krne


// computer science challenge

// let a = 0.1;
// let b = 0.2;

// let c = a+b;

// console.log(c);

// 1: null is loosely equal to undefined only

// console.log(null==undefined); --> true
// console.log(null===undefined); --> false
// console.log(null==0); --> false
// console.log(null==""); --> false
// console.log(null==false); --> false
// console.log(null==true); --> false


// >, <, >=, <= (null --> number, undefined --> NaN)  --- <, >, >=, <= Ye operation jab bhi aapke pass present hote hinki convert krta h null ko number me convert kr dega undefined ko bhi number ke upr convert kr dega.
//  --- means greater than, smaller than, greater than equal to, less than equal to, jab bhi ye operator hoge to apka type conversion ho jayega ke ek type dusre type me convert ho jayega to us case me null conert kr diya jayega number me.

// console.log(null>=0);--- (null number me convert hota h null ki equivelent value zero ati h)


// jo bhi hoga Boolean hoga string hoga agr aap isko kisi or value se kisi or type se  kabhi bhi compare krne ki koshish krte ho to dono number me covert hoge

// ek koi bhi type hai, usko agr mujhe compare krna h dusre kisi type se
// dono number me convert hoge

// console.log(NaN == NaN);

// for loop

// post increament
// post decreament

// for(let i = 0; i<10; i++){
//     console.log(i);
// }

// // while loop
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// // do while 
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

// if else condition

// let age = 15;

// if(age>=18){
//     console.log("Eligible for vote")
// }
// else{
//     console.log("Not eligible for vote")
// }

// jab multiple condition likhni hoti h
// to usme ek hi if or ek hi else hoga else if kitni bhi bar use kr skte ho
// kid young old

// let age = 20;

// if(age<18){
//     console.log("kid");
// }
// else if(age>=60){
//     console.log("old");
// }
// else{
//     console.log("young");
// }


// Logical operator

// &&, ||