document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        allowTouchMove: false,
        speed: 0, // Устанавливаем скорость на 0 для мгновенной смены
    });

    document.querySelectorAll(".color-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            var index = this.getAttribute("data-color");
            swiper.slideTo(index);
        });
    });

    document
        .getElementById("prev-color")
        .addEventListener("click", function () {
            swiper.slidePrev();
        });

    document
        .getElementById("next-color")
        .addEventListener("click", function () {
            swiper.slideNext();
        });
});
