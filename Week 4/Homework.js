let sentence = "The quick brown fox from jumped over the lazy dog";
let vowels = 'AEIOU'
let upperCase = sentence.toUpperCase();
for(let i = 0; i < upperCase.length; i++){
    if(vowels.indexOf(upperCase.charAt(i))){
        upperCase.splice(i, 1)
    }
}
console.log(upperCase)
