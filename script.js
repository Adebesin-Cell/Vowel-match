const vowels = ["a", "e", "i", "o", "u"];
let count = 0;
let vowelsIncluded = [];
//Using a nested for loop and strict equality
function match(str) {
  let stringLength = str.length;
  for (let i = 0; i < stringLength; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
        vowelsIncluded.push(str[i]);
      }
    }
  }
  return count, vowelsIncluded;
}
console.log(match("BakerBread"));

//Using a nested for loop and Js .includes() method
let count2 = 0;
let vowelsIncluded2 = [];
function match2(str) {
  let stringLength = str.length;
  for (let i = 0; i < stringLength; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i].includes(vowels[j])) {
        count2++;
        vowelsIncluded2.push(str[i]);
      }
    }
  }
  return count2, vowelsIncluded;
}

console.log(match2("MassageMe"));
