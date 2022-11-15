//1st test

function pigLatin(text) {
  let textArray = text.split("");
  console.log(textArray);
  //const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  let pigTextOutput = "";
  for (let index = 0; index < consonants.length; index += 1) {
  if (textArray[0] === consonants[index]) {
    let slicedArray = textArray.slice(1);
    slicedArray = slicedArray.push(textArray[0]);
    pigTextOutput = slicedArray.join("");
    return;
    //let firstElement = textArray.shift();
   // let newArray = textArray.push(firstElement);
    //pigTextOutput = newArray.join();
    //pigTextOutput = text.concat("way");
  } /*else if (textArray[0] !== vowels[index]) {
  }*/
  console.log(pigTextOutput);
  }
  
}