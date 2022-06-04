"use strict";
const content2 = "부자가 되고 싶으십니까?⠀"
const text2 = document.querySelector(".text2")
let index2 = 0;

function typing2() {
    if (index2 < content2.length) {
        let txt2 = content2.charAt(index2);
        text2.innerHTML += txt2;
        index2 ++;
        }
}
setTimeout(() => setInterval(typing2, 150),2400);
