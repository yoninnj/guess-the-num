'use strict';

const number=Math.trunc(Math.random() * 20)+1;
let score=20
let higsc=0

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value); 
    console.log(guess)
    if(!guess){
        document.querySelector('.message').textContent='▶Yo bro! u cant even type a number🤔';
    }
    else if(score<1){
        document.querySelector('.message').textContent='▶Yo loser! u lost';
    }
    else {

        if(guess==number){
            if(score>higsc){higsc=score
            document.querySelector('.highscore').textContent=higsc;
            }
            document.querySelector('.message').textContent='▶oh!😨 Atleast u are not complete garbage🙄';
            document.querySelector('.number').textContent=number;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
    }else{
    document.querySelector('.message').textContent= guess > number ? '▶aap ashmaan ki uchaiyo par🪂 thodi niche aaiye' : '▶I know u are low but dont make number low😉';
    score--;
    document.querySelector('.score').textContent=score;
}}
})
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    score=20
    document.querySelector('.message').textContent='Start guessing...';
    number=Math.trunc(Math.random() * 20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
})