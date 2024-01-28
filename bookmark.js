const bookmarked = document.querySelectorAll(".bookmark");
const newtip = document.querySelectorAll(".tooltip");


bookmarked.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        if (!element.classList.contains('bookmarked')){
            element.classList.add('bookmarked')
            newtip[index].innerHTML = "Bookmarked"
            bookmarked[index].src = "bookmark.png";
        } else {
            element.classList.remove('bookmarked')
            newtip[index].innerHTML = "Bookmark"
            bookmarked[index].src= "cass-icons/icons8-save-32.png";
        }
    })
})




