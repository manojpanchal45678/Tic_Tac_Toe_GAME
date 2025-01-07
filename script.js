//alert('hello jii');
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");
//const startBtn = document.querySelector(".start");

let currPlayer = "X";
let gameGrid;

//startBtn.addEventListener("click", initGame);
const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

 function initGame(){
    if(currPlayer = "X")
    {
        currPlayer = "O";
    }
    else{
        currPlayer = "X";
    }
   // startBtn.classList.add("active");
    gameInfo.classList.remove("newGameInfo");
    newGameBtn.classList.remove("newBtn");
    //gameInfo.classList.add("game-info");
    gameGrid = ["","","","","","","","",""];
boxes.forEach((box, index) => {
   box.innerText = "";
   boxes[index].style.pointerEvents = "all";
   box.classList = `box box${index+1}`;
});
    newGameBtn.classList.remove("active");

    gameInfo.innerText = `Current Player - ${currPlayer}`;
 }
 initGame();
  
function swapTrun()
{
    if(currPlayer == "X")
    {
       currPlayer = "O";
    }
    else{
        currPlayer = "X";
    }
    gameInfo.innerText = `Current Player - ${currPlayer}`;
}


 function checkGameOver()
 {
   let ans = "";
   winningPosition.forEach((position) => {
   if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
    && ((gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]]))) 
{
    
         if(gameGrid[position[0]] === "X")
             ans = "X";
        else
             ans = "O";
        
         
         boxes.forEach((box) => {
            box.style.pointerEvents = "none";
         });  


       boxes[position[0]].classList.add("win");
       boxes[position[1]].classList.add("win");
       boxes[position[2]].classList.add("win");
      // newGameBtn.classList.add("active");
    }
    
});
    if(ans != "")
    {
       gameInfo.innerText = `Winner Player - ${ans}`;
       newGameBtn.innerText = "Play Again";
       newGameBtn.classList.add("active");
       return;
    }
    

    let emptyCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "")
        {
            emptyCount++;
        }
    });

    if(emptyCount === 9)
    {   
        gameInfo.classList.add("newGameInfo");
        gameInfo.innerText = "Game Tied !";
        newGameBtn.innerText = "RESET !";
        newGameBtn.classList.add("newBtn");

    }

 }

 function handleClick(index)
 {
    if(gameGrid[index] == "")
    {
        boxes[index].innerText = currPlayer;
        gameGrid[index] = currPlayer;
        boxes[index].style.pointerEvents= "none";
        swapTrun();
        checkGameOver();
    }
 }

 boxes.forEach((box, index) => {
     box.addEventListener("click" ,() => {
        handleClick(index);
     })
 })

 newGameBtn.addEventListener("click", initGame);
 