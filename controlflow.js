let day = 3;
switch (day) {
    case 1:
        console.log("a");
        break;
    case 2:
        console.log("b");
        break;
    case 3:
        console.log("c");
        break;
    case 4:
        console.log("d");
        break;
    case 5:
        console.log("e");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invaild");

}

// "while"

let j = 0;
while (j < 5){
    console.log("while loop iteration:", j);
    j++;
}

console.log("/n");
let k = 0;
do{
    console.log("Do..while loop iteration", k);
    k++;
}while(k<5);