"use strict";
const content3 = "하단의 버튼을 누르세요⠀"
const text3 = document.querySelector(".text3")
let index3 = 0;

function typing3() {
    if (index3 < content3.length) {
        let txt3 = content3.charAt(index3);
        text3.innerHTML += txt3;
        index3 ++;
        }
}
setTimeout(() => setInterval(typing3, 150),4500);