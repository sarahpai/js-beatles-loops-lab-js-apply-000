function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
  newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return newArr;
}


// create empty facts array.  newFacts
//make i = 0 ; using it for looping with while
// use while loop (0 < facts.length)
// newFacts becomes : facts[0] + !!! so first facts in line then loops through
// i++ helps continue through the facts.length

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0
  while(i < facts.length) {
  newFacts.push(`${facts[i]}` + "!!!");
  i++;
}
  return newFacts;
} 



function iLoveTheBeatles(n){
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    n++;
} while (n < 15) ;
  return newArr;
}








/*function theBeatlesPlay (musicians, instruments){
var newArr = [];
for (var i = 0; i < musicians.length; i++){
newArr.push(`${musicians[i]} plays ${instruments[i]}`);
}
return newArr;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
   newFacts.push(`${facts[i]}` + '!!!');
    i++;
  }
  return newFacts;
}


function iLoveTheBeatles(n){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    n++;
  } while ( n < 15);
  
  return arr;
}
*/