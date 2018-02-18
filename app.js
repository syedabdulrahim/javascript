var scores,roundScore,activePlayer;




scores=[0,0];
roundScore=0;
activePlayer=1;

//console.log(dice);
//document.querySelector("#current-0").textContent= dice;
//document.querySelector("#current-" + activePlayer).innerHTML='<em>'+dice+'</em>';//SETTER
var test= document.querySelector("#current-"+activePlayer).textContent;//GETTER


/*function btn()
{
    
    //do something here
}
*/

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    
    
    //generate the random number
    var dice =Math.floor(Math.random()*6)+1;
   // 2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-' + dice + '.png';
    
});



