// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.

function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
  var inst ={};
  inst.upper : upperbound;
  inst.rand : randInt(upper);
  inst.counter :0;
  inst.guessMyNumber =guessMyNumber;
  inst.giveUp=giveUp;
  inst.numOfGuesses =numOfGuesses;

  return inst;

}

 var guessMyNumber=function(n){
      counter++;
      if (n > upper) {
        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
      } else if (n === rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    }

 var giveUp =   function(){
      return rand;
    }

 var numOfGuesses = function(n){
      counter++;
      if (n > upper) {
        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
      } else if (n === rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    } 