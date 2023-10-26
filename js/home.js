// view 3D 按鈕的點擊事件
const enterBtn = document.querySelector('.enterbtn');
console.log(enterBtn);
enterBtn.addEventListener('click', () => {
    window.location.href = "enterroom-separate.html";
    console.log('123');
});

// made by 按鈕的點擊事件
const membersBox = document.querySelector('.membersbox');
const madebyBtn = document.querySelector('.madebybtn');
madebyBtn.addEventListener('click', () => {
    membersBox.classList.add('showup');
});

// close 按鈕的點擊事件
const closeMBtn = document.querySelector('.closeM');
closeMBtn.addEventListener('click', () => {
    membersBox.classList.remove('showup');
});


