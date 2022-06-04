"use strict";
const content = "로또 번호 생성기 ver.5"
const text = document.querySelector(".text1")
let index = 0;

function typing() {
    if (index < content.length) {
        let txt = content.charAt(index);
        text.innerHTML += txt;
        index++;
        }
}
    setInterval(typing, 150);
