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

// // Objects 
// objects mutable hote h means unke andr ki value ko change kr skte h
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

// && , ||

// Logical && -->   dono conditions true honi chahiye tab hi true answer ayega 

// console.log(true&&true);--> true
// console.log(true&&false);--> false
// console.log(false&&false);--> false
// console.log(false&&true);--> false

// Logical || --> kam se kam ek true honi chahiye tab hi answer true ayega or jab dono condition false ho to answer false hi ayega

// console.log(true||true);--> true
// console.log(true||false);--> false
// console.log(false||false);--> false
// console.log(false||true);--> false

// Logical && And

// let a = "Rohit";
// let b = "";
// let c = a&&b;
// console.log(c);

// let a = 0;
// b = 20;

// console.log(a&&b);
// &&: If first value is false, it will return the first value itself
// If first value is true, it will return second value


// Logical || Or

// let a = 10;
// let b = 20;

// console.log(a||b);
// ||: If first value is true, it will return the first value itself
// If first value is true, it will return sencond


// != Not Equal
// console.log(4!=5); ---> true
// console.log(5!=5); ---> false



// STRING
// const str1 ="Rohit";
// const str2 ='Rohit Negi';
// const str3 =`Strike is coming soon`;---> max use

// const day = 18;
// const str3 = `Strike is coming on ${day}`;---> yaha ${day} day=18 add krne use hua mtlb day ki value ayegi output me.

// console.log(str3);

// const str = `Hello Coder Army`;
// console.log(str.length);--> string ki lenght means isme kitne character h jaise yaha 16 h length me space bhi count hoga.

// console.log(str[0]);--> single character access krne ke liye yaha index level ke hisab se character ki value ayegi.

// str[2] = "s";
// console.log(str);-->  yaha index level 2 me wahi rahega jo tha s nhi ayega



// // Upper Case
// console.log(str.toUpperCase())---> puri line capital ho jayegi/ ye original string ko change nhi karega qki strings immutable hoti hi agr return value store nhi kroge to koi effect nhi dkhega
// str.toUpperCase();
// console.log(str);

// const a = str.toUpperCase();--->  ek new uppercase string return krega jaise a me store karege to uppercase value milegi original string waise hi rahegi
// console.log(a);

// jaise uppercase use hota h waise hi lower case bhi use hoga

// // Lower Case
// const b = str.toLowerCase();
// console.log(a);


//substring 

// const str = `Hello Coder Army`;
// indexOf:
// console.log(str.indexof('cod'));--->
// // index me ye word kaha konse index pr h wo show karega ke ye index me kaha konse number pr h /pura word ek sath hona chahiye ek sath nhi milta h to -1 return krke de deta h
// //searched character ya word ka starting index return krta h agr value na mile to -1 return krta h

// const str = `Hello Coder Army Coder`;
// lastIndexOf
// console.log(str.lastIndexOf('Cod'));--->  agr Cod multiple jageh pr present raha lekin apne ko last wala chahiye to konse index pr present h wo return karega.

// inclues
// console.log(str.includes('Cod'));--->  str me ye parenth h ya nhi h dekhne ke liye mtlb Cod present h ya nhi dekhne ke liye or ye hamesha true or false mtlb boolean me hi ans karega present raha to true or nhi raha to false. 


// Slice
// console.log(str.slice(2,7));---> (2,7) 2 mtlb start kaha se krna h or 7 mtlb end kaha krna h kaha tak chahiye
// agr koi bohot badi string h usme se koi part katna h extract krke bahar nikalne / agr space raha to wo include hoga lekin last 7th character include nhi hoga. / or agr ek hi argument diya mtlb sirf 2 hi diya to us case me wo 2 hai to 2nd index se wo puri string ko return kr / or originaal string me koi change nhi hoga ye hamesha aapko nayi string return krke dega

// negativeindex 
// console.log(str.slice(-5));---> last ke 5 trim krke return ayega
// console.log(str.slice(-5,-2));---> -2 index include nhi hua 


// substring--->  negative index ko mark down nhi kr skte
// const str = `Hello Coder Army Coder`;
// console.log(str.substring(2,5));

// const a = "Rohit";
// const b = "Negi";
// const c = a+b;---> dono ko ek sath combine krne concatenation krne mean string 1 or string 2 ko sath krne
// const c = a+" "+b;---> dono string ke bich space lane ke liye (" ") ye use kiya gaya  


// const str = `Hello Coder Army Coder`;
// replace 
// console.log(str.replace("ode","iam"));--->  ek hi time replace hoga
//--->  (ode) mtlb yaha kisko replace krna h (iam) kis se replace krna h

// console.log(str.replaceAll("ode","iam"));---> sab ode replaceho jayege

// const user = " Rohit ";---> yaha spaces count hoge
// console.log(user);
// console.log(user.trim());---> isse rohit ke pass wale spaces cut ho jayege
// const user = " Rohit Negi ";---> rohit negi ke bich ka space count nhi hoga
// console.log(user.trim());--->   sirf rohit negi ke starting oe end pr jo space h wohi cut hoge bich ka space cut nhi hoga
// /ya sirf starting ki space ko dlt krna h to trimStart use kr skte ho or end ki space ke liye trimEnd use kr skte ho 


// Split
//  const names = "Rohit,Mohit,Suraj,Rohan,Anjali"
//  console.log(names);
//  console.log(names.split(","));--->  yaha split , ke basis pr hoga mtlb jaha , h waha split hoga



// DATE

// const now = new Date();
// console.log(now);---> utc time

// console.log(now.toString());---> India Standard Time 
// console.log(now.toLocaleString());--->  local time dikhega
// console.log(now.toISOString());

// Local time chal raha 
// console.log(now.getDay());---> aaj konsa day h 
// console.log(now.getDate());---> aaj ki Date kya h wo mlm Krne 
// console.log(now.getFullYear());---> 
// console.log(now.getMonth());---> Month return krega or 0 se start hoga mtlb january mtlb 0 base index use karega


// Days : Mon- Tue(1 Base Index Use Hota H)
// Months : jan - Dec (0 Base Index Use Hota H)

// formate to create date string
// year, month, day/ date, hour, minute, second, millisecond 
// const now = new Date(2026,6,7,4,57,16,125);

// console.log(now.toString());---> current time / local time

// const now = Date.now();

// console.log(now);//---> yaha millisecond me date print hogi
// 1783424326424---> Time Stemp
// milliseconds time me convert kare
// TimeStamp mtlb jo milliseconds me chal raha h
// const dates = new Date(1783424326424);
// console dates = new Date(now);--> now ko print krane pr pata chlta h ke  UTC ka time kya chal raha h millisecond me
// console.log(dates.toString());

// jo bhi now ki value thi milliseconds me agr date ke andr doge to wo time me convert ho skta h
// console.log(dates);--->
// const dates = new Date(0);
 


// ARRAY

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

// let marks = [100,50,70,80];

// console.log(marks);--->  array ko print krne 
// console.log(marks.length);--->  array ki length pata krne

// array me string, number, boolean value ya kisi bhi type ka data store kr skte h 

// let arr =[100,30,"Rohit",true];

// perticular element ko access krna h
// console.log(arr[2]);--->  jo 2 index pr h wo print hoga sirf or array 0 index se shuru hote h


// koi array ke element ki value change krna ho to

// arr[1] = 90;--->  mtlb 30 ki value 90 ho jayegi
// console.log(arr);--->  print krne 

// // array me koi naye elemnt ko add krna h 
// push: Insert element at end 
// arr.push(90);
// arr.push("Strike");

// // array se koi element ko delete krne
// pop operation: Delete element from end
// arr.pop();

// // Starting add kr skte h

// arr.unshift(10);--->  intert 10 in starting 

// // Delete the element at first place

// arr.shift();--->  1st element delete 

// let arr = [10,30,50,90,11];

// for(let=0;i<arr.lenght;i++);--->  let=0 means 0 se start hoga,i<arr.lenght mean arra ki lenght
// {
//     console.log(arr[i];)
// }


// // for of loop
// ye array ke upr ek ek krke traet krta h
// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,30,50,90,11];
// let arr2 = arr;

// arr2.push(30);--->  original array me bhi changes hoge qki ye copy by reference hote h ye ek dusre ke reference ko copy krte h
// console.log(arr);

// // object (non-primitive): copy by reference hote h
// // primitive: copy by value

// const: const ki value ya address h wo change hogi na hi isko change kr skte h
    

// const arr = [10,30,50,90,11];
// arr[2] = 30;--->  ye index 2 me value change hogi 50 se 30

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);--->  isse ek slice create hogi 2 index se 4 index tk 4th index isme include nhi hoga ye sirf 50,90 wale portion ko slice kr dega 
// console.log(arr);--->  original array me change hua ke ye part usse hat chuka h

// console.log(arr.splice(1,3));--->  1 mtlb kaha se krna h or 3 mtlb kitne element krna h original array se hi wo part trimout ho jaye 
//console.log(arr);

// const arr3 = arr.splice(1,3);--->  yaha arr3 me trim hua part jo h wo arr3 me store hoga arr3 me mil jayega

// const arr3 = arr.splice(1,3,"Rohit",19);--->  isme ho raha h ki 1 ka mtlb 1st index pr jaiyye 3 ka mtlb waha se mtlb 1 se 3 element ko trimout kriye or uske bad rohit on 19 ko insert kijiye / iska return ya output [10,'Rohit',19,11] aapko mil jayega

// Splice:  original array me ham changes krte h usse part trim out kr dete h
// Slice:  koi portion ko hatate to h lekin original array me koi changes nhi kr skte

// Spread Operator

// const arr = [10,30,50,90,11];
// const arr2 = [Rohit,11,true];

// ye dono ko ek dusre ke sath merge karana h 
// arr.push(arr2);--->  isse array ke sath brackets bhi add ho jayege qki pura adda hoga return [10,30,50,90,11,[Rohit,11,true]] ye ayega

// const arr3 = arr.concat(arr2);---> isse ek naya array return krke dega

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];

// const arr3 = arr.concat(arr2,arr4);--->  multiple array jodne ke liye bracket me array ke baad , comma laga kr next jo array add krna h uska array name likhlena like (arr2,arr4)

// Spread Operator

// const arr3 = [...arr, ...arr2, ...arr4];
// console.log(arr3);--->  ye 3n array ko faila kr return karega

// const names = ["alice", "Bob", "Charlie"]; //array h usko string me convert krna h 
// console.log(names.toString());---> yaha name.toStringek naya string return krke dega 

// // Join Operation
// const names = ["alice", "Bob", "Charlie"];
// console.log(names.join("-"));--->  join kaise karah h mtlb , isse - isse ya aise kuch bhi add kara skte h join krne yaha ye (alice-Bob-Charlie) ye return karega

// // Simple Searching
// const names = ["alice", "Bob", "Charlie"];
// console.log(names.indexOf("Bob"));--->  index pata chalega ki iska index kya h or agr present nhi hoga to -1  return karega agr multipe same value rahe to starting wala hi show return krega 

// const names = ["alice", "Bob", "Charlie", "Bob"];
// console.log(name.lastIndexOf("Bob"));--->  agr multiple same value rahe jaisse bob to iska last wala konse index pr add hua tha wo index return krega

// console.log(name.includes("Bob"));---> present h ya nhi wo mlm krna h means true false me answer chahiye to ye use hoga means include h to true include nhi h to false return karega

// const names = ["Alice", "Rohit", "Bob", "Mohit", "Charlie"];

// names.sort();//---> // character ke basis pr ye sequence me return karega lekin small a raha to last me jayega ascii table ke hisab se 

// names.reverse();//---> // order reverse h jayega ['Bob', 'Charlie', 'Mohit', 'Bob', 'Rohit', 'Alice'] ye return karega 

// console.log(names);

// const a =[101,90,80,32,91];
// Array.sort();--->  ye ascii table ke hisab se hi sort hoga wais enhi hoga jaise narmal hota h [101, 32, 80,90,91] ye return karega ascii table ke hisab se

// const a =[10,40,31,71,5,11];
// a.sort((a,b)=> a-b);--->  jb bhi aapke pass number ho or number ko perticular order me sort krna ho to ye operation ko execute kr skte h

// a.sort((a,b)=> a-b);
// ascending order

// 10,31, 40
// a = 40
// b = 31

//aa.sort((a,b)=> b-a);

// 40,10
// a = 10
// b = 40

// -ve: Pehle a ayega fir b ayega
// +ve: pehle b ayega fir a ayega

// console.log(arr);


// const arr = [10,30,50,[40,90,11],80];
// console.log(arr);--->  if yaha arr[3] krte h to 3rd index print hoga to isme [40,90,11] return karega 

// console.log(arr[3][0]);--->  yaha 2nd array ka 0 index mtlb 40 return hoga

// const arr = [10,30,50,[40,90,[60,19,99],11],80];
// const a = arr.flat();--->  label 1 decide hoga mtlb ya 2nd array ka bracket opn ho jayega
// console.log(arr);
// const a = arr.flat(2);--->  label 2 mtlb 3rd array[60,19,99] ka bracket bhi hat jayega or sab flat ho jayega 
// console.log(arr);
// const a = arr.flat(Infinity);--->  jitne bhi No. of label h sbko flat kr dena Infinite label[] jo bhi h sbko


// // why array is not array in javascript



// // Objects
// // key value
// const user ={
//     name: "Rohit",
//     age: 20,
//     emailid: "negi@gmail,com",
//     amount: 3400
// }--->  name means key ho gayi value means Rohit 

// console.log(user);--->  print krne 

// console.log(user.age);--->  age ko access kr skte ho 

