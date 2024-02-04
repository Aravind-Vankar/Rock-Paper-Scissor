

let totalscore ={
    ComputerScore:0,
    PlayerScore:0
}



function ComputerChoice(){
    const options = ['Rock','Paper','Scissors'];
    rand = Math.floor(Math.random() * 3);
    return options[rand]
}


function result(PlayerChoice,ComputerChoice){

    let score;

    if(PlayerChoice===ComputerChoice){
        score = 0
    }
    else if(PlayerChoice==='Rock' && ComputerChoice==='Scissors'){
        score = 1
    }
    else if(PlayerChoice==='Paper' && ComputerChoice==='Rock'){
        score = 1
    }
    else if(PlayerChoice==='Scissors' && ComputerChoice==='Paper'){
        score = 1
    }
    else{
        score = -1
    }
    return score
}


function onclickRPS(PlayerChoice){
    const pcChoice = ComputerChoice()
    const score = result(PlayerChoice,pcChoice)
    totalscore['PlayerScore'] += score
    display(score,PlayerChoice,pcChoice)

}

function game(){
    const RPSB = document.querySelectorAll('.RPS')
       RPSB.forEach(RPS => {
       RPS.onclick = () => onclickRPS(RPS.value)
    })
}


function display(score,PlayerChoice,ComputerChoice){
    let finalresult = document.getElementById('result');

    
    switch(score){
        case -1:
            finalresult.innerText = `You lose!!`
            break;

        case 0:
            finalresult.innerText="It's a tie"
            break;

        case 1:
            finalresult.innerText="You won!!"
            break;
    }   
    let PlayerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    PlayerScore.innerText= `${Number(PlayerScore.innerText)+score}`
    hands.innerText = `${PlayerChoice} vs ${ComputerChoice}`
}

const EndGameB = document.getElementById('endGameButton')
    EndGameB.onclick=()=>EndGame(totalscore)
    function EndGame(totalscore){
        totalscore['PlayerScore']=0
        
    let finalresult = document.getElementById('result')
    let PlayerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
            finalresult.innerText='';
            PlayerScore.innerText='';
            hands.innerText="";

    }

game()