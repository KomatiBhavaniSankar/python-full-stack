let aish=document.createElement("p");

aish.textContent = "I'm Chitti";

document.getElementById("vasi").appendChild(aish);

aish.innerHTML=" memory 1 tera byte";
aish.style.color = "blue";
aish.style.fontSize = " 20px";

if(sana){
    sana.remove();
}

serTimeout(() =>{
    let re = document.getElementsByClassName("list")[3];
    if(re) {
        re.remove();
    }
},2000);


let newHeading = doc