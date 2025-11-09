//Event Listener

// const view=document.querySelector("#view2");
// const div=view.querySelector("div");
// const h2=div.querySelector("h2");
// console.log(h2);

//syntax
//addEventListener(event, function, useCapture)

// const doSomething =()=>
// {
//     alert("do Something");
// }
// h2.addEventListener("click",doSomething);

// h2.removeEventListener("click",doSomething);

// // //click rename
//  h2.addEventListener("click",(event)=>
// {
//    console.log(event.target);
//    event.target.textContent="the First University";                                 
// } ); 


 //if page is ready
  document.addEventListener("readystatechange",(event)=>{
        if(event.target.readyState==="complete")
        {
            console.log("complete");
            initApp();
        }
})

   const initApp=()=>{
    const view=document.querySelector("#view2");
    const div=view.querySelector("div");
    const h2=div.querySelector("h2");

    view.addEventListener("click",(event)=>{
            //css changes a class add and remove
        view.classList.toggle("purple");
        view.classList.toggle("dakblue");
    })

     div.addEventListener("click",(event)=>{
         div.style.backgroundColor="orange";
     })

     h2.addEventListener("click",(event)=>{
         event.stopPropagation(); //it can stop before the elements

         const myText=event.target.textContent;
         myText==="java"?(event.target.textContent="python"):(event.target.textContent="java");
     }) 
 
 const nav=document.querySelector("nav");
     nav.addEventListener("mouseover",(event)=>{
         event.target.classList.add("height100")
     })
     nav.addEventListener("mouseout",(event)=>{
         event.target.classList.remove("height100")
     })
} 
 

//   document.addEventListener("readystatechange",(event)=>{
//      if(event.target.readyState==="complete"){
//      console.log("complete");
//      initApp();
//  }})

//   const initApp=()=>{         
   
//      const myForm=document.querySelector("#myForm");
//     myForm.addEventListener("submit",(event)=>{
//          event.preventDefault();
//          console.log("submit event")
//      })
//  }; 