// --------------------------------------------
// 固定値
// --------------------------------------------
const CLICK = 'click';
const HAMBURGER_BTN_ID = 'hamburgerBtn';
const HAMBURGER_MENU_ID = 'hamburgerMenu';
const HAMBURGER_MENU_LINK_IDS = [
    'About',
    'Product',
    'News',
    'Faq',
    'Access',
    'Contact'
];
const HAMBURGER_COVER_ID = 'hamburgerCover';

const ACTIVE_CLASS = 'active';
const NO_SCROLL_CLASS = 'noScroll'


// --------------------------------------------
// ハンバーガーボタンをクリックした時の処理
// --------------------------------------------
var hamburgerMenu = document.getElementById(HAMBURGER_MENU_ID);
var hamburgerCover = document.getElementById(HAMBURGER_COVER_ID);
var body = document.body;
function hamburgerBtnClick(){
    this.classList.toggle(ACTIVE_CLASS);
    hamburgerMenu.classList.toggle(ACTIVE_CLASS);
    hamburgerCover.classList.toggle(ACTIVE_CLASS);
    body.classList.toggle(NO_SCROLL_CLASS);
}

var hamburgerButton = document.getElementById(HAMBURGER_BTN_ID);
hamburgerButton.addEventListener(CLICK, hamburgerBtnClick);



// --------------------------------------------
// ハンバーガーメニューのリンクをクリックした時の処理
// --------------------------------------------
function hamburgerMenuLinkClick() {
    hamburgerButton.classList.remove(ACTIVE_CLASS);
    hamburgerMenu.classList.remove(ACTIVE_CLASS);
    // hamburgerCover.classList.toggle(ACTIVE_CLASS);
    body.classList.remove(NO_SCROLL_CLASS);
}
HAMBURGER_MENU_LINK_IDS.forEach((id) => {
    var hamburgerMenuLink = document.getElementById(id);
    hamburgerMenuLink.addEventListener(CLICK, hamburgerMenuLinkClick);
});



// --------------------------------------------
// スライダー
// --------------------------------------------
const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    centeredSlides : true,
    slidesPerView: 1.5, // スマホでは1枚を中央に、.5で見切れ具合を調整
    spaceBetween:10,
    breakpoints: {
        768: {
            slidesPerView: 3.5,// PCでは3枚を中央に、.5で見切れ具合を調整
            spaceBetween:20,
        }
    },
    loopAdditionalSlides: 1,
});



// --------------------------------------------
// お問い合わせ送信ボタン押下時の自画面遷移
// --------------------------------------------
$(document).ready(function () {
        $('#contactForm').submit(function (event) {
        var formData = $('#contactForm').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/hogehoge",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".end-message").slideDown();
                    $(".submit-btn").fadeOut();
                },
                200: function () {
                    $(".false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });
});