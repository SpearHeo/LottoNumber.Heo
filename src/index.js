const numForm = document.querySelector("#numForm");
const greeting1 = document.querySelector("#greeting1");

const HIDDEN_CLASSNAME = "hidden";

function Submit(event) {
  event.preventDefault();

  function lotto(lottoNum) {
    var lottoNum = [];
    for (var i = 0; i <= 5; i++) {
      var n = Math.floor(Math.random() * 45) + 1;

      for (var j in lottoNum) {
        if (n == lottoNum[j]) {
          n = Math.floor(Math.random() * 45) + 1;
        }
      }
      lottoNum.push(n);
    }
    lottoNum.sort(function (a, b) {
      return a - b;
    });
    return lottoNum;
  }

  greeting1.innerText = `예상 당첨 번호\n ${lotto()} `;
  greeting1.classList.remove(HIDDEN_CLASSNAME);
  document.body.style.backgroundImage = `url(ohgu3.jpg)`;
}
numForm.addEventListener("submit", Submit);
