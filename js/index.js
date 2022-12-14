// ===============================================================================
// FUNCTION
// ===============================================================================
function dispText() {
    const a_tag = document.querySelector("a");
    const p_tag = document.querySelector(".saylast");
    a_tag.innerText = "やる気が出た！";
    p_tag.innerText = "";
}

/**
 * @returns {innerHTML<string>} - PタグのHTMLテキストを返す
 */
const outPutSay = () => {   
    const randomSayIndex = Math.floor(Math.random() * saying.length);
    const p_tagList = document.querySelectorAll(".p");
    const randomIndex = Math.floor(Math.random() * p_tagList.length)
    const p_tag = p_tagList[randomIndex];

    // pタグのテキストが空ならば
    if (!(p_tag.textContent)) {
        p_tag.innerHTML = saying[randomSayIndex];
    } else {    // 同じPタグが選択された場合
        p_tag.innerHTML = "";
        p_tag.innerHTML = saying[randomSayIndex];
    }

    return p_tag;
};

// ===============================================================================
// CODE
// ===============================================================================
// 表紙
const saying = [
    "どこかからか<br/>面白くなってくるのよ",
    "夢が与えられる時には必ず<br/>実現する力も与えられる",
    "諦めない奴に<br/>誰も勝てっこない",
    "自分に打ち勝つことが、<br/>最も偉大な勝利である",
    "踏まれても叩かれても、<br/>努力さえしつづけていれば、<br/>必ずいつかは実を結ぶ",
    "壁というのは、<br/>できる人にしかやってこない。",
    "壁がある時はチャンスだ。<br/>超えられる可能性がある人にしか<br/>やってこない。",
    "焦らない。<br/>でも、あきらめない",
    "もっとやれば、<br/>もっとできる",
    "できると思えばできる、<br/>できないと思えばできない。<br/>これは、ゆるぎない絶対的な法則である",
    "どんなことでも、何かを達成する場合に<br/>とるべき方法はただひとつ、<br/>一歩ずつ着実に立ち向かうことだ。<br/>これ以外に方法はない",
    "まだ若いのだから何度でもやり直せる",
    "あきらめないことだ。<br/>一度あきらめると習慣になる",
    "途中であきらめてしまったら、<br/>得るものより失うものの方が、<br/>ずっと多くなってしまう",
    "100回叩くと壊れる壁。<br/>でもみんな何回叩けば壊れるかわからないから、<br/>99回まで来ていても途中であきらめてしまう",
    "結果が出ないとき、どういう自分でいられるか。<br/>決してあきらめない姿勢が、何かを生み出すきっかけをつくる",
    "人生に必要なもの。<br/>それは勇気と想像力、<br/>そして少しのお金だ。",
    "努力する人は希望を語り、<br/>怠ける人は不満を語る",
    "お前の道を進め、<br/>人には勝手なことを言わせておけ",
    "二人の囚人が鉄格子から外を眺めた。<br/> 一人は泥を見た。一人は星を見た",
    "有能な者は行動するが、<br/>無能な者は講釈ばかりする",
    "夢は逃げない。<br/>逃げるのはいつも自分だ",
    "夢はでっかく 根はふかく",
    "あきらめたらそこで試合終了だよ",
    "意志あるところに道は開ける",
    "将来を思い煩うな。<br/> 現在為すべきことを為せ。<br/>その他は神の考えることだ",
    "今を変えなければ、<br/>未来は変わらない",
    "一番いけないのは<br/>自分なんかダメだと思い込むこと",
    "努力すれば報われる？<br/>そうじゃないだろ。<br/>報われるまで努力するんだ"
];

let time = 0 ;
for (let i = 1; i < 100; i++) {
    setTimeout(outPutSay, time);
    i++;
    time += 2000;    
}

setTimeout(dispText, 7000);

