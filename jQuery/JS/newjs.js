const view1=document.getElementById("view1");
console.log(view1);
const view2=document.querySelector("#view2");
console.log(view2);
view2.style.display="none";
const view= document.getElementsByClassName("view");
console.log(view);
const divs=view1.querySelectorAll("div");
console.log(divs);
const evenDivs=view1.querySelectorAll("div:nth-of-type(even)");
console.log(evenDivs);

evenDivs[4].style.backgroundColor="red";

for(let i=0;i<evenDivs.length;i++)
{
evenDivs[i].style.backgroundColor="red";
evenDivs[i].style.width="150px";
}

function change(){
 const navText = document.querySelector("nav h1");
 console.log(navText);
 navText.textContent = "Hello World 123"; 
}

const navBar = document.querySelector("nav");
console.log(navBar);
navBar.innerHTML = '<h1>page</h1> <p>navigation </p>';
navBar.style.justifyContent ='flex-evenly';

// // remove

view1.style.display = "none";
view2.style.display = "flex";

console.log(view2.lastElementChild);

view2.lastElementChild.remove(); 


// // add
 const createDiv = (view1, view2) =>
     {
    const newDiv = document.createElement("div");
     newDiv.style.display = "flex";
      newDiv.textContent = view2;
     newDiv.style.width = "100px";
     newDiv.style.height = "100px";
     newDiv.style.margin = "10px";
     newDiv.style.backgroundColor = "yellow";
     newDiv.style.color = "red";
     newDiv.style.justifyContent = "center";
     newDiv.style.alignItems = "center";
    
    view1.append(newDiv);
};

 createDiv(view2, "new element");

for (let i = 1; i < 13; i++) {
    createDiv(view2, i); 
// }
}