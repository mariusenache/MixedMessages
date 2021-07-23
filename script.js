console.log('hELLO wORLD !!')

 
let verbs1Array = ['should ', 'need ', "shouldn't ", 'must not ', 'will improve if you ', 'be aware when you '];

let verbs2Array = ['eat ', 'walk ', 'feed ', 'cut ', 'exercise ', 'trust ', 'drive '];

let nounsArray = ['the cheese ', 'the dog ', 'the trees ', 'the fats ', 'mode ', 'less ', 'the bear ', 'no one ', 'all ', 'dumbbells '];



function getRandWord(fromThisArray){
    let x=Math.floor(Math.random() * fromThisArray.length);
    return fromThisArray[x];
}

console.log("You " + getRandWord(verbs1Array) + getRandWord(verbs2Array) + getRandWord(nounsArray) + "!");

