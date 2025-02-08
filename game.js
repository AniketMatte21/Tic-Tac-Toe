let allBoxes=document.querySelectorAll(".box");
let winner=document.querySelector(".winner");
let starter=document.querySelector(".selector");
let msgContainerHide=document.querySelector(".msgContainer");
let new_gameBtn=document.querySelector(".new-game");
let resetBtn=document.querySelector(".reset-button");



console.log(winner);


let turnO=true;

let winningPosition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
console.log(winningPosition);

let boxClick=()=>{
allBoxes.forEach((box)=>{

   
    box.addEventListener("click",()=>{
       if(turnO)
       {
        box.innerText="o";
        turnO=false;
       }
       else
       {
        box.innerText="x";
        turnO=true;
       }
       box.disabled=true;
        console.log("box was clicked");
        winPattern();
    
    })

   
    
})
}
boxClick();

let disabledBoxes=()=>
{
    for(let box of allBoxes)
    {
        box.disabled=true;
    }
}

let winPattern=()=>{
    winningPosition.forEach((pattern)=>{
       
    //    console.log(pattern[0],pattern[1],pattern[2]);
    //    console.log(allBoxes[pattern[0]],allBoxes[pattern[1]],allBoxes[pattern[2]]);

    
       let pos1Val=allBoxes[pattern[0]].innerText;
       let pos2Val=allBoxes[pattern[1]].innerText;
       let pos3Val=allBoxes[pattern[2]].innerText;

       if(pos1Val!=="" && pos2Val!="" && pos3Val!="")
       {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
            {
                console.log("winner");
                winner.innerText="Winner is- "+pos1Val;
                disabledBoxes();
                msgContainerHide.classList.remove("hide");

            }
       }
       
      
    })
}


let resetGame=()=>{
    resetBtn.addEventListener("click",()=>{
        turnO=true;
        for(let box of allBoxes)
        {
            box.disabled=false;
            box.innerText="";
        }
        msgContainerHide.classList.add("hide");

        
    })
}

new_gameBtn.addEventListener("click",()=>{
    console.log("new game button click");
    turnO=true;
    for(let box of allBoxes)
    {
        box.disabled=false;
        box.innerText="";
    }
    msgContainerHide.classList.add("hide");
    
})
resetBtn.addEventListener("click",resetGame);



