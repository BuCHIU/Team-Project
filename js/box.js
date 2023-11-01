const logoBtn = document.querySelector('.logo');
logoBtn.addEventListener('click', () => {
    window.location.href = "index.html";
});

const exitBtn = document.querySelector('.exit');
exitBtn.addEventListener('click', () => {
    window.location.href = "index.html";
});


// 載入頁面後出現說明欄 3 秒
window.questionIcon = document.querySelector('.question');
window.questionArea = document.querySelector('.question-area');
window.qm = document.querySelector('.qm');
const qmWords = document.createElement('div');
window.closeBtn = document.querySelector('.close');
qmWords.classList.add("words");
qmWords.innerHTML = `<img src="./img/how_to_work/mouse_left.png" alt="左鍵" class="mouse">
左鍵<br>
旋轉鏡頭
<img src="./img/how_to_work/mouse_middle.png" alt="滾輪" class="mouse">
滾輪<br>
縮放鏡頭
<img src="./img/how_to_work/mouse_right.png" alt="右鍵" class="mouse">
右鍵<br>
平移鏡頭`;
qm.appendChild(qmWords);
// qm.appendChild(qmIcon);
setTimeout(() => {
    qm.style.display = 'none';
}, 5000);

// 問號出說明
questionIcon.addEventListener('click', () => {
    questionIcon.src = './img/main_icon/question2.png';
    qmWords.classList.add("words");
    qmWords.innerHTML = `<img src="./img/how_to_work/mouse_left.png" alt="左鍵" class="mouse">
    左鍵<br>
    旋轉鏡頭
    <img src="./img/how_to_work/mouse_middle.png" alt="滾輪" class="mouse">
    滾輪<br>
    縮放鏡頭
    <img src="./img/how_to_work/mouse_right.png" alt="右鍵" class="mouse">
    右鍵<br>
    平移鏡頭
    `;
    qm.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    qm.style.display = 'none';
    qmWords.innerHTML = "";
})

questionIcon.addEventListener('mouseleave', () => {
    questionIcon.src = './img/main_icon/question3.png';
});

// 投影幕打字
window.proscreen = document.querySelector('.box');
window.closebtn = document.querySelector('.box-close');
// const screenwords = document.createElement('div');
// screenwords.classList.add("screen-words-2");
// const screencontent = '位於中興大學綜合大樓8樓，為現代化的教學空間，互動白板及高畫質投影設備和音響系統，使教學過程更具效率和互動性。座位可因應不同教學課程調整，促進師生間相互交流與合作討論。';

// const ele = '<span>' + screencontent.split('').join('</span><span>') + '</span>';

// $(ele).hide().appendTo(screenwords).each(function (i) {
//     $(this).delay(100 * i).css({
//         display: 'inline',
//         opacity: 0
//     }).animate({
//         opacity: 1
//     }, 100);
// });

