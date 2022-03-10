const title = document.querySelector(".hello:first-child h1");

function handTitleClick() {
    title.style.color = 'blue';
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!"
}

title.addEventListener("click", handTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);