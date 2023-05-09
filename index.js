let totalSeconds = 0;
let minutes = 0;
let seconds = 0;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    totalSeconds = choice.value * 60;
    
    let cpt = setInterval(() => {
        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;
        countdownDisplay.innerHTML = `<p>${minutes}:${seconds}</p>`;
        totalSeconds -= 1;
    }, 1000);
    
    setTimeout(() => {
        clearInterval(cpt);
    }, totalSeconds * 1000);
});