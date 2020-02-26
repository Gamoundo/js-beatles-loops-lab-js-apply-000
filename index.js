// add solution here
var sentences=[]
function theBeatlesPlay(arr1, arr2){
var i = 0

  for (i=0 ; i < arr1.length ; i ++ ) {
    sentences.push(arr1[i] + " plays " + arr2[i]);

  }
  return (sentences);
}



function johnLennonFacts(facts){
var i = 0
  while (i < facts.length) {

    facts[i] = facts[i] + "!!!";
    i++;
  }
  return (facts)
}
var howMuch=[]
function iLoveTheBeatles(num){
var i = num

  do {
howMuch.push('I Love The Beatles!');
i++;
  } while (num < 15);

}
