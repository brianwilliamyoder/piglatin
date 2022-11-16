//1st test
function pigLatin(text) {
  let textArray = text.split("");
  console.log(textArray);
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  const vowels = ["a", "e", "i", "o", "u"];
  let pigTextOutput = "";
  for (let i = 0; i < consonants.length; i += 1) {
    if (textArray[0] === vowels[i]) {
     pigTextOutput = textArray.join().concat("way");
   }
     console.log(pigTextOutput);      
  } 
}
  
//2nd Test
function pigLatin(text) {
  let textArray = text.split("");
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  let pigTextOutput = "";
  for (let i = 0; i < consonants.length; i += 1) {
    if (textArray[0] === consonants[i]) {
      let slicedArray = textArray.slice(1);
      slicedArray.push(textArray[0]);
      pigTextOutput = slicedArray.join("");
      console.log(pigTextOutput);
      return;
     } else {
  console.log(pigTextOutput);
     }
   }
}
