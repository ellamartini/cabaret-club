// REVEAL PARAGRAPHS AS YOU CLICK THROUGH

// buttons to reveal paragraphs
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// paragraph blocks
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');


button1.addEventListener('click', () => {
    button1.style.visibility = 'hidden';
    t2.style.visibility = 'visible';
    button2.style.visibility = 'visible';
})


button2.addEventListener('click', () => {
    button2.style.visibility = 'hidden';
})

//HOVER EFFECTS

const atmosphere = document.getElementById('atmosphereSpan');
const livingInTheGame = document.getElementById('livingInTheGameSpan');
const rdr2 = document.getElementById('rdr2');

atmosphere.addEventListener('mouseover', () => {
    rdr2.style.visibility = 'visible';
})

atmosphere.addEventListener('mouseout', () => {
    rdr2.style.visibility = 'hidden';
})

livingInTheGame.addEventListener('mouseover', () => {
    rdr2.style.visibility = 'visible';
})

livingInTheGame.addEventListener('mouseout', () => {
    rdr2.style.visibility = 'hidden';
})



// GIF REVEALS

const clickHere = document.getElementById('clickHereBlue');
const sparkleHeart = document.getElementById('sparkleHeart');
const twinkleSound = new Audio('assets/twinkleSound.mp3');

clickHere.addEventListener('click', () => {
    t1.style.visibility = 'visible';
    button1.style.visibility = 'visible';
    clickHere.style.visibility = 'hidden';
    sparkleHeart.style.visibility = 'visible';
    twinkleSound.play();
    sparkleHeart.style.animationPlayState = 'running';
})


// sparkleHeart.addEventListener('hover', () => {
//     twinkleSound.play();
// })

