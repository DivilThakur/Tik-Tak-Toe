let conatiner = document.querySelectorAll(".button");
let turn = document.getElementById("Turn");
let winalert = document.querySelector("#win");
let TurnX = true;
let sound1 = new Audio("change.mp3");
let sound2 =  new Audio("won.mp3")
let newgame = document.querySelector("#newgame");


const WinIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]



conatiner.forEach((box) => {
    box.addEventListener("click", () => {
        if (TurnX) {
            box.innerText = "X";
            sound1.play();
            turn.innerText = "Turn For : O";
            TurnX = false;

        }
        else {
            box.innerText = "O";
            sound1.play();
            turn.innerText = "Turn For : X";
            TurnX = true;
        }
        box.disabled = true;
        checkwin();

    })

})



checkwin = () => {
    for (pattern of WinIndex) {
        let pos1 = conatiner[pattern[0]].innerText;
        let pos2 = conatiner[pattern[1]].innerText;
        let pos3 = conatiner[pattern[2]].innerText;

        let box1 = conatiner[pattern[0]];
        let box2 = conatiner[pattern[1]];
        let box3 = conatiner[pattern[2]];


        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                sound2.play();
                box1.style.background = "#cf6e51";
                box2.style.background = "#cf6e51";
                box3.style.background = "#cf6e51";
                winmsg(pos1);
                disableinput();

            }
        }

    }
}




winmsg = (pos) => {
    let a = `Congratulations Winner Is : ${pos}`;
    winalert.innerText = a;
    winalert.hidden = false;
    winalert.classList.add("transition");
    turn.hidden = true;
}



disableinput = () => {
    for (box of conatiner) {
        box.disabled = true;
    }
}




newgame.addEventListener("click", () => {
    for (box of conatiner) {
        box.innerText = "";
        turn.innerText = "Turn For : X"
        TurnX = true;
        winalert.hidden = true;
        box.disabled = false;
        turn.hidden = false;
        box.style.background="#F98866"
    }
    
})

