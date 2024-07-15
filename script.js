//Swiper переключатель цветов
document.addEventListener("DOMContentLoaded", function () {
    var carCards = document.querySelectorAll(".models__car-card");

    carCards.forEach(function (card) {
        var swiperContainer = card.querySelector(".swiper-container");
        var swiper = new Swiper(swiperContainer, {
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            allowTouchMove: false,
            speed: 0, // Устанавливаем скорость на 0 для мгновенной смены
        });
        let textColor = card.querySelector("#chosenColor");
        var colorButtons = card.querySelectorAll(".models__color-btn");
        var prevButton = card.querySelector("#prev-color");
        var nextButton = card.querySelector("#next-color");

        colorButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                var index = this.getAttribute("data-color");
                swiper.slideTo(index);
                setActiveButton(button);
            });
        });

        prevButton.addEventListener("click", function () {
            swiper.slidePrev();
            var currentIndex = swiper.realIndex;
            if (colorButtons[currentIndex]) {
                setActiveButton(colorButtons[currentIndex]);
            }
        });

        nextButton.addEventListener("click", function () {
            swiper.slideNext();
            var currentIndex = swiper.realIndex;
            if (colorButtons[currentIndex]) {
                setActiveButton(colorButtons[currentIndex]);
            }
        });

        function setActiveButton(activeButton) {
            if (!activeButton) return;
            colorButtons.forEach(function (button) {
                button.classList.remove("active");
            });
            activeButton.classList.add("active");
            if (activeButton.dataset.color == 0) {
                textColor.textContent = "Белый глянец";
            } else if (activeButton.dataset.color == 1) {
                textColor.textContent = "Глубокий серый";
            } else {
                textColor.textContent = "Яркий красный";
            }
        }

        // Устанавливаем первый цвет активным при загрузке
        setActiveButton(colorButtons[0]);
    });
});

// собственный слайдер для car-details
document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelectorAll(".custom-slider")
        .forEach(function (sliderContainer) {
            const sliderWrapper = sliderContainer.querySelector(
                ".custom-slider-wrapper"
            );
            const slides = sliderContainer.querySelectorAll(
                ".custom-slider-slide"
            );
            const prevButton = sliderContainer.querySelector(".custom-prev");
            const nextButton = sliderContainer.querySelector(".custom-next");
            let currentIndex = 0;

            function showSlide(index) {
                const slideWidth = slides[0].clientWidth;
                sliderWrapper.style.transform = `translateX(-${
                    index * slideWidth
                }px)`;
            }

            if (prevButton) {
                prevButton.addEventListener("click", function () {
                    currentIndex =
                        currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
                    showSlide(currentIndex);
                });
            }

            if (nextButton) {
                nextButton.addEventListener("click", function () {
                    currentIndex =
                        currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
                    showSlide(currentIndex);
                });
            }
        });
});

//раздел конфигурации - кнопка показать еще

document
    .querySelector(".configurations__cars-show")
    .addEventListener("click", () => {
        let configCarCards = document.querySelectorAll(
            ".configurations__cars-card.disable"
        );
        configCarCards.forEach((card) => {
            card.classList.remove("disable");
        });
    });
