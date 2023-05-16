const question = "次のコマンドで、目的地にテレポートするために使われるコマンドは？"
const answers = [
    "/tp",
    "/fill",
    "/locate",
    "/gamemode"
]
/* 配列をソートする */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
shuffle(answers)

const correct = "/tp"

// 質問文を出力
document.getElementById("js-question").textContent = question;

// document.getElementsByTagNameは、配列みたいな型をかえすが、配列ではないので、array.fromで配列に変換
// 正確にはシャローコピーなので、buttonsの要素への変更がそのままdocument___の変更になる。''
let buttons = Array.from(document.getElementsByTagName("button"))



let index = 0;
buttons.forEach(bt => {
    bt.textContent = answers[index];
    // eはeventのe addEventListenerの第一引数はイベントの種類、第二引数はイベントを取得したときの処理
    //↓の場合は、第二引数に使う関数に、関数名をつける必要がないので、そういう書き方をしている・
    // 引数としてe = イベントオブジェクトが与えられているので、function(e){}と書いているのと同じこと。
    //"click"イベントの.target(クリック対象) つまりクリックされたボタン要素のこと

    bt.addEventListener("click", (e) =>{
        if (e.target.textContent === correct) {
            window.alert("正解");
        }else{
            
            window.alert("不正解");
        }
    })
    index++;
});

