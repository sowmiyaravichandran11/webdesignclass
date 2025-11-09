const container=document.querySelector('.container');
window.addEventListener('scroll',()=>
{
    const scrollY=window.scrollY;
    const triggerpoint=window.innerHeight*0.8;
    const containerTop=container.getBoundingClientRect().top;
    console.log(containerTop,triggerpoint)
    if(containerTop<triggerpoint)
    {
        container.classList.add('visible');
    }
})