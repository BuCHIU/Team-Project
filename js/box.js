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
qmWords.innerHTML = `<img src="img/mouse_left.png" alt="左鍵" class="mouse">
左鍵<br>
旋轉鏡頭
<img src="img/mouse_middle.png" alt="滾輪" class="mouse">
滾輪<br>
縮放鏡頭
<img src="img/mouse_right.png" alt="右鍵" class="mouse">
右鍵<br>
平移鏡頭`;
qm.appendChild(qmWords);
// qm.appendChild(qmIcon);
setTimeout(() => {
    qm.style.display = 'none';
}, 5000);

// 問號出說明
questionIcon.addEventListener('click', () => {
    qmWords.classList.add("words");
    qmWords.innerHTML = `<img src="img/mouse_left.png" alt="左鍵" class="mouse">
    左鍵<br>
    旋轉鏡頭
    <img src="img/mouse_middle.png" alt="滾輪" class="mouse">
    滾輪<br>
    縮放鏡頭
    <img src="img/mouse_right.png" alt="右鍵" class="mouse">
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
    questionIcon.src = 'img/question2.png';
});



