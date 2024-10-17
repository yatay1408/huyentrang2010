// Hiệu ứng trái tim bay
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5) + 5 + 's';
    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);

// Khởi tạo AOS
AOS.init({
    duration: 1000,
});

// Tùy chọn carousel
$('.carousel').carousel({
    interval: 3000,
    pause: "hover"
});
