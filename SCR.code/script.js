console.log("Welcome to tic tac toe")
let bgm = new Audio("/Users/mahesh/Downloads/stranger-things-124008.mp3")
let audioTurn = new Audio("Users/mahesh/Downloads/turn.mp3")
let gamever = new Audio("Users/mahesh/Downloads/success-fanfare-trumpets-6185.mp3")
let turn = "x"
let endgame = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "x"?"0": "x";
}

//Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText) === (boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won" 
            endgame = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })

}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!endgame){
            document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
         }

        }
    })
})
//Add onclick listener to reset button
reset.addEventListener('click', ()=>{
let boxtexts = document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element => { 
    element.innerText = ""
});
 turn = 'x'
 endgame = false
 document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
 document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
