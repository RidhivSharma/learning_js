// console.log("ridhiv")
// const accountnumber=123456
// let accountemail="vscbhnjmhgfxz"
// var acccounpassword="sdfghjk"
// accountwhat="asdfghjk"
// let test;// ; lagao ya na lagao koi farak ni padta hai 

// console.table([accountnumber,accountwhat,accountemail,acccounpassword,test])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "use strict";// what happes is in the earlier version of js some commands were differt to the new version so takle ki woh bhi na kharab ho or new version se bhi likh paye toh hamne yaha use strict kiya jiska matlab hain ki new rules ke hisab se code ko run kerke dekhe
// let accountholder="ridhiv"
// let age=18
// let male=true
// console.table([accountholder,age,male])
// console.log(typeof accountholder)
// console.log(typeof undefined)//undefined is a type 
// console.log(typeof null)// null is a object in js


//////////////////////////////////////////////////////////////conversion of datatype////////////////////////////////////////////////////////////////////////////////////
// let score=33;
// console.log(typeof score);
// console.log(score);
// let score_string_version= String(score);
// console.log(typeof score_string_version);
// console.log(score_string_version);

////////////////////////////////////
// let score="33";
// console.log(typeof score);
// console.log(score);
// let score_integer_version= Number(score);
// console.log(typeof score_integer_version);
// console.log(score_integer_version);
//////////////////////////////////////
// let score="33abc";
// console.log(typeof score);
// console.log(score);
// let score_integer_version= Number(score);
// console.log(typeof score_integer_version);//number
// console.log(score_integer_version);//nan

//////////////////////////////////////////////////////////////
// let score=null;
// console.log(typeof score);//object
// console.log(score);
// let score_integer_version= Number(score);
// console.log(typeof score_integer_version);
// console.log(score_integer_version);//0 as an output
////////////////////////////////////////////////////////////////
// let score=undefined;
// console.log(typeof score);//undefined
// console.log(score);//undefined
// let score_integer_version= Number(score);
// console.log(typeof score_integer_version);//number
// console.log(score_integer_version);//nan
///////////////////////////////////////////////////////////////
// let score=true;
// console.log(typeof score);
// console.log(score);
// let score_integer_version= Number(score);
// console.log(typeof score_integer_version);
// console.log(score_integer_version);

////////////////////////////////////////////////////////////////conversions///////////////////////////////////////////////////////////////////////
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)//in the cases of comparisons the conversion takes place hencce the null converts to the number 0 and gives true


// console.log("2"==2)
// console.log("2"===2)//yaha false diya hai kyuki ise khete hai strict check yaha datatype bhi check hoga ki same hai ki nahi 

//////////////////////////////////////////////////////////////////////////////////////////////////////// 
// //  Primitive
// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);





// // Reference (Non primitive)
// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }
// const myFunction = function(){
//     console.log("Hello world");
// }
// console.log(typeof anotherId);


///////////////////////////////////////////////////////////////////strings///////////////////////////////////////////////////////////////

// const name = "hitesh"
// const repoCount = 50
// console.log(name + repoCount + " Value");//we dont write lke this because bekar tareeka hai
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//ye tareeka use kerte hai instead

// const gameName = new String('hitesh-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-13, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'))
// console.log(url.includes('http'))
// console.log(gameName.split('-'));

//////////////////////////////////////////////////////////////numbers////////////////////////////////////////////////////////////////////////

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(5));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

////////////////////////////////////////////////////////////////math////////////////////////////////////////////////////////////////////////////

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)


/////////////////////////////////////////////////////////////array////////////////////////////////////////////////////////////////////////



// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]
// const myArr2 = new Array(1, 2, 3, 4)//jab ese define kiya hai toh squeare brackets ki zarurat nahi hoti hai

// console.log(myArr[1]);

///////////////////////////////////////////////////////////// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.unshift(9)//age value  insert kerta hai
// console.log(myArr)
// myArr.pop()
// myArr.shift()//age se hata hai 
// console.log(myArr)
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()//this converts the array to string 
// console.log(myArr);
// console.log(newArr);


////////////////////////////////////////////////////////////////// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)// ismee index of 3 will not will be included and real arr pe kkoi effect ni padega

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)//isme index 3 will be inclyded and at end origional arr se bhi values hat jayenge 
// console.log("C ", myArr);
// console.log(myn2);


////////////////////////////////////////////////////////////////////array part 2
// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// const all_new_heros = [...marvel_heros, ...dc_heros]//spread meathod kejta hai ise
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)//infinty ka matlab hai ki kitni depth tak apko elemnts ko concatinate kerna hai
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))
// console.log(Array.isArray(["Hitesh"]))
// console.log(Array.from("Hitesh"))//converts all the letters to the array
// console.log(Array.from({name: "hitesh"})) //  cant convert a dictonry you need to specfy that wether the key need to be converted or value

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));



///////////////////////////////////////////////////////////objects///////////////////////////////////////////////////////////////////////
// singleton
// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",//key mai app chahe strinf dalo ta nahi woh usko intrepret kerra hai as a string
//     [mySym]: "mykey1",//////symbols ko key ese banaya jata hai ye yad kero very very very important 
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])//accessing dono tareeke se hi jati hai per ese kero toh better rehta hai 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//ise ab freeze ho gaya hua hai matlab ki age ab kuch bhi  change nahi hone wala hai
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);//yaha this use kiya taki uskko pata chale ki konse jsuser use kiya hai this ki jagha Jsuser ko bhi use kersakye the per this works better here as jab data bada ho jata hai toh  this can be used for effeciency and code readibility
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


/////////////////////////////////////////////////////obejcts part 2///////////////////////////////////////////////////////////////////////////
// const tinderUser = new Object()
// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

////////////////////////////////////////////////////////////////////////////
// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);
///////////////////////////////////////////////////////////////////////////////


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)//isme jo {} diya hai ham keh rahe hai ki isme mai sare daldo objects agar hum isko nahi bhi lagaye toh jo phela obejt waha hoga woh target ban jayega or baki sare source ban jayenge 
// const obj3 = {...obj1, ...obj2}//spreading wala meathod hai ye toh 
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//this will retuen key value pair in terms of array 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//ye check kerta hai ki kya key exist kerti hai ki nahi

/////////////////////////////////////////////////////////////////
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }


// const {courseInstructor} = course
// console.log(courseInstructor);
// const {courseInstructor: instructor} = course
// console.log(instructor);

//////////////////////////////////////////////////////////////functions///////////////////////////////////////////////////////////////////////


// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// sayMyName()

///////////////////////////////////////////////////////////


// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


//////////////////////////////////////////////////////////////////////

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))

////////////////////////////////////////////////////////////////////////

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))


////////////////////////////////////////////////////////////////////////


// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)

/////////////////////////////////////////////////////////////////////////

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

///////////////////////////////////////////////////////////////////// arrow functions ///////////////////////////////////////////////////////////////////////


// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
///////////////////////////////////////////////////////////////////
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


//////////////////////////////////////////////////////////////////arrow function
// const chai =  () => {
//     let username = "hitesh"
//     console.log(username);
// }


// chai()
////////////////////////////////////////////////////////////////////
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2// ye mat liko

// const addTwo = (num1, num2) => ( num1 + num2 )/// bracket mai jo likoge woh return hoga 

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


///////////////////////////////////////////////////// Immediately Invoked Function Expressions (IIFE)/////////////////////////////////////////////////


// (function chai(){
    
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

///////////////////////////////////////////////////see the how the javascrip work part from the video///////////////////////////////////////
///////////////////////////////////////////////////control flow////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



// console.log(val1);

///////////////////////////////////////////////////////////// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

/////////////////////////////////////////////////////  HIGH ORDER ARRAY LOOP/////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {//yaha num ek variable hai jisme values ati hai
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// // Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
/////////////////////////////////////////////////////////this is not itertable////////////////////////////////////////////////////////////////////
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
////////////////////////////////////////////////////// for in loop/////////////////////////////////////////////////////////////////////////////////////////////////////////
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key);
   
// }
// for (const key in programming) {
    
//     console.log(programming[key]);
// }
///////////////////////////////////////////////////////////////////////////
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }//thisi will not give any output as map is not iterable 

///////////////////////////////////////////////////////////////////////////////////for each loop////////////////////////////////////////////////////////////

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )
///////////////////////////////////////////using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )
//////////////////////////////////////////////
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
////////////////////////////////////////////////
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
///////////////////////////////////////////////////
// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )
///////////////////////////////////////////////////////filter map and reduce//////////////////////////////////////////////////////////////////////////

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item//even after returning the undefined stills as th foreach funcion does not return anything even after giving the return commmand
// } )
// console.log(values);

////////////////////////////////////////////////////////////////////////////////////////////////////


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums)
////////////////////////////////////////////////

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

//////////////////////////////////////////////////////



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
/////////////////////////////////////////////////////////////////////////////////////////////////
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);
/////////////////////////////////////////////////////////////////////////////////////////////////////////reduce meathod/////////////////////////////////////////////////

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);
//////////////////////////////////////////////////////////////////////////////////////

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);

