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

// Array ki destructuring

// cosnt arr = [10,20,30,40,50,60,70,80,90];
// const [first,second]= arr;

// // why array is not array in javascript



// // Objects
// // key value
// const user ={
//     name: "Rohit",
//     age: 20,
//     emailid: "negi@gmail,com",
//     amount: 3400
// }//--->  name means key ho gayi value means Rohit 

//CRUD Operation: Create Read Update Delete 

// console.log(user);--->  print krne 

// console.log(user.age);--->  age ko access kr skte ho 

// user.aadhar = 1234;//--->  kuch or insert krna h uske liye jaise yaha aadhar insert hua

// user.amount = 5000;--->  update krne 
// console.log(user);

// delete user.emailid;--->  delete krne jaise yaha emailid delete kiye
// console.log(user)

// const user ={
//     name: "Rohit",
//     age: 20,
//     emailid: "negi@gmail,com",
//     amount: 3400
// }

// const user2 = user;
// user2.age = 21;//--->  agr user2 ke andr koi change krrahe h to user means original Object me bhi cahanges ho jayege
// console.log(user);



// imp

// console.log(Object.keys(user));--->  (Object.keys(user)) ye operation ek array create krta h or usi me sab keys rakh deda h

// console.log(Object.values(user));--->  value return karega user yaha object ka naam h

// console.log(Object.entries(user));--->  agr dono bhi chize keys and value print karan h tab use hoga



// for(let keys in user){
//   console.log(keys, user[keys]);
// }--->  for in loopka use krke keys ka access

// const user ={
//     name: "Rohit",
//     age: 20,
//     emailid: "negi@gmail,com",
//     amount: 3400
// }

// for of loop array ke
// const temnparr = Object.keys(user);
// console.log(temnparr)
// for(let keys of temnparr);{
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// for(let values of Object.entries(user)){
//     console.log(values);
// }--->  key or value dono ek sath print krke dena h

// for (let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }


// const name = user.name;

// // object destructuring

// const {name,age} = user;--->  Object ki destructuring ke user object se 2 value nikal li h ek name ek age

// const {name:userName,age:userAge} = user;--->  user object se name or age nikalliye lekin use baad variable ka name change krna h to
// console.log(userName,userAge);---> print krne

// koi Object me function bhi create kr skte h
// const user ={
//     name: "Rohit",
//     age: 20,
//     emailid: "negi@gmail,com",
//     amount: 3400,
//     greeting: function(){
//         console.log("Strike is coming on 18 october");
//         return 20;
//     }
// }

// const va = user.greeting();
// console,log(va);--->  20 return hoga


// // Nested Object (Object ke and Object)
// const user ={
//     name: "Rohit",
//     age: 20,
//     emailid: "negi@gmail,com",
//     amount: 3400,
//     address:{
//         city: "kotdwar",
//         state: "Uttarkhand" 
//     }
// }    

// console.log(user.address);---> addressko access krne ke liye 

// console.log(user.address.city);--->  City ko access krne ke liye

// // Independents copy create krna

// Spread Operator 1 level walo ko hi handle krta h independent krta h nested walo ko handle nhi karega unme dono ka reference same hoga 


// // shallow copy 

// const user2 = {...user};
// user2.name = "Mohan"; --->  independent copy bn jayega user 2 me add karege to user me changes nhi hoge means user me show nhi hoaga


// // deep copy

// const user2 = structuredClone(user);--->  yaha don bhi independent ban jayege

// console.log(user2);

// Keys ki value String ya Symbol ho skti h

// const user ={
//     name:"Rohit",
//     age:20,
//     0: 100,
//     2:"Mohan"
// }

// console.log(user[0]);--->  number wale key ko access krne ke liye

// function greeting(){
//     console.log("Hello Coder Army");
// }--->  pehle function key word use karege then greeting means jo naam rakhna ho wo likh skte h then bracket uske baad curlybracket fir usme jo code raha likh skte ho

// greeting();--->  function execute krne

// function addNumber(num1,num2){
//     const sum = num1+num2;
//     console.log(sum);
// }--->  num1,num2 yaha parameter h

// addNumber(3,4);--->  3,4 yaha argument h 

// addNumber(6,7,8);---> 

// function addNumber(num1,num2,num3){
//     const sum = num1+num2;
//     console.log(sum);
// }

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2;
//     console.log(sum);
// }
// addNumber(6,7,8,9);

// kabhi 2 argument pass ki kabhi 3 ki kabhi 4 pass kadi tab jaise 2 argument ki 3 4 nhi h tab parameter m numn=0 ye likh skte h ke unme default value 0 daal dena

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2;
//     console.log(sum);
// }

// addNumber(3,4);--->  jaise yaha num3 num4 ko num3=0 num4=0 mtlb yaha 3 4 vvalue mention nhi h to default 0 value hogi
// addNumber(6,7,8);
// addNumber(6,7,8,9);

// // Rest Operator
// function addNumber(...num){

//     let sum=0;
    
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }
// //--->  ...num ye rest operator h function me jitni bhi values bhejoge sbko ek array me store kr dega
// //--->  let sum = 0; ye ek variable bna jiska naam sum h start me uski value 0 rakhi h
// //--->  sum+=n mean sum = sum + n

// Spread Operator: Object ya Array h usko kholta h
// Rest Operator: jab bohot sari individual values aarahi h unko catch krna hwaha rest operator use hoga

// Function expression

// const addNumber =funstion(num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(3,4));

// Arrow function

// const addNumber = ()=>{
//     console.log("Hello");

// }--->  arrow present h function keyword present nhi h

// addNumber();

// const addNumber = (num1,num2)=>{
//     return num1+num2;
// }

// console.log(addNumber(2,3));

// const addNumber = (num1,num2)=> num1+num2;
// console.log(addNumber(2,3));
// //--->  ek koi value ko return krna ho to isko bina curly bracket or bina return word likhe bhi kr skte ho

// const squareNumber = (num)=> num*num;
// console.log(squareNumber(4));
// //---> lekin agr ek hi parameter ho to squareNumber = (num) yaha num pr bracket lagane ki zarurat nhi h


// const greeting = ()=> {
//     let user = {
//         name: "Rohit",
//         age: 20,
//     }
//     return user;
// }

// console.log(greeting());

// const greeting = ()=> ({ name:"Rohit",age:20});
// console.log(greeting());--->  agr code me return nhi likha gaya to {} curly bracket se pehle () bracket lagana hoga nhi to error ayega


// // IIFE (Immediately Invoked Function Expression)

// (function greeting(){
//     console.log("Hello");
// })();
// //--->  direct call krne ke liye ()() 2 bracket use hoge 1st me code pura rap hoga then call krne uske baad dusra wala bracket pehle bracket ko call krne means 1st bracket me function define hoga then 2nd se function call hoga

// (()=>{
//     console.log("Hii");
// })();

// // Callback function

// function sayHello(){
//     console.log("Hello");
// }

// function add(num1,num2,Callback){
//     console.log(num1+num2);
//     Callback();
// }--->  is function me as a parameter ek or function pass krna tha to yaha (add(num1,num2,Callback)) us function ko receive krne ke liye callback ek naam diya h usi naam se (Callback();) is function ke andr call kringe

// let a = 10;
// let b = 20;

// add(a,b,sayHello);---> jo function ka naam tha wo yaha pass kr diya

// function greet(){
//     console.log("Hello");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();
// }

// meet(greet);--->  ya use krne se weeeeeeeeeeeeeeeeepehle meet wala function call hoga yaha
// meet(greet());--->  ya use krne se pehle greet wala function call hoga 


// function zomatoOrderPlaced(){
//     console.log("We have started preparing your food");
// }

// function payment(amount){
//     console.log(`${amount} payment has initailized`)
//     console.log("payment is received");
//     zomatoOrderPlaced();
// }

// payment(500);


// // How JS Code Runs Behind the Scenes & Hoisting

// var a = 10;
// var b =20;

// function addNumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);

// console.log(sumResult1,sumResult2);

// jab bhi javascript ke code ko run krte h jab 
// code run ---> Execution context create(Ec) hota h EC means jab code ko run krna hota h to 2 phases me krte h
// 1st phase --> memory allocation phase
// 2nd phase --> Execution phase

// in memory allocation phase ---> jitne bhi code me variables present h unko memory allocate krni h  
// agr variable rahe to usme undefined daal de raha h or agr function rahe to jo bhi function ka code rahega wo daal dega
// var a = undefined ---> variable raha to undefine daal dega
// var b = undefined
// func addNumber = {func code} ---> functionraha to function code daal dega 
// var sumResult1 = undefined
// var sumResult2 = undefined

// memory allocation phase h ye meory allocate kaha ho rahi h --> primative type ke data uski memory allocate / primative ke small integer hote h unki stack ke ander hoti h or uske alawa jitne bhi hote h sbko heep me rakha jata h 


// in Execution phase ---> code execute krega
// a = 10
// b = 20
// func addNumber ={fn code}
// var sumResult1 = 30 ---> yaha num1+num2 ka sum hoga
// var sumResult2 = 9 ---> num1+num2 ka sum hoga

// jab code pehli baar run hota h usko globel execution context (GEC) kehte h means Jab JavaScript is file ko start se run karti hai, tab Global Execution Context banta hai
// GEC sirf 1 baar banta hai.
// var a = 10;
// var b = 20;
// function addNumber(...) { ... }
// var sumResult1 = addNumber(a, b);
// var sumResult2 = addNumber(4, 5);
// console.log(sumResult1, sumResult2);
// jab code 2nd time run ya baki time hota h wo normal execution context  hote h
// jaise sumResult1 me num1 num2 ki value rakhna hoti h wo code run time second hoga
// FEC jitni baar function call hoga utni baar banta hai. addNumber() 2 baar call hua, isliye 2 alag Function Execution Contexts bane.
// var sumResult1 = addNumber(a, b);
// var sumResult2 = addNumber(4, 5); 

// Global Executin context hoga wo stack me jata h

// memory allocation phase
// a = undefined
// b = undefined
// addNumber = {fn code}
// sumResult1 = (a,b)
// sumResult2 = (4,5)

// Execution Phase
// Ab values assign hoti hain
// a = 10
// b = 20

// //jab memory allocate ho a or value nhi di gayi ho or code run kr rahe ho console.log(a) to return a = <uninitialised> ise ham (temporal dead zone) bol skte H iska mtlb hi yahi jab tak variable me value na chali jaye tab tak access nhi hota


// let a = 10; 
// const b = 20;

// const addNumber = function(num1,num2){
//     const sum = num1+num2;
//     return sum;
// }

// const result = addNumber(a,b);
// console.log(result);

// // let const
// // Memory allocation
// // a = <uninitialised> (temporal dead zone)
// // b = <uninitialised> (temporal dead zone)
// // addNumber = <uninitialised> (temporal dead zone)
// // result = <uninitialised> (temporal dead zone)
// /// Execution
// // a = 10
// // b = 20
// // addNumber = {func code}
// // result = sum=a+b (30)


// // Scope , Closure, and Higher OF function (???)
// // Scope : (3 types)
// // Global Scope: Accessible for everyone
// // Functional Scope: accessible only to that function
// // Block Level Scope: accessible only to that block 

// let a = 10;
// const b = 20;
// // a and b dono variables global scope h to inko code m kahi bhi use kr skte ho
// // let const 3no scopes ko respect dete h or var global functional ko respect deta h block ko bilkul respect nhi deta


// if (true){
//     let d = 35;
//     console.log(d);
// }
// console.log(d);

// function greet(){
//     let c = 30;
//     console.log(c);
// }
// // c variable ka scope sirf function tak hi h function ke bahar isko koi bhi access nhi kr skta mean function ke bahar iska use nhi hoga so iska scope jo h functional scope h
// console.log(c);--->  functional scope h function ke bahar use kiya gya h error ayega

// greet();


// let global = 30;


// function createCounter(){

//     function increament(){
//         console.log("I am increament function");
//     }
//     increament();

// }
// createCounter();



// function createCounter(){

//     function increament(){
//         console.log("I am increament function");
//     }
//     return increament;
// }

// const countet = createCounter();
// console.log(counter); 
// counter();


// // Closure : 

// function createCounter(){

//     let count = 0;
//     function increament(){
//         count++
//         return count;
//     }
//     return increament;

// }
// console.log(count);--->  ye function me present h to accessible nhi hoga



// let balance = 500;
// balance+="Rohit";
// console.log(balance);


// let user = {
//     balance: 500,
//     deposite: function(amount){
//         if(typeof amount==="number" && amount>0){
//             this.balance+=amount;
//             return this.balance;
//         }
//     }
// }

// // console.log(user.deposite(200));
// user.deposite(200);
// console.log(user.balance);


// forEach, Filter, Reduce, Map, and Set

// const arr = [10,20,30,5,90,87];

// arr.forEach((number,index,arr))=>{
//    console.log(number,index,arr);     
// }--->  ye 3 arguments ko ek sath le skta h call back function H

// const arr = [10,20,30,5,90,87];
//    let sum = 0;

// arr.forEach((number)=> {
//    sum+=number;     
// })
// console.log(sum);


// Filter--> agr koi original array h usme se kuch selected element ko hi select krna h 

// const arr = [10,20,30,5,90,87];

// const newarr = arr.filter((number)=>number>25);--->  number>25 ye condition hai condition true huyi to ye usko select kr lega or agr false huyi to ye usko reject kr dega 

// const arr = [10,20,30,5,90,87];

// arr.filtering = function(compare){
//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newarr = arr.filtering((num)=>num>30);
// console.log(newarr);


// const a = [80,60,90,70,42,33];
// const answer = a.filtering((num)=>num>25);
// console.log(answer);


// Map--->
// Electronics
[{id; 1, name: "Laptop", category: "Electronices", price: 1200, inStock: true},
{id: 2, name: "Headphones", category: "Electronics", price: 200, instock: true},
{id: 3, name: "Monitors", category: "Electronics", price: 800, instock: false},
{id: 4, name: "Smartphones", category: "Electronics", price: 300, instock: true},
{id: 5, name: "Keyboards", category: "Electronics", price: 75, instock: true},
];

const newProducts = products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price).map((product)=> ({name:product.name price:product.price})
console.log(newProduct);

const ans = products.map((product)=>({name:product.name, price:product.price}))
console.log(ans);

// Reduce
accumulator = sum = 0

const tatalPrice = products.reduce((accumulator,currentValue)=>{
     return accumulator+currentValue.price;
    },0);
console.log(tatalPrice0);



// Data structure: set

// set ek type ka array hi hota h jisme ek unique value present hoti h
 
// const arr = [10,20,30,10,15,25,20];
// console.log(arr);

// const s1 = new Set(arr);---> isme sirf unique value milegi duplict thi unko ek hi bar lega mean koi 4 time bhi aya ek number to usko ek bhi br select karega set sirf unique value ko hi store krke rakhta h 
// s1.add(11);---> s1 set ke andr koi value ko add krna ho to jaise yaha 11 add hoga
// console,log(s1);

// console.log(s1.has(20));--->  perticular koi value presnt h ya nhi h check krne ke liye jaise yaha 20 present h ya nhi h to ye true or false me ans karega

// s1.delete(11);---> perticular koi value ko delete krna ho to ye use hoga jaise yaha 11 ko delete krna h

// console.log(s1.size);--->  array ka size kya h pata krne kitne values present h isme dekhne

// s1.clear();---> isse sari value clear ho jayegi to size bhi zero ho jayegi


const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];
const uniqueEmail = [...new Set (email)];---> spread operator use krke spread krke array ke andr dalne ke liye
console.log(uniqueEmail);
const s1 = new(email);
for(let num of s1){
    console.log(num);---> 
}---> for of loop se email pr iterat bhi kr skte h


// map;

// DOM