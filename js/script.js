var textWrapper = document.querySelector(".header__main2-text");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".header__main2-text .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  })
  .add({
    targets: ".header__main2-text",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Send button animation which is showing "Process done" //

$("#send__button").click(function() {
  Swal.fire(
    "Ma'lumotingiz yuborildi!",
    "24soat ichida sizga qo'ng'iroqni amalga oshiramiz!",
    "success"
  );
});

// Slick slider in the section two //

$(".section__two-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500
});

// Slick slider in the section four which are one main and 3 child //

$(".section__four-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".section__four-slider2"
});
$(".section__four-slider2").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".section__four-slider",
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

// Moving letter in section four for left block //

var textWrapper = document.querySelector(".section__four-text1");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".section__four-text1 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
  })
  .add({
    targets: ".section__four-text1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Special code for WOW.js //

new WOW().init();

// Send button in the section 5 //

$("#send__button1").click(function() {
  Swal.fire(
    "Fikringiz qabul qilindi!",
    "Hurmatli mijoz, qoldirgan fikringizdan juda hursandmiz, sizning fikrizgiz biz uchun juda katta ahamiyatga ega. Tashrifingiz uchun katta rahmat!",
    "success"
  );
});

// Moving letters in the footer //

var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1)
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });