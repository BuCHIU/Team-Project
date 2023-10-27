const logoBtn = document.querySelector('.logo');
logoBtn.addEventListener('click', () => {
    window.location.href = "home.html";
});

const exitBtn = document.querySelector('.exit');
exitBtn.addEventListener('click', () => {
    window.location.href = "home.html";
});


// 載入頁面後出現說明欄 3 秒
window.questionArea = document.querySelector('.question-area');
window.words = document.createElement('p');
words.innerHTML = "說明說明說明說明說明。";
questionArea.appendChild(words);
setTimeout(() => {
    questionArea.style.display = 'none';
}, 3000);

window.questionIcon = document.querySelector('.question');
