// element selection
const dice1 = document.querySelector('dice-1');
const dice2 = document.querySelector('dice-2');
const psum = document.querySelector('.dice.sum');
const btnRoll = document.querySelector('.btn-roll');

btnRoll.addEventListener('click', function(){
   let d1 = GetRandomDice();
   let d2 = GetRandomDice();
  
  //update gui
 document.querySelector('.dice1').src = `img/dice-${d1}.png`;
      document.querySelector('.dice2').src = `img/dice-${d2}.png`;
  });

 //generera slumpmässig tärna
function GetRandomDice(){
    return Math.ceil(Math.random() *6 ); //1-6
}