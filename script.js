console.log("Welcom to My Tic tac toe game");
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"

let IsgameOver = false;
// fuction to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";

}
// fuction to check win 
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== '')) {
            document.querySelector('.info').innerHTML =  boxtext[e[0]].innerHTML + ' Won the match'
            IsgameOver = true;
            music.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width='20vw'
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
  
}
// Game logic 


let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if(IsgameOver==false)
            {
                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
            }
        }
    })
})

Reset.addEventListener('click' , ()=>{
    let texts = document.getElementsByClassName("boxtext")
    Array.from(texts).forEach(ele =>{
        ele.innerHTML="";
    });
    turn ='X';
    IsgameOver=false;
    document.getElementsByClassName('info')[0].innerHTML = "Turn for " + 'X';
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width='0vw'
    music.pause();
})




