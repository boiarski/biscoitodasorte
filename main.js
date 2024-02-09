const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector('.fortuneCookie');
const newFortune = document.querySelector('.newFortune');
const fortune = document.querySelector('.sorte');

fortuneCookie.addEventListener('click', handleCookieClick);
newFortune.addEventListener('click', handleResetClick);

function handleCookieClick(){
    toggleScreen();
    fortuneRandomizer();
}

function handleResetClick(){
    toggleScreen();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}


function fortuneRandomizer() {
    const fortunes = [
        'A sorte acompanha os corajosos.',
        'O sucesso está nas pequenas atitudes diárias.',
        'Acredite nos seus sonhos, pois eles podem se realizar a qualquer momento.',
        'Um novo amor está prestes a entrar em sua vida.',
        'A vida é feita de desafios, mas você é mais forte do que imagina.',
        'Momentos difíceis estão prestes a passar, mantenha a fé.',
        'Uma grande oportunidade está a caminho, esteja preparado para agarrá-la.',
        'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
        'Seja gentil, pois pequenos gestos podem fazer uma grande diferença.',
        'Seja paciente, o melhor está por vir.'
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);

    fortune.querySelector('p').innerText = fortunes[randomIndex];
}
