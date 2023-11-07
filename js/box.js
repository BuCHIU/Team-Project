// 宣告
window.questionIcon = document.querySelector('.question');
window.qm = document.querySelector('.qm');
window.closeBtn = document.querySelector('.close');
const qmWords = document.querySelector('.words');

// 以裝置寬度判斷要放什麼說明
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

// 初次載入頁面 出現說明欄 5 秒後消失
setTimeout(() => {
    qm.style.display = 'none';
}, 5000);

// 問號出說明
questionIcon.addEventListener('click', () => {
    questionIcon.src = './img/main_icon/question2.png';
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

// 叉叉關閉說明欄
closeBtn.addEventListener('click', () => {
    qm.style.display = 'none';
    qmWords.innerHTML = "";
});

// 點框框外就會關閉
document.addEventListener('click',function(){
    qm.style.display = 'none';
},true);

// 問號的hover變圖
questionIcon.addEventListener('mouseleave', () => {
    questionIcon.src = './img/main_icon/question2.png';
});
questionIcon.addEventListener('mouseenter', () => {
    questionIcon.src = './img/main_icon/question3.png';
});