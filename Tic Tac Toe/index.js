let board = [];
for (let i = 0; i < 9; i++) {
    board[i]=-1;
}

const win = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 

    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 

    [0, 4, 8],
    [2, 4, 6] 
];
let cnt=0;
function fillOnClick(event){
    let btn= event.target;
 let id = Number(btn.getAttribute("id"));

 if(board[id]==-1){
   board[id]=cnt;

   if(cnt==1)
   {
     btn.style.backgroundImage = 'url("images/stars.png")';
     btn.style.backgroundSize = "70%"; 
     btn.style.backgroundPosition = "center";
     btn.style.backgroundRepeat = "no-repeat";
     btn.style.backgroundColor = "blue";
   }
   else if(cnt==0){
    btn.style.backgroundImage = 'url("images/zeroes.png")';
    btn.style.backgroundSize = "70%"; 
     btn.style.backgroundPosition = "center";
     btn.style.backgroundRepeat = "no-repeat";
    btn.style.backgroundColor = "red";
   }

   for(let w of win){
     let [a,b,c]=w;
     if(board[a]!=-1 && board[a]==board[b] && board[b]==board[c]){
         if(board[a]==0)  alert(" 0 WINS");
         else alert("X WINS");
        }
   }

   let left=false;
   for(let i of board){
    if(i==-1) left=true;
   }
   
   if(!left) alert("DRAW");

   cnt=1-cnt;
 }
 else
 {
    alert('Wrong Move');
 }
}


let btns=document.querySelectorAll(".box");
    btns.forEach(function(btn){
    btn.addEventListener("click",fillOnClick);
   });
    