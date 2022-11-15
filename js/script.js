function pigLatin(text) {
  let textArray = text.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  let pigTextOutput = "";
  for (let index = 0; index < text.length; index += 1) {

  if (textArray[0] === vowels[index]) {
    pigTextOutput = text.concat("way");
  }
 
  console.log(pigTextOutput);
  }
}