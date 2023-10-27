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
// window.words = document.createElement('p');
const qmWords = document.createElement('p');
const closeBtn = document.querySelector('.close');
qmWords.innerHTML = "透過滑鼠左鍵旋轉鏡頭、右鍵平移鏡頭、滾輪縮放鏡頭，探索809教室場景中的物件。";
qm.appendChild(qmWords);
setTimeout(() => {
    qm.style.display = 'none';
}, 5000);

// 問號出說明
questionIcon.addEventListener('click', () => {
    // console.dir(questionIcon);
    questionIcon.src = 'img/question3.png';
    qmWords.innerHTML = "透過滑鼠左鍵旋轉鏡頭、右鍵平移鏡頭、滾輪縮放鏡頭，探索809教室場景中的物件。";
    qm.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    qm.style.display = 'none';
    qmWords.innerHTML = "";
})

questionIcon.addEventListener('mouseleave', () => {
    questionIcon.src = 'img/question2.png';
});
