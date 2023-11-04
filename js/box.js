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
if ( window.innerWidth >= 700 ) {
        
    qmWords.innerHTML = `
<div class="words-m words-mm">
    滑鼠操作
</div>
<div class="words-m">
    <img src="./img/how_to_work/mouse_left.png" alt="左鍵" class="mouse">
    <div class="words-s">
        <div class="words-ss">
            左鍵 
        </div>
        <div class="words-ss"> 
            旋轉鏡頭
        </div>
    </div>
</div>
<div class="words-m">
    <img src="./img/how_to_work/mouse_middle.png" alt="滾輪" class="mouse">
    <div class="words-s">
        <div class="words-ss">
            滾輪
        </div>
        <div class="words-ss"> 
            縮放鏡頭
        </div>
    </div>
</div>
<div class="words-m">
    <img src="./img/how_to_work/mouse_right.png" alt="右鍵" class="mouse">
    <div class="words-s">
        <div class="words-ss">
            右鍵
        </div>
        <div class="words-ss"> 
            平移鏡頭
        </div>
    </div>
</div>
<div class="words-m words-mm">
    觸控操作
</div>
<div class="words-m">
    <img src="./img/how_to_work/drag.png" alt="拖曳" class="hand">
    <div class="words-s">
        <div class="words-ss">
            拖曳
        </div>
    </div>
</div>
<div class="words-m">
    <img src="./img/how_to_work/scaling.png" alt="縮放" class="hand">
    <div class="words-s">
        <div class="words-ss">
            縮放
        </div>
    </div>
</div>`;
} else {
    qmWords.innerHTML = `
<div class="words-m words-mm">
    觸控操作
</div>
<div class="words-m">
    <img src="./img/how_to_work/drag.png" alt="拖曳" class="hand">
    <div class="words-s">
        <div class="words-ss">
            轉動視角
        </div>
    </div>
</div>
<div class="words-m">
    <img src="./img/how_to_work/scaling.png" alt="縮放" class="hand">
    <div class="words-s">
        <div class="words-ss">
            縮放
        </div>
    </div>
</div>`;
}
qm.appendChild(qmWords);
// console.log(window);
setTimeout(() => {
    qm.style.display = 'none';
}, 8000);


// 問號出說明
questionIcon.addEventListener('click', () => {
    questionIcon.src = './img/main_icon/question2.png';
    qmWords.classList.add("words");
    if ( window.innerWidth >= 700 ) {
        
        qmWords.innerHTML = `
    <div class="words-m words-mm">
        滑鼠操作
    </div>
    <div class="words-m">
        <img src="./img/how_to_work/mouse_left.png" alt="左鍵" class="mouse">
        <div class="words-s">
            <div class="words-ss">
                左鍵 
            </div>
            <div class="words-ss"> 
                旋轉鏡頭
            </div>
        </div>
    </div>
    <div class="words-m">
        <img src="./img/how_to_work/mouse_middle.png" alt="滾輪" class="mouse">
        <div class="words-s">
            <div class="words-ss">
                滾輪
            </div>
            <div class="words-ss"> 
                縮放鏡頭
            </div>
        </div>
    </div>
    <div class="words-m">
        <img src="./img/how_to_work/mouse_right.png" alt="右鍵" class="mouse">
        <div class="words-s">
            <div class="words-ss">
                右鍵
            </div>
            <div class="words-ss"> 
                平移鏡頭
            </div>
        </div>
    </div>
    <div class="words-m words-mm">
        觸控操作
    </div>
    <div class="words-m">
        <img src="./img/how_to_work/drag.png" alt="拖曳" class="hand">
        <div class="words-s">
            <div class="words-ss">
                轉動視角
            </div>
        </div>
    </div>
    <div class="words-m">
        <img src="./img/how_to_work/scaling.png" alt="縮放" class="hand">
        <div class="words-s">
            <div class="words-ss">
                縮放
            </div>
        </div>
    </div>`;
    } else {
        qmWords.innerHTML = `
    <div class="words-m words-mm">
        觸控操作
    </div>
    <div class="words-m">
        <img src="./img/how_to_work/drag.png" alt="拖曳" class="hand">
        <div class="words-s">
            <div class="words-ss">
                拖曳
            </div>
        </div>
    </div>
    <div class="words-m">
        <img src="./img/how_to_work/scaling.png" alt="縮放" class="hand">
        <div class="words-s">
            <div class="words-ss">
                縮放
            </div>
        </div>
    </div>`;
    }
    qm.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    qm.style.display = 'none';
    qmWords.innerHTML = "";
})

questionIcon.addEventListener('mouseleave', () => {
    questionIcon.src = './img/main_icon/question3.png';
});


window.proscreen = document.querySelector('.box');
window.closebtn = document.querySelector('.box-close');