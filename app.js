let boxes=document.querySelectorAll(".box");
let end=document.querySelector("#end");
let msg=document.querySelector(".msg");
let mssgEmoji=document.querySelector("#mssg-emoji");
let mssg=document.querySelector("#msg")
let msgEmoji=document.querySelector("#msg-emoji");
let reset=document.querySelector("#reset");

let turn0=true;

let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0===true){
        box.innerText="O";
        box.style.color="rgb(128, 123, 123)";
        turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="rgb(95, 95, 87)";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const resetGame=()=>{
    turn0=true;
    enableBoxes();
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msg.classList.add("hide");
    };
};
let boxDisabled=()=>{
    for(box of boxes){
        box.disabled=true;
    };
};
let showWinner=(winner)=>{
    msg.innerHTML=`<p id="mssg-emoji">🎉🎊</p>
        <p id="msg">
            Congratulation, the winner is ${winner}
        </p>
        <p id="msg-emoji">🥇</p>`
    msg.classList.remove("hide");
    boxDisabled();
};

const checkWinner=()=>{
    for(let pattern of win){
        let pat1val=boxes[pattern[0]].innerText;
        let pat2val=boxes[pattern[1]].innerText;
        let pat3val=boxes[pattern[2]].innerText;
        if(pat1val!="" &&pat2val!="" &&pat3val!="" ){
            if(pat1val===pat2val&&pat2val===pat3val){
                console.log("Winner is ",pat1val);
                showWinner(pat1val);
            };
        };
    };
};
reset.addEventListener("click",resetGame);
end.addEventListener("click",resetGame);