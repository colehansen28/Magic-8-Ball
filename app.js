var listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Certainly", "In your dreams."];
const button = document.getElementById("questionButton");
const newButton = document.getElementById("newQuestionButton")
var input = document.querySelector("input")
let answer = document.getElementById("answer");
const ball = document.querySelector(".makeBall");
const eight = document.querySelector(".eight")
let randomAnswer = '';

//small functions to add to UI
function removeError(){
    input.classList.remove('error')
}

//get random number
function getRandomNumber (){
   randomAnswer = listOfAnswers[Math.floor(Math.random()* listOfAnswers.length)]
}

// one function to spin the eight, hide, and show answer
function spinEight(){
    eight.classList.remove('hidden');
    answer.classList.add('hidden')

    //hide eight
    function hideEight(){
            eight.classList.add("hidden")
    }
    // one function to creat the answer
    function showAnswer(){
        answer.classList.remove("hidden")
        input.value = ''
    }

    //add spin to eight 
    eight.classList.add("spin")

    //Eight ball action delay sequence
    setTimeout(function() {
        setTimeout(function() {
          showAnswer()
        },100)
        hideEight()
      },2000)

}

// function to listen to the click
button.addEventListener("click", ()=>{

    function askQuestion(){
        if(input.value ==''){
            console.error("No Input")
            input.classList.add("error")
            console.log(input)
            setTimeout(removeError,800)
        }else{
            getRandomNumber()
            spinEight()
            answer.innerHTML = randomAnswer
        }
    }
    askQuestion()
})


