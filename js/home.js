///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// testコード関数
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log('Test PASSED.');
    } else {
        console.error('Test FAILED. Keep trying!');
        console.group('Result:');
        console.log('  actual:', actual);
        console.log('expected:', expected);
        console.trace();
        console.groupEnd();
    }
}

/**
 * テキスト文の表示関数
 * @param {HTML} title 
 * @param {HTML} p 
 * @param {HTML} lesson
 * @param {str} id -ボタンID
 */
function textIndication(title, p, lesson, id) {
    title.innerHTML = titleContents[id];
    p.innerHTML = textContents[id];
    lesson.innerHTML = '<button class="lesson-btn">練習開始</button>';
    lesson.style.display = "";
}

/**
 * テキスト文の初期化関数
 * @param {HTML} title 
 * @param {HTML} p 
 * @param {HTML} headerSide
 * @param {HTML} lesson
 */
function textReset(title, p, headerSide, lesson) {
    title.innerHTML = "";
    p.innerHTML = "";
    headerSide.innerHTML = "";
    lesson.innerHTML = "";
    lesson.setAttribute("display", "none");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////




const titleContents = {
    "btn-1": "Lesson1 プログラミング概要",
    "btn-2": "Lesson2 変数入門",
    "btn-3": "Lesson3 関数入門",
    "btn-4": "Lesson4 比較入門",
    "btn-5": "Lesson5 条件分岐入門",
    "btn-6": "Lesson6 テスト駆動開発-TDD",
    "btn-7": "Lesson7 デバック入門",
    "btn-8": "Lesson8 配列入門",
    "btn-9": "Lesson9 for of ループ入門",
    "btn-10": "Lesson10 オブジェクト入門",
    "btn-11": "Lesson11 スコープ",
    "btn-12": "Lesson12 for in ループ入門",
    "btn-13": "Lesson13 for while ループ入門",
    "btn-14": "Lesson14 クロージャ入門",
    "btn-15": "Lesson15 メゾット入門",
    "btn-16": "Lesson16 高階関数入門",
    "btn-17": "Lesson17 高階関数とアロー関数",
};

const textContents = {
    "btn-1": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/1-1.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/1-2.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/1-3.png" alt="">
                </div>
            </div>`,
    "btn-2": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/2-1.png" alt="">
                </div>
            </div>`,
    "btn-3": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/3-1.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/3-2.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/3-3.png" alt="">
                </div>
            </div>`,
    "btn-4": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/4-1.png" alt="">
                </div>
            </div>`,
    "btn-5": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/5-1.png" alt="">
                </div>
            </div>`,
    "btn-6": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/6-1.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/6-2.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/6-3.png" alt="">
                </div>
            </div>`,
    "btn-7": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/7-1.png" alt="">
                </div>
            </div>`,
    "btn-8": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/8-1.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/8-2.png" alt="">
                </div>
            </div>`,
    "btn-9": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/9-1.png" alt="">
                </div>
            </div>`,
    "btn-10": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/10-1.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/10-2.png" alt="">
                </div>
            </div>`,
    "btn-11": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/11-1.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/11-2.png" alt="">
                </div>
            </div>`,
    "btn-12": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/12-1.png" alt="">
                </div>
            </div>`,
    "btn-13": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/13-1.png" alt="">
                </div>
            </div>`,
    "btn-14": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/14-1.png" alt="">
                </div>
            </div>`,
    "btn-15": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/15-1.png" alt="">
                </div>
            </div>`,
    "btn-16": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/16-1.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/16-2.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/16-3.png" alt="">
                </div>
            </div>`,
    "btn-17": `<div class="items-box">
                <div class="box col-3">
                    <img src="./image/17-1.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/17-2.png" alt="">
                </div>
                <div class="box col-3">
                    <img src="./image/17-3.png" alt="">
                </div>
            </div>`
};

const lessonContents = {
    "btn-1": `<div class="lesson-box">
                <p class="lesson-p">Google Chrome のコンソールに 1 行ずつ、以下の式を入力してみましょう</p>
                <div class="lesson-p-example">
                    <ul class="example">
                        <li>4 + 10;<br>
                            1 * 3;<br>
                            12 * 4;<br>
                            4 % 2;<br>
                            5 % 2;<br>
                            5 / 1 - 99;<br>
                            5000 * -100 * (1 + 2) * (5 * 6);<br>
                            1241 / 9 + 99;<br>
                            式の終わりはすべてセミコロンで終了していることに注意してください</li>
                    </ul>
                </div>
            </div>
            <div class="lesson-box">
                <p class="lesson-p">+ 演算子を使って、複数の文字列を concatenate （結合）してみましょう。</p>
                <div class="lesson-p-example">
                    <ul class="example">
                        <li>/ このように、苗字と名前を結合することができます<br>
                            "Lady " + "Gaga";</li>
                    </ul>
                </div>
            </div>`,
    "btn-2": '<div class="lesson-box"><p class="lesson-p">( 1 )  name, age, isProgrammer, currentTask という変数を宣言し、テストケースを満たすように値を割り当てましょう。let と const を使ってください。</p><div class="lesson-p-example"><ul class="example"><li>// 例</li><li>const school = "CQA";</li><li>console.log(school); // "DIG college" を表示</li><li>let week = 1;</li><li>console.log(week); // "1" を表示</li><br><li>// ここにあなたのコードを書いてください</li><li>console.log(name); // あなたの名前を表示</li><li>console.log(age); // あなたの年齢を表示</li><li>console.log(isProgrammer); // "true" を表示</li><li>console.log(currentTask); // "1" を表示</li></ul></div></div><div class="lesson-box"><p class="lesson-p">( 2 )  currentTask に 2 を割り当て直してください。</p><div class="lesson-p-example"><ul class="example"><li>console.log(currentTask); // "2" を表示</li></ul></div></div><div class="lesson-box"><p class="lesson-p">( 3 )  基本的な数式を計算しましょう。 数式がわからない時は Google で調べましょう。</p><div class="lesson-p-example"><ul class="example"><li>// 長方形の面積を計算して保存</li><li>const rectangleBaseLength = 3;</li><li>const rectangleHeightLength = 4;</li><li>console.log(rectangleArea); // "12" を表示</li><br><li>// 三角形の面積を計算して保存</li><li>const triangleBaseLength = 4;</li><li>const triangleHeightLength = 5;</li><li>console.log(triangleArea); // "10" を表示</li></ul></div></div>',
    "btn-3": '<div class="lesson-box"><p class="lesson-p">以下の2行をscript.js ファイルに書き加えてみましょう。何が表示されますか？</p><div class="lesson-p-example"><ul class="example"><li>5 + 6;</li><li>console.log(6 + 6);</li></ul></div></div><div class="lesson-box"><p class="lesson-p">( 1 ) 以下のfunction（関数）を使って、２つの number の合計を計算しましょう。script.js ファイルに以下を入力してみてください。</p><div class="lesson-p-example"><ul class="example"><li>function add(numOne, numTwo) </li><li>{ </li><li>  return numOne + numTwo;</li><li>}</li><br><li>// テスト</li><li>console.log(add(4, 3)); // 7 を表示</li><li>console.log(add(100, 42)); // => 142</li></ul></div></div><br><div class="lesson-box"><p class="lesson-p">( 2 ) 上記の関数に 1 つだけ値を渡すと何が起こるでしょうか？　もっとたくさんの値を渡したら何が起こるでしょうか？</p><div class="lesson-p-example"><ul class="example"><li>console.log(add(100)); // 何が起こる？</li><li>console.log(add(1, 4, 5)); // 何が起こる？</li></ul></div></div><br><div class="lesson-box"><p class="lesson-p">( 3 ) 次のコードを全て実行すると何が表示されると思いますか？何が起こるかを予想してみましょう。<br>そして、なぜそうなるのか考えてみましょう。最後に記述された 2 つの console.log の出力結果を見ると、<br>どのファイルのどの行で何が起こっているのか調べることができます。答えがわかったら次の問題に進みましょう。</p><div class="lesson-p-example"><ul class="example"><li>function simpleFunctionA() {<br>return "Hello simple function A";<br>}</li><br><li>function simpleFunctionB() {<br>console.log("Hello simple function B");<br>}</li><br><li>console.log(simpleFunctionA(), "--> From running Simple Function A");<br>console.log(simpleFunctionB(), "--> From running Simple Function B");</li></ul></div></div><br><div class="lesson-box"><p class="lesson-p">( 4 ) subtract という名前の関数を宣言しましょう。この関数は第一引数から第二引数を引き算する関数です。<br> 関数が正しく動いているかどうかテストするのも忘れずに。</p><div class="lesson-p-example"><ul class="example"><li>function subtract(num1, num2) {<br>// ここにコードを書いてください <br>}</li><br><li>function simpleFunctionB() {<br>console.log("Hello simple function B");<br>}</li><br><li>console.log(subtract(4, 3)); // => 1 <br>console.log(subtract(100, 42)); // => 58</li></ul></div></div>',
    "btn-4": '<div class="lesson-box"><p class="lesson-p">( 1 ) 以下のコードの expression（式） がどういう結果を導き出すか、まず頭で考えてみましょう。考えたら、コンソールにこのコードを打って、答えを確かめてください。</p><div class="lesson-p-example"><ul class="example"><li>"true" == true;<br>// 基本的に == は使わず、必ず === を使うようにしましょう。<br>"true" === true;<br>3 >= 3;<br>3 !== 4;</li></ul></div></div><div class="lesson-box"><p class="lesson-p">( 2 ) 以下のコードを script.js にコピーして、それぞれの文が boolean 型の値を表示するよう、??? の部分を適切な比較演算子で埋めましょう。</p><div class="lesson-p-example"><ul class="example"><li>console.log(1100 ??? 99) // => true を表示させる。<br>console.log(1 ??? 21) // => false <br>console.log(62 !== ???) // => true<br>console.log("5" ??? 5) // => false<br>console.log("6" ??? "six") // => true</li></ul></div></div><div class="lesson-box"><p class="lesson-p">( 3 ) script.js に以下のコードをコピーして、「算術演算子」を「１つだけ」変えましょう。そのとき、以下の expression（式） の結果が true になるようにしてください。<br>expression（式） が算術演算子を評価する順番を確認しておきましょう！</p><div class="lesson-p-example"><ul class="example"><li>console.log(2 + 3 * 10 > 50);</li></ul></div></div><div class="lesson-box"><p class="lesson-p">( 4 ) expression（式） が true と評価されるように ??? の部分に、異なる 2 つの引数を渡してみましょう。ヒント：=== は値とデータ型両方の一致を評価し、== は値の一致のみを評価します。</p> <div class="lesson-p-example"><ul class="example"><li>function isEqual(valueOne, valueTwo) {<br>return valueOne == valueTwo;<br>console.log(isEqual(???, ???));<br>}</li></ul></div></div>',
    "btn-5": '<div class="lesson-box"><p class="lesson-p">( 1 ) 次のコードには誤りがあります。正しく動作するように修正してください。</p><div class="lesson-p-example"><ul class="example"><li>function simplePasswordLock(password) {<br>if (password = "password") {<br>return "Correct! Welcome.";<br>}<br>return "Incorrect password, please try again.";<br>} <br><br>テスト: <br>console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."<br>console.log(simplePasswordLock("password")); // => "Correct! Welcome."</li></ul></div></div><br><div class="lesson-box"><p class="lesson-p">( 2 ) .length を覚えていますか？　.length プロパティ を使うと、文字列の長さを手っ取り早く知ることができます。</p><div class="lesson-p-example"><ul class="example"><li>以下のコードは何を表示するでしょうか？　コードを実行して確かめてみましょう！<br>console.log("Hello".length);<br>console.log("The length of this string is 31".length);<br>console.log(" spaces! ".length);</li></ul></div></div><br><div class="lesson-box"><p class="lesson-p">( 3 ) isItTooLong という名前の関数を宣言しましょう。この関数は文字列の引数を 1 つ取ります</p><div class="lesson-p-example"><ul class="example"><li>記で習った .length を使いましょう。引数の文字列の長さが 10 より長かったら true を返し、10 以下であれば false を返すように実装してください。</li></ul></div></div><br><div class="lesson-box"><p class="lesson-p">( 4 ) printDataType という名前の関数を宣言してください。この関数は引数を 1 つ取り、引数のデータ型を返します。JavaScript の演算子 typeof を使って解きましょう。</p><div class="lesson-p-example"><ul class="example"><li>number に対しての処理だけは例としてすでに作ってあります。テストケースを見て、printDataType がどのように動けばよいのか確認しながら解きましょう。<br>function printDataType(data) {<br>if (typeof data === "number") {<br>console.log("This is a number.");<br>}<br>// More code here.<br>}<br><br>テストケース:<br>printDataType(42); // => "This is a number."<br>printDataType("Hello!"); // "This is a string." が表示されるようにする。<br>printDataType(true); // => "This is a boolean."<br>printDataType(undefined); // => "This is not a string, boolean, or number."</li></ul></div></div>',
    "btn-6": '<div class="lesson-box"><p class="lesson-p">関数 getFullName を修正してください。</p><div class="lesson-p-example"><ul class="example"><li>/** <br>* @param {string} firstName - 下の名前<br>* @param {string} lastName - 苗字<br>* @returns {string} 名前と苗字を連結し、間にスペースを入れたもの<br>*/<br>function getFullName(firstName, lastName) {<br>return lastName + firstName;<br>}<br><br>actual = getFullName("Ken", "Watanabe");<br>expected = "Ken Watanabe";<br><br>if (actual === expected) {<br>console.log("Test PASSED!");<br>} else {<br>console.error("Test FAILED. Keep trying!");<br>console.group("Result:");<br>console.log("  actual:", actual);<br>console.log("expected:", expected);<br>console.groupEnd();<br>}</li></ul></div></div>',
    "btn-7": '練習はありません。',
    "btn-8": '<div class="lesson-box"><p class="lesson-p">const instructors = ["Kimiko", "Yan", "Dustin", "Dylan"];<br>( 1 )最後の要素を表示する console.log 文を書いてください。特定のインデックスをハードコーディングしてはいけません。ヒント: .length が役立ちます</p><div class="lesson-p-example"><ul class="example"><li>ハードコーディングとは例えばこういう書き方です。3 という数字を直接指定していますが、これでは index が 3 の要素しか取得できないので、配列の長さが変わってしまうと期待する結果になりません。<br>console.log(instructors[3]);<br>今回はハードコーディングではなく、以下のようなコードを考えてください。</li></ul></div></div><div class="lesson-box"><p class="lesson-p">コンソールには、なんと表示されるでしょう</p><div class="lesson-p-example"><ul class="example"><li>const numbers = [1, 2, 3];<br>console.log(numbers[2]); // ???<br>console.log(numbers[0]); // ???<br>console.log(numbers[numbers.length - 1]); // ???<br>// 次で使用しているメソッドやプロパティ（pop(), shift(), length, push()）は何をしているのか、ドキュメント（MDN）で調べてみましょう！<br>console.log(numbers.pop() + numbers.pop()); // ???<br>numbers.unshift(4, 5, 6);<br>console.log(numbers); // ???<br>console.log(numbers.shift()); // ???<br>console.log(numbers.length); // ???<br>numbers.push(5);<br>numbers.push(6);<br>console.log(numbers.pop() * numbers.pop()); // ???<br>console.log(numbers[0]); // ???</li></ul></div></div>',
    "btn-9": '<div class="lesson-box"><p class="lesson-p">( 1 )関数 sumArray を宣言してください</p><div class="lesson-p-example"><ul class="example"><li>/** <br>* @param {Array<number>} ??? - 数値型の要素を持つ配列<br>* @returns {number} 与えられた配列のすべての数字の合計<br>*/<br>function sumArray() {<br>// ここにコードを書きましょう。<br>}<br>actual = sumArray([1, 2, 3, 4]);<br>expected = 10;</li></ul></div></div><div class="lesson-box"><p class="lesson-p">( 2 )関数 productArray を宣言してください。</p><div class="lesson-p-example"><ul class="example"><li>/** <br>* @param {Array<number>} ??? - 数値型の要素を持つ配列<br>* @returns {number} 与えられた配列のすべての数字をかけあわせた答え<br>*/<br>function productArray() {<br>// ここにコードを書きましょう。<br>}<br>actual = productArray([1, 2, 3, 4]);<br>expected = 24;</li></ul></div></div>',
    "btn-10": '<div class="lesson-box"><p class="lesson-p">( 1 )関数 pluck を宣言してください。</p><div class="lesson-p-example"><ul class="example"><li>/** <br>* @param {Array<object>} ??? - オブジェクトの入った配列<br>* @param {string} キー<br>* @returns {Array<any>} 各オブジェクトの中から、与えられたキーに等しいキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの<br>    */<br>   // ここにコードを書きましょう。<br>   const arrayOfObjects = [<br>{ a: 1, b: 2, c: 3 },<br>{ a: 4, b: 5, c: 6 },<br> { a: 7, b: 8, c: 9 },<br>]; <br>// => [1, 4, 7]</li></ul></div></div>',
    "btn-11": '<div class="lesson-box">  <p class="lesson-p">( 1 )以下のコードを実行すると、コンソールに何が表示されるでしょうか？<br>講義スライドを見返してローカルスコープとグローバルスコープの違いを確認し、なぜこのような挙動になるのかをしっかりと理解しましょう。</p>  <div class="lesson-p-example">      <ul class="example">          <li>let greeting = "Konnichiwa";<br>              <br>              function sayHello(name) {<br>                let greeting = "Hi";<br>                return greeting + " " + name;<br>              }<br>              <br>              console.log(sayHello("Rika"));</li>      </ul>  </div></div><div class="lesson-box">  <p class="lesson-p">( 2 )テストに通るようにコードを修正しましょう。各変数の スコープ がどうなっているかを意識してください。</p>  <div class="lesson-p-example">      <ul class="example">          <li>et sum = 0;<br>              <br>              function sumArray(arrayOfNumbers) {<br>                for (const number of arrayOfNumbers) {<br>                  sum += number;<br>                }<br>              }<br>              <br>              // 関数は何度呼び出しても期待どおりに動作しなければいけません。<br>              test(sumArray([1, 2, 3]), 6);<br>              test(sumArray([10, 20, 30]), 60);<br>              test(sumArray([100, 200, 300]), 600);</li>      </ul>  </div></div>',
    "btn-12": '<div class="lesson-box">  <p class="lesson-p">このオブジェクトを使用します。</p>  <div class="lesson-p-example">      <ul class="example">          <li>const hellos = {<br>              English: "Hello",<br>              Japanese: "Konnichiwa",<br>              German: "Hallo",<br>              Spanish: "Hola",<br>              Arabic: "Ahlan wa sahlan",<br>              Chinese: "Nihao",<br>            };</li>      </ul>  </div></div><div class="lesson-box">  <p class="lesson-p">( 1 )関数 sayHellos を宣言してください。関数を実行するとあらゆる言語で挨拶が返ってくるようにしましょう。</p>  <div class="lesson-p-example">      <ul class="example">          <li>/** <br>              * @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。<br>              */<br>             // ここにコードを書きましょう<br>             <br>             // console.log の表示は、返り値ではないため、テストするのは困難です。<br>             // 今回は、コンソールの表示を確認することで、テストとしてください。<br>             <br>             sayHellos();<br>             // "Hello"<br>             // "Konnichiwa"<br>             // "Hallo"<br>             // "Hola"<br>             // ...<br>            };</li>      </ul>  </div></div><div class="lesson-box">  <p class="lesson-p">( 2 )printAll は、与えられたオブジェクトのすべての値を表示する関数です。<br> しかし、以下のコードではうまくいきません。何が問題なのでしょうか。正しく動くように修正してください。</p>  <div class="lesson-p-example">      <ul class="example">          <li>const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };<br>              function printAll(object) {<br>                for (const key in object) {<br>                  console.log(object.key);<br>                }<br>              }<br>              printAll(myObj);</li>      </ul>  </div></div>',
    "btn-13": '<div class="lesson-box">  <p class="lesson-p">( 1 )for ループを使って、以下のコードを書き換えてください。</p>  <div class="lesson-p-example">      <ul class="example">          <li>let index = 0;<br>              <br>              while (index <= 4) {<br>                console.log("hello!");<br>                index++;<br>              }</li>      </ul>  </div></div><div class="lesson-box">  <p class="lesson-p">( 2 )次のコードの間違いを直してください。</p>  <div class="lesson-p-example">      <ul class="example">          <li>const array = [a b c d e];<br>              for (let i = 0; i < array.length-1; i++) {<br>                console.log("Value:" + i, "Index" + i);<br>              }<br>              <br>直すと下のように表示されるはずです。<br>              // Value: a Index: 0 <br>              // Value: b Index: 1 <br>              // Value: c Index: 2<br>              // Value: d Index: 3<br>              // Value: e Index: 4</li>      </ul>  </div></div>',
    "btn-14": `<div class="lesson-box">
                    <p class="lesson-p">( 1 )次の関数は、どこが間違っているでしょう。</p>
                    <div class="lesson-p-example">
                        <ul class="example">
                            <li>function addOne(1) {<br>
                                return 1;<br>
                                }<br>
                                <br>
                                test(addOne(5), 6);<br>
                                test(addOne(50), 51);</li>
                        </ul>
                    </div>
                </div>
                <div class="lesson-box">
                    <p class="lesson-p">( 2 )次のコードは、A と B どちらのテストが正しいでしょうか<br>テンプレート文字列（テンプレートリテラル）を取り上げていませんが、以下のコードを試して、どのように動作するかを確認してみましょう</p>
                    <div class="lesson-p-example">
                        <ul class="example">
                            <li>function doSomething(value, action) {<br>
                                return action(value);<br>
                                }<br>
                                <br>
                                function greeting(name) {<br>
                                return 'Hello name';<br> //nameはテンプレートリテラル
                                }<br>
                                <br>
                                test(doSomething("Alex", greeting()), "Hello Alex"); // A<br>
                                test(doSomething("Alex", greeting), "Hello Alex"); // B</li>
                        </ul>
                    </div>
                </div>
                <div class="lesson-box">
                    <p class="lesson-p">( 3 )何がコンソールに表示されるでしょうか。なぜ、その値が表示されるのでしょう。</p>
                    <div class="lesson-p-example">
                        <ul class="example">
                            <li>let x = "Outside x";<br>
                                function bar() {<br>
                                    let x = "Inside x";<br>
                                    return "This is bar!";<br>
                                }<br>
                                <br>
                                bar();<br>
                                console.log(x);</li>
                        </ul>
                    </div>
                </div>`,
    "btn-15": `<div class="lesson-box">
                    <p class="lesson-p">このオブジェクトを使います。<br>const myMathObject = {<br>
                        sum: function (/* 仮引数 */) {<br>
                        /* 処理内容 */<br>
                        },<br>
                        product: function () {},<br>
                        isEven: function () {},<br>
                    };<br><br>( 1 )オブジェクト myMathObject のメソッドを作成してみましょう。</p>
                    <div class="lesson-p-example">
                        <ul class="example">
                            <li>sum は全ての引数の合計を返します<br>
                                // これらはテストのサンプルです。下の問題は自分でテストを考えましょう。<br>
                                test(myMathObject.sum(1), 1);<br>
                                test(myMathObject.sum(1, 2, 3), 6);<br>
                                product は全ての引数の 積 を返します。<br>
                                isEven は引数に数値を取り、それが偶数の場合は true を返し、奇数の場合は false を返します。</li>
                        </ul>
                    </div>
                </div>
                <div class="lesson-box">
                    <p class="lesson-p">( 2 )作成したメソッドを使って、次の問題を解きましょう。</p>
                    <div class="lesson-p-example">
                        <ul class="example">
                            <li>・19283, 18475, 199999 の合計値を求めてください。<br>
                                ・19283, 18475, 199999 の積を求めてください。<br>
                                ・19 が偶数か奇数かを求めてください。</li>
                        </ul>
                    </div>
                </div>`,
    "btn-16": `<div class="lesson-box">
                    <p class="lesson-p">( 1 )関数 getGreeting を宣言してください。この関数は .map メソッドに実行されているという点に注目してください。</p>
                    <div class="lesson-p-example">
                        <ul class="example">
                            <li>/**<br>
                                * @param {string} ???<br>
                                * @returns {string} 与えられた引数に挨拶文を追加した文字列<br>
                                */<br>
                            // ここにコードを書きましょう<br>
                            <br>
                            test(["zeno", "yanis", "xander"].map(getGreeting), [<br>
                                "Hello, zeno.",<br>
                                "Hello, yanis.",<br>
                                "Hello, xander.",<br>
                            ]);</li>
                        </ul>
                    </div>
                </div>
                <div class="lesson-box">
                    <p class="lesson-p">( 2 )関数 getIncrementedNumbers を宣言してください。この関数では .map メソッドを 使用してください </p>
                    <div class="lesson-p-example">
                        <ul class="example">
                            <li>/** <br>
                                * @param {Array<number>} ???<br>
                                * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列<br>
                                */<br>
                            // ここにコードを書きましょう<br>
                            <br>
                            test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);<br>
                            test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);<br>
                            <br>
                            const array1 = [0, 0, 0];<br>
                            test(getIncrementedNumbers(array1), [1, 1, 1]);<br>
                            // 元の配列が変更されていないことを確認してください<br>
                            test(array1, [0, 0, 0]);</li>
                        </ul>
                    </div>
                </div>`,
    "btn-17": `<div class="lesson-box">
                <p class="lesson-p">( 1 )関数 isMultipleOfTen を宣言してください。この関数は .filter メソッドに実行されているという点に注目してください。</p>
                <div class="lesson-p-example">
                    <ul class="example">
                        <li>**<br>
                            * @param {number} ???<br>
                            * @returns {boolean} 与えられた数値が 10 の倍数かどうか<br>
                            */<br>
                        // ここにコードを書きましょう<br>
                        <br>
                        const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];<br>
                        <br>
                        test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);<br>
                        test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);</li>
                    </ul>
                </div>
            </div>
            <div class="lesson-box">
                <p class="lesson-p">( 2 )関数 getPositiveNumbers を宣言してください。この関数自体は .filter メソッドを 使用してください 。アロー関数も 使用してください</p>
                <div class="lesson-p-example">
                    <ul class="example">
                        <li>/** <br>
                            * @param {Array<number>} ???<br>
                            * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列<br>
                            */
                        // ここにコードを書きましょう<br>
                        <br>
                        test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);<br>
                        test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);<br>
                        test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);<br>
                        test(getPositiveNumbers([-2, -4]), []);</li>
                    </ul>
                </div>
            </div>`
}

// コンテンツが押された回数
let count = 0;

// idリスト
const idList = [];

// クリックしたらイベント発生
function selectBtn(clicked_id) {
    // IDの取得
    const id = clicked_id;
    idList.push(id);
    //Setオブジェクトの作成
    const setIdList = Array.from(new Set(idList));

    const title = document.querySelector(".h2-title-headline");
    const p = document.querySelector(".title-item");
    const headerSide = document.getElementsByClassName("header-side");
    const lesson = document.getElementsByClassName("lesson")[0];

    if (!(title.innerHTML && p.innerHTML)) {  // テキスト文が空の場合
        textIndication(title, p, lesson, id);
    } else { // テキスト文を初期化
        textReset(title, p, headerSide, lesson);
        textIndication(title, p, lesson, id);
    }

    const lessonItem = document.querySelector(".lesson-item");
    const lessonBtn = document.getElementsByClassName("lesson-btn");
    const footerSide = document.getElementsByClassName("footer-side");


    // 練習開始が押されたらイベント発生
    if (setIdList[setIdList.indexOf(id)] !== setIdList[setIdList.indexOf(id) - 1]) {
        // 値の初期化
        lessonItem.innerHTML = "";
        footerSide[0].innerHTML = "";

        const btn = document.querySelector(".lesson-btn");
        btn.addEventListener("click", () => {
            
            // 押されたらカウント
            count++
    
            // 現在の時刻
            const currentTime = new Date();
            
            // 本文表示
            lessonItem.innerHTML = lessonContents[id];
            
            //　開始が押されたら終了にボタンテキスト変更
            if (count % 2 !== 0) {
                lessonBtn[0].innerText = "練習中です";
                footerSide[0].innerHTML = '<button class="lesson-btn last">練習終了します</button>'
            } else {
                footerSide[0].innerHTML = '<button class="lesson-btn last">練習開始</button>'
            }
    
            //　下のボタンを押したらイベント発生
            const lastTime = document.getElementsByClassName("last")[0];
            lastTime.addEventListener("click", () => {
    
                // 終了時刻
                const stopTime = new Date();
    
                // 時刻の計算 =  終了時刻 - 開始時刻
                const diff = stopTime.getTime() - currentTime.getTime();
                const diffHour = diff / (1000 * 60 * 60);
                const diffMinute = (diffHour - Math.floor(diffHour)) * 60;
                const diffSecond = (diffMinute - Math.floor(diffMinute)) * 60;
                const diffTime =
                    ('00' + Math.floor(diffHour)).slice(-2) + ':'
                    + ('00' + Math.floor(diffMinute)).slice(-2) + ':'
                    + ('00' + Math.round(diffSecond)).slice(-2);
    
                // 終了タイムを表示
                lastTime.innerHTML = `<p class="time">タイム：${diffTime}</p>`
                lessonBtn[0].innerText = "練習開始";
                count++;
    
            });
        });
    }

}
    







