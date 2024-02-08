const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector('.fortuneCookie');
const newFortune = document.querySelector('.newFortune');

fortuneCookie.addEventListener('click', handleResetClick);
newFortune.addEventListener('click', handleResetClick);

function handleResetClick(){
    toggleScreen();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

