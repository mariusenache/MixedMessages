console.log('hELLO wORLD !!')

 
let verbs1Array = ['should ', 'need to ', "shouldn't ", 'must not ', 'will improve if you ', 'be aware when you ', 'will understand when you ', 'will find the answer when you ', 'will be in trouble if you '];

let verbs2Array = ['eat ', 'walk ', 'feed ', 'cut ', 'exercise ', 'trust ', 'drive ', 'tame ', 'pass ', 'release ', 'pet ', 'burn ', 'play ', 'respect ', 'praise '];

let nounsArray = ['the cheese ', 'the dog ', 'the trees ', 'the fats ', 'more ', 'less ', 'the bear ', 'no one ', 'everyone ', 'dumbbells ', 'the rats ', 'the cow ', 'the bacon '];



function getRandWord(fromThisArray){
    let x=Math.floor(Math.random() * fromThisArray.length);
    return fromThisArray[x];
}

console.log("You " + getRandWord(verbs1Array) + getRandWord(verbs2Array) + getRandWord(nounsArray) + "!!");

