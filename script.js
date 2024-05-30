let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscpara=document.querySelector("#user-score");
const comscpara=document.querySelector("#computer-score");
const btnref=document.querySelector('#reloadbtn');

btnref.addEventListener("click",()=>{
    location.reload();
});


const showWinner=(winner,uch,comc)=>{
    if(winner){
        userScore++;
        userscpara.innerText=`${userScore}`;
        msg.innerText=`You Win!! your ${uch} beats ${comc}`;
        msg.style.backgroundColor="Green";
        msg.style.color="white";
    }
    else{
        compScore++;
        comscpara.innerText=`${compScore}`;
        msg.innerText=`You Lose!! computer's ${comc} beats your ${uch}`;
        msg.style.backgroundColor="Red";
        msg.style.color="gold";
    }
};

const genComputerChoice = () =>{
    let options=["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const playGame=(userChoice)=>{
    const comc=genComputerChoice();

    if(userChoice==comc){
        msg.innerText=`Game Draw !! both selected ${userChoice}`;
        msg.style.backgroundColor="black";
        msg.style.color="grey";
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin = comc === "paper"? false : true;
        }
        else if(userChoice=="paper"){
            userWin = comc === "scissors"? false : true;
        }
        else{
            userWin = comc === "rock"? false : true;
        }
        showWinner(userWin,userChoice,comc);
    }
    
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const chid=choice.getAttribute("id");
        console.log('choice was clicked');
        console.log(chid);
        playGame(chid);    
    });
});