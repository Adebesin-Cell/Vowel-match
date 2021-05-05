const vowels = ["a", "e", "i", "o", "u"];
let count = 0;

//Using a nested for loop and strict equality
function match(str) {
  let stringLength = str.length;
  for (let i = 0; i < stringLength; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log(match("console"));

//Using a nested for loop and Js .includes() method
let count2 = 0;
function match2(str) {
  let stringLength = str.length;
  for (let i = 0; i < stringLength; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i].includes(vowels[j])) {
        count2++;
      }
    }
  }
  return count2;
}
