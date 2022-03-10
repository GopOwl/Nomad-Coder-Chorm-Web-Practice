const title = document.querySelector(".hello:first-child h1");

function handTitleClick() {
    title.style.color = 'blue';
}

title.addEventListener("click", handTitleClick);