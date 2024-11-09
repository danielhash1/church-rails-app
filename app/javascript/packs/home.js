


document.addEventListener('DOMContentLoaded', function () {
    const img = document.querySelector('.perspective-img');

    img.addEventListener('mousemove', function (e) {
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const xPercent = ((x / width) - 0.5) * 2;
        const yPercent = ((y / height) - 0.5) * 2;

        img.style.transform = `rotateX(${yPercent * -10}deg) rotateY(${xPercent * 10}deg)`;
    });

    img.addEventListener('mouseleave', function () {
        img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});
