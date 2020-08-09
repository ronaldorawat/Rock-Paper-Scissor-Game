let userScore=0;
let computerScore=0;

const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");

const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div= document.getElementById("rock");
const paper_div= document.getElementById("paper");
const scissors_div= document.getElementById("scissor");




function getComputerChoice()
{
    const choices= ['rock','paper','scissor'];
    const randomNumber= Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice)
{
 userScore++;
 userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML = computerScore;
 const userChoice_div= document.getElementById(userChoice);
 const smallUserWord= "user".fontsize(3).sub();
 const smallComputerWord= "computer".fontsize(3).sub();
 result_p.innerHTML = userChoice+" "+smallUserWord+ " beats "+computerChoice+" "+smallComputerWord+ "    !! You Won !! 🔥 😄 🎁";
 userChoice_div.classList.add('green-glow');
 setTimeout(function (){userChoice_div.classList.remove('green-glow') },800);
}



function lose(userChoice, computerChoice)
{
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord= "user".fontsize(3).sub();
    const userChoice_div= document.getElementById(userChoice);
    const smallComputerWord= "computer".fontsize(3).sub();
    result_p.innerHTML = userChoice+" "+smallUserWord+ " loses to "+computerChoice+" "+smallComputerWord+ "   !! You Lost !! 😭😏";
    userChoice_div.classList.add('red-glow');
    setTimeout(function (){userChoice_div.classList.remove('red-glow') },800);
  
}

function draw(userChoice, computerChoice)
{
    
    const userChoice_div= document.getElementById(userChoice);
    const smallUserWord= "user".fontsize(3).sub();
    const smallComputerWord= "computer".fontsize(3).sub();
    result_p.innerHTML = userChoice+" "+smallUserWord+ " draws to "+computerChoice+" "+smallComputerWord+ "   ------> Its a DRAW ";
    userChoice_div.classList.add('gray-glow');
    setTimeout(function (){userChoice_div.classList.remove('gray-glow') },800);
  
}

function game(userChoice)
{
    const computerChoice= getComputerChoice();
    switch (userChoice + computerChoice)
    {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;

        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
        
        lose(userChoice, computerChoice);
        break;

        case "rockrock":
        case "paperpaper":
        case "scissorscissor":

        draw(userChoice, computerChoice);
        break;
    }
}

function main(){
    rock_div.addEventListener('click', function()
    {
    game("rock");
    })

    paper_div.addEventListener('click', function()
    {
    game("paper");
    })

    scissors_div.addEventListener('click', function()
    {
    game("scissor");
    })
}

main();