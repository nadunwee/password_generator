const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const simpleLetters = [];
const specialCharacters = [',', '.', '/', '~', '`', '@', '!', '#', '$',' %', '^', '&', '*'];

const passwdPara = document.querySelector('.password-p');
const lengthValue = document.getElementById('length-value');
const lengthSlider = document.getElementById('password-length');

const numbersId = document.getElementById('numbers');
const capitalLettersId = document.getElementById('capitalletters');
const simpleLettersId = document.getElementById('simpleletters');
const specialCharactersId = document.getElementById('specialcharacters');

function generatePassword() {
  let password = '';
  const length = lengthSlider.value; // Desired password length

  let passwordArray = [];

  if (numbersId.checked) {
    for (let i = 0; i < numbers.length; i++) {
      passwordArray.push(numbers[i]);
    };
  };
  if (capitalLettersId.checked) {
    for (let i = 0; i < capitalLetters.length; i++) {
      passwordArray.push(capitalLetters[i]);
    };
  };
  if (simpleLettersId.checked) {
    for (let i = 0; i < simpleLetters.length; i++) {
      passwordArray.push(simpleLetters[i]);
    };
  };
  if (specialCharactersId.checked) {
    for (let i = 0; i < specialCharacters.length; i++) {
      passwordArray.push(specialCharacters[i]);
    };
  };

  if (!specialCharactersId.checked && !simpleLettersId.checked && !capitalLettersId.checked && !numbersId.checked) {
    password = '';
  } else {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordArray.length);
      password += passwordArray[randomIndex];
    };
  }
  
  passwdPara.textContent = password;
}


function updateLengthValue() {
  lengthValue.textContent = lengthSlider.value;
}


function simpleLetter() {
  for (let i = 0; i < capitalLetters.length; i++) {
    simpleLetters.push(capitalLetters[i].toLocaleLowerCase());
  };
  return simpleLetters;
}
simpleLetter();