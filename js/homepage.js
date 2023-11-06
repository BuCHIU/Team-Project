let Btn1 = document.querySelector('.playBtn img');

Btn1.addEventListener("mouseover", function () {
    Btn1.src = './img/btn/btn-2_0.png';
    // console.log(Btn1.src,'123');
});

Btn1.addEventListener("mouseout", function () {
    Btn1.src = './img/btn/btn-1_0.png';
    // console.log(Btn1.src,'456');
});

Btn1.addEventListener('click', () => {
    window.location.href = "enterroom.html";
});