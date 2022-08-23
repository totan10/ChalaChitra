const arrows= document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    arrow.addEventListener("click",()=>{
        movielists[i].style.transform=`translate(${
            movielists[i].computedStyleMap().get("transform")[0].x.value -300
        }px)`;
    })

})