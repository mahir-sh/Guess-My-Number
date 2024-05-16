'use strict';


let secretnum = Math.trunc(Math.random()*20)+1;
console.log(secretnum);
let score = 20; 

let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(typeof guess);


    if(!guess){
        document.querySelector('.message').textContent = 'No Number 🛑🛑🛑!!!';

    }else if(guess === secretnum){

       console.log(document.querySelector('.message').textContent = 'correct Number!!!');
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';
       document.querySelector ('.number').textContent = secretnum;
       if(score >= highScore){
        highScore=score ;
        document.querySelector('.highscore').textContent = highScore;
       }
    

    }else if(guess > secretnum){
        if(score > 1 ){
            document.querySelector('.message').textContent = 'Too High!!!';
            score--;
            document.querySelector('.score').textContent = score;

        }else {
            document.querySelector('.message').textContent = 'You Lost the Game!!!';
        }
    

    }else if(guess < secretnum){
        if(score > 1){
        document.querySelector('.message').textContent = 'Too Low!!!';
        score--;
        document.querySelector('.score').textContent = score;

        }else {
            document.querySelector('.message').textContent = 'You Lost the Game!!!';
        }

    }

});


document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretnum = Math.trunc(Math.random()*20)+1;
    document.querySelector ('.number').textContent = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').value ='' ;
    document.querySelector('.guess').value ='' ;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '20rem';
       
    
})