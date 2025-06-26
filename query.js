 document.body.style.backgroundColor = "lightblue";

document.getElementById("header").innerHTML = "Hello world";

document.getElementById("header").style.color="red";

document.getElementById("para").style.color="blue";
document.getElementById("para1").style.color="red";
document.getElementById("para2").style.color="pink";

//document.getElementsByClassName("ds")[0].style.color="green";
//document.getElementsByClassName("ds")[1].style.color="blue";
//document.getElementsByClassName("ds")[2].style.color="red";


let unseen = document.querySelectorAll(".DAA");

unseen[0].style.color ="Red";

unseen[1].style.color ="green";

unseen[2].style.color ="pink";


let bhavani = document.getElementsByClassName("ds");

bhavani[0].style.color ="Red";

bhavani[1].style.color ="green";

bhavani[2].style.color ="pink";

//QuertSelect applies all the attribute to the element in the class which first encountered

//Function to toggle background color 
function changeBackground() {
document.body.style.backgroundColor = document.body.style.backgroundColor === "blue" ? "red": "GREEN";

}

function changetext(){
document.getElementById("clg").innerHTML=" MRCET , CMR";
document.getElementById("clg").style.background="blue";
document.getElementById("clg").style.fontSize="35px";
document.getElementById("clg").style.color="pink";
document.getElementById("clg").style.textAlign="center";
document.getElementById("clg").style.borderRadius="100px";
}

