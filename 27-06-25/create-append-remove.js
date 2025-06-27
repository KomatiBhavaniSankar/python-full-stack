let aish = document.createElement("p");
aish.textContent = "I'm Chitti";


document.getElementById("vasi").appendChild(aish);

aish.innerHTML = "memory 1 tera byte";
aish.style.color = "blue";
aish.style.fontSize = "20px";

if (typeof sana !== 'undefined' && sana) {
    sana.remove();
}

setTimeout(() => {
    let re = document.getElementsByClassName("list")[3];
    if (re) {
        re.remove();
    }
}, 2000);


setTimeout(() => {
    let newHeading = document.createElement("p");
    newHeading.innerHTML = "This is new";
    newHeading.style.color = "purple";
    newHeading.style.fontSize = "30px";
    document.body.appendChild(newHeading);
}, 3000);



let tagText = document.createElement("p");
tagText.textContent = "This text is append to the tag!";
tagText.style.color = "orange";
document.getElementById("vasi").appendChild(tagText);

let myList = document.createElement("ul");

for (let i = 1; i < 3; i++) {
    let listItem = document.createElement("li");  
    listItem.textContent = "Item " + i;           
    myList.appendChild(listItem);                 

document.body.appendChild(myList);             
}