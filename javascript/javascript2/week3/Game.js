const input = document.getElementById('input');
const button = document.getElementById('btn');
const printL = document.getElementById('printL');
const printS = document.getElementById('printS');
const pressKey = document.querySelector('body');
let counterS = 0;
let counterL = 0;
const winnerMsg = document.getElementById('winner');
const restart = document.getElementById('restart');

///timer 
const timer = document.getElementById('timer');
const time = input.value;
//getting value for input
const durationTime = function () {
    return input.value
};
/////////keys 
const print = function (e) {
    if (e.key == 'l') {
        counterL++
        printL.innerText = counterL
    } else if (e.key == 's') {
        counterS++
        printS.innerText = counterS
    };
};
const game = function () {
    pressKey.addEventListener('keydown', print);
    setTimeout(() => {
        if (counterL > counterS) {
            winnerMsg.innerText = 'Player L winner '
        } else if (counterS > counterL) {
            winnerMsg.innerText = 'Player S winner '
        } else if (counterL == 0 && counterS == 0) {
            winnerMsg.innerText = 'Hey... Lets play'
        } else {
            winnerMsg.innerText = ' Draw Game ..Try Again!'
        };
    }, 1000 * durationTime());
    let timeCounter = durationTime();

    const timerPrint = function () {
        console.log('start');
        if (timeCounter >= 0) {
            timer.innerHTML = timeCounter
            timeCounter--;
        }
    }
    button.addEventListener('click', game);

    /////restart function
    restart.addEventListener('click', restartGame);
    const restartGame = function () {
        counterL = 0;
        counterS = 0;
        printL.innerText = counterL;
        printS.innerText = counterS;
        game();
    };
}
    