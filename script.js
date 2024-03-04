let guessedNumberInput = document.getElementById('numberinput');
let submitButton = document.getElementById('numbersubmit');
let remainingTries = document.getElementById('triesremaining');
let output = document.getElementById('result');

remainingTries.textContent = 3;

randomNumberGenerated = Math.floor(Math.random()*15)+1;

guessedNumberInput.addEventListener("input",()=>{
    if(guessedNumberInput.value.length>2){
        guessedNumberInput.value = guessedNumberInput.value.slice(0,2);
        alert('The number should be between 1 to 15')
    }
})

submitButton.addEventListener("click",()=>{
    let guess = Number(guessedNumberInput.value);
    if(guess === "" || isNaN(guess) || guess>15 || guess<1){
        guessedNumberInput.value = "";
        alert("Enter a valid number between 1 to 15");
        return;
    }

    if(guess === randomNumberGenerated){
        output.textContent = "You won the game " +  String.fromCodePoint(128513);
        submitButton.disabled = true;
    }
    else if(Number(remainingTries.textContent) === 0){
        output.textContent = "You ran out of tries! "+ String.fromCodePoint(128532);
        submitButton.disabled = true;
    }
    else{
        if(Number(remainingTries.textContent) > 0){
            remainingTries.textContent = Number(remainingTries.textContent)-1;
            output.textContent = guess > randomNumberGenerated ? "Your guess is too high" : "Your guess is too low";
        }
    }
})