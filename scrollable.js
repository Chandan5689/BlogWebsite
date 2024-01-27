const tabs = document.querySelectorAll(".scrollable-container a");
const rightarrow = document.querySelector(".scrollable-container .rightArrow svg")
const leftarrow = document.querySelector(".scrollable-container .leftArrow svg")
const tabList = document.querySelector(".scrollable-container ul");

const leftArrowBox = document.querySelector(".scrollable-container .leftArrow");
const rightArrowBox = document.querySelector(".scrollable-container .rightArrow");
tabs.forEach((tab) =>{
    
    tab.addEventListener("click",()=>{
        activeRemover();
        tab.classList.add("active");
        
    });
});

function activeRemover()
{
    const selectedTab =document.querySelector(".scrollable-container a.active");
    selectedTab.classList.remove("active");
}


rightarrow.addEventListener("click",()=>{
        tabList.scrollLeft += 200;
        scrolled();
});

leftarrow.addEventListener("click",()=>{
        tabList.scrollLeft -=200;
        scrolled();
})

const scrolled = ()=>{
    if(tabList.scrollLeft>=20)
    {
        leftArrowBox.classList.add("active");
    }
    else
    {
        leftArrowBox.classList.remove("active");
    }
const maxScrollWidth = tabList.scrollWidth - tabList.clientWidth-20;



if(tabList.scrollLeft>=maxScrollWidth)
{
    rightArrowBox.classList.remove("active");
}
else
{
    rightArrowBox.classList.add("active");
}
}

tabList.addEventListener("scroll",scrolled);

let dragging = false;

const drag = (e) => {
    if(!dragging) return;
    tabList.classList.add("dragging");
    tabList.scrollLeft -=  e.movementX; 
};

tabList.addEventListener("mousedown",()=>{
    dragging= true;
    

});

tabList.addEventListener("mousemove",drag);

document.addEventListener("mouseup",()=>{
    dragging = false;
    tabList.classList.remove("dragging");
   
});

