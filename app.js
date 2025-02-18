let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let NewGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //Player X and Player O
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
NewGameBtn.addEventListener("click", resetGame);


// boxes.forEach((box) => {
//     box.addEventListener("click", () =>{

//         if(turnO){
//             box.innertext = "O";
//             turnO = false;
//         } else{
//             box.innertext = "X"
//             turnO = true;
//         }
//         box.disabled = true; 
//         count++

//         let isWinner = checkWinner();

//         if(count === 9 && !isWinner){
//             gameDraw();
//         }
//     });
// });


boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      count++;
  
      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
});

const gameDraw = () => {
    msg.innerText =`game was a draw`;
    msgContainer.classList.remove("hide")
    disableBoxes();
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};



const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText; // Yeh correct hai

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner!", pos1Val);
                showWinner(pos1Val);
                return true; // Game khatam hone ke baad aur moves allow mat karein
            }
        }
    }
    return false;
};


const NewGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

NewGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)







