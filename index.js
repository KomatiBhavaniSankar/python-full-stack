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