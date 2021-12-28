const words = [
    "pies",
    "konstantynopolitańczykowianeczka",
    "brzęczyszczykiewicz",
    "pszczyna"

 ]
const lettersWrapper = document.querySelector(".letters");
const hangmanImg = document.querySelector("img.img");
let letters;
let lettersElements = [];
let hangmanState = 0;
let guessedLetters = 0;

init();

function init(){
    lettersBtn();
    letters = generateLetters();
}

function lettersBtn(){
    buttons = document.querySelectorAll(".btns button");
    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.addEventListener("click", function checkLetter(){
            let correctLetter = false;
            for (let index = 0; index < letters.length; index++) {
                const letter = letters[index];
                this.disabled = true;
                if(letter === this.innerText.toLowerCase()){
                    lettersElements[index].innerText = letter;
                    correctLetter = true;
                    guessedLetters ++;
                    if (guessedLetters === letters.length){
                        document.querySelector('.winWarm').classList.toggle('show');
                        document.querySelector('.container').classList.toggle('show');
                        break;
                    }
                }
            }
            if (!correctLetter){
                hangmanState++;
                if (hangmanState === 7){
                    console.log("koniec")
                    document.querySelector('.loseWarm').classList.toggle('show');
                    document.querySelector('.container').classList.toggle('show');
                    for (let index = 0; index < buttons.length; index++) {
                        const button = buttons[index];
                        button.disabled = true;
                        
                    }
                    
                }
                hangmanImg.src = `/image/${hangmanState}.png`
                
            }
            
        })
    }
}

function generateLetters(){
    const wordIndex = Math.floor(Math.random() * words.length)
    let word = words[wordIndex];
    letters = word.split("");
    for (let index = 0; index < letters.length; index++) {
        const letterElement = document.createElement("p")
        lettersWrapper.appendChild(letterElement);
        lettersElements.push(letterElement);
    }
    return letters
}


