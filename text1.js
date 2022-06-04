"use strict";
const content = "로또 번호 생성기 ver.4.5"
const text = document.querySelector(".text1")
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(30000);
    }
}
setInterval(typing, 200);