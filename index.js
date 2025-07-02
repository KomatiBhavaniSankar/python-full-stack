//console.log("hello world");

//function sayHello(){

  //  console.log("hello function");
//}

//sayHello();
//console.log("new");

console.log("one");
console.log("2");

setTimeout(()=> {

console.log("hello world");

},5000);
console.log("three");
console.log("four");

function sum(a,b){

    console.log(a+b);
}

function calculator(a,b,ds){
    ds(a,b);
}

calculator(5,10, sum);

calculator(5,10,(a,b)=>{
    console.log(a+b);
});


console.log("one");
console.log("2");

const hello = ()=> {
    
console.log("hello world2");

}

setTimeout(hello,5000)
console.log("three");
console.log("four");

function getData(dataid){
setTimeout(()=> {

console.log("Fetch data for", dataid);

}, 5000);

}

getData(1);
getData(2);
getData(3);
/*
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I'm IronMan");
    resolve("reolved ")
   // reject("something went wrong");
  });
};

let result = getPromise();

result
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("error", error);
  });
*/



//===============================================================================//
// PROMISE CHAINING IS USED TO ENSURE  ONE TASK STARTS AFTER THR PERVIOUS COMPLETES

function asyncFunc1(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("data2");
            resolve("succes");
        }, 4000)
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("data2");
            resolve("succes");
        }, 4000)
    });
}

console.log("fetching data 1");
let p1 = asyncFunc1();
p1.then((data)=>{
console.log("Data Fetched", data);
console.log("fetching data 2");

let p2 = asyncFunc2();
p2.then((data)=>{
console.log("Data fetchd", data);
});


})