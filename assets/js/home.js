$('.profile-button').click(function () {
    $('.right-bar').toggleClass("active");
    $(".left-bar").removeClass("active");
});

$('.hamburger-section').click(function () {
    $('.left-bar').addClass("active");
    $('.right-bar').removeClass("active");
});

$('.arrow-right').click(function () {
    $('.left-bar').removeClass("active");
});

$(document).ready(function () {
    $('.status-section').slick({
        slidesToShow: 5,
        autoplay: true,
        dots: false,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4.5,
                    infinite: true,
                    autoplay: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    autoplay: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    autoplay: true,
                }
            },
        ]
    });
});

const modal = document.querySelector(".modal"); // for modal pop-up
const overlay = document.querySelector(".overlay"); // for modal background of window
const btnCloseModal = document.querySelector(".close-modal");   // for modal close button
const btnsOpenModal_one = document.querySelectorAll(".option-2");
const btnsOpenModal_two = document.querySelectorAll(".option-3");
const btnsOpenModal_three = document.querySelectorAll(".option-4");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal_one.length; i++) {
    btnsOpenModal_one[i].addEventListener("click", openModal);
}

for (let i = 0; i < btnsOpenModal_two.length; i++) {
    btnsOpenModal_two[i].addEventListener("click", openModal);
}

for (let i = 0; i < btnsOpenModal_three.length; i++) {
    btnsOpenModal_three[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    e.key;

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
})