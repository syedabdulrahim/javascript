var scores,roundScore,activePlayer;




scores=[0,0];
roundScore=0;
activePlayer=0;

//console.log(dice);
//document.querySelector("#current-0").textContent= dice;
//document.querySelector("#current-" + activePlayer).innerHTML='<em>'+dice+'</em>';//SETTER
//var test= document.querySelector("#current-"+activePlayer).textContent;//GETTER
document.querySelector('.dice').style.display='none';

/*function btn()
{
    
    //do something  
}
*/

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    
    
    //generate the random number
    var dice =Math.floor(Math.random()*6)+1;
   // 2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-' + dice + '.png';
    
if(dice!==1)
    {
        // update thse score
        roundScore+=dice;
document.querySelector("#current-"+activePlayer).textContent= roundScore;
    }
else{
    //change active player if dice is== 1
    activePlayer ===0? activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
} 

});
document.querySelector('.btn-hold').addEventListener('click',function(){
   //add current score to global score
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // update UI
    //check if player won the game
    
});



