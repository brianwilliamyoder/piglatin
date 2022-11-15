Describe: pigLatin();

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will shift initial consonant to the end of the string."
Code: pigLatin("bite");
Expected Output: "iteb"

Test: "It will shift multiple consonants to end of the string."
Code: pigLatin("plum");
Expected Output: "umpl";

Test: "If the word begins with "qu", "qu" is shifted to index -2 and -1."
Code: pigLatin("quite");
Expected Output: "itequ"

Test: "If "qu" occurs after first consonsant, only the first consonant shifts to the end and "qu" stays in place."
Code: pigLatin("square");
Expected Output: "quares";

Test: "It will concatenate "-ay" to the end of strings that contain initial consonants."
Code: pigLatin("shift");
Expected Output: "iftshay";






Basma's Code

function pigLatin(word) {
  word=word.toLowerCase();

  for (let i = 0; i<word.length; i++){
    vowelArray = ["a", "e", "i", "o", "u"];
    if (vowelArray.indexOf(word[i]) > -1){
      word=word+"way";
      break;
    }else{
        let consonant = word.slice(0, i);
        let leftOver = word.slice(i, word.length);
        word = leftOver+consonant+"ay";
        break;}
      }
  return word;
}