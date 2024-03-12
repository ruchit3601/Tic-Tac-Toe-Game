let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let h1 = document.createElement("h1");
let turn = true;
isWinner = false;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      turn = true;
      box.innerText = "O";
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  let winnerval = "";
  for (const pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if ( pos1Val != "" && pos1Val != "" && pos3Val != "" && pos1Val === pos2Val &&pos2Val === pos3Val ) {
        isWinner = true;
        winnerval = boxes[pattern[0]].innerText;
        
    }
  }
    if(isWinner){
        h1.innerText = `player ${winnerval} won`;
        h1.classList.add("h1");
        document.querySelector("body").append(h1);
        boxes.forEach(box => {
            box.disabled = true;
        });
    }
};

resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
    h1 = document.querySelector(".h1");
    h1.innerText = "";
    isWinner = false;
});
