let boxes = document.querySelectorAll(".box");
let rstButton = document.querySelector("#reset_button");

let turn = true;

let matching_patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach ((box)=> {
    box.addEventListener("click" , ()=> {
        if (turn) {
            box.innerText = "X"
            turn =false
        }
        else {
            box.innerText = "Y"
            turn =true  
        }
        box.disabled = true
        box.classList.add = "active"
        checkWinner()
    })
})


const checkWinner = () => {
    for (pattern of matching_patterns) {
        console.log(pattern[0],pattern[1],pattern[2])
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
    }
}