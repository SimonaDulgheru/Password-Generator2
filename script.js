
let minChar = 8;
let maxChar = 128;
let userInput;
let num;
let password;

const charPass = {
                fullChar:`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[ \ ]^_{|}~`,
                lowerCase:`abcdefghijklmnoprstuvwxyz`,
                upperCase:`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
                numbers: `0123456789`,
                specialChar:`!"#$%&'(/)*+,-.:;<=>?@[\]^_{|}~`};

const generateBtn = document.querySelector(`#generate`);
const textArea = document.querySelector(`#gen-password`);
const copyBtn = document.querySelector(`#copy`);



generateBtn.addEventListener(`mouseover`, function () {

    if(!generateBtn.classList.contains(`button-mouse`))
    {
        generateBtn.classList.add(`button-mouse`);
    }
    else
    {
        generateBtn.classList.remove(`button-mouse`);
    }
});


generateBtn.addEventListener(`click`, function () {
    
    userInput = prompt(`Please select your desired password length.The longer a password, the more secure it is. Type a number between 8 and 128.`);
   
    if(choosePass() === false )
        {
        userInput = prompt(`Please select your desired password length.The longer a password, the more secure it is. Type a number between 8 and 128.`);
        choosePass();
        textArea.randomPassword(charPass,num) ="";
        }
     else
        {
        randomPassword(charPass,num);
        }
           
});

function choosePass(){
   
    num = Number(userInput);
    while (Number(userInput) < minChar || Number(userInput) > maxChar) 
    {
        userInput = prompt(`Invalid number! Please type a number between 8 and 128.`);
    }

    let lowerCase = confirm(`Would you like your password to have LowerCase letters?`);
    let upperCase = confirm(` Do you want to add UpperCase letters as well?`);
    let numbers = confirm(`Any Numbers to be included in your password?`);
    let specialChar = confirm(`What about Special Characters?`)

    let possibleChar = ``;

    if (lowerCase)
        {
        possibleChar = possibleChar + charPass.lowerCase
        }
    if (upperCase) 
        {
        possibleChar= possibleChar + charPass.upperCase
        }
    if (numbers) 
        {
        possibleChar= possibleChar + charPass.numbers
        }
    if (specialChar) 
        {
        possibleChar= possibleChar + charPass.specialChar
        }
    if (!lowerCase && !upperCase && !numbers && !specialChar)
        {
            confirmPass();
        }
    password = randomPassword(possibleChar,num)
            return (textArea.value) = password;
    };
  
    
function randomPassword(charPass,num) {
  
    let str = ``;
    while (str.length < num)
     {
     str += charPass[Math.floor(Math.random() * charPass.length)];
     }
    return str;
};



function confirmPass(){
    userInput = confirm(`Do you want to continue?`);
    if(userInput ===false)
    {
        alert(`Thank you for visiting us!`);
    }
    else
    {
        textArea.value = "";
        choosePass();
    }
}; 


copyBtn.addEventListener(`mouseover`,function(){
    if(!copyBtn.classList.contains(`copy-mouse`))
    {
        copyBtn.classList.add(`copy-mouse`);
    }
    else
    {
        copyBtn.classList.remove(`copy-mouse`);
    }
});

copyBtn.addEventListener(`click`,function(){
    let copyPass = document.querySelector(`#gen-password`);
    copyPass.select();
    document.execCommand(`copy`);
    alert(`Copied to clipboard`);
});





