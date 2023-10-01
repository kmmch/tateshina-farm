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
// ローディング画面
// --------------------------------------------
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

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
$(function(){
    $("#hamburgerMenuList a").click(function () {
        $("#hamburgerBtn").removeClass(ACTIVE_CLASS);
        $("#hamburgerMenu").removeClass(ACTIVE_CLASS);
        $("#hamburgerCover").removeClass(ACTIVE_CLASS);
        $("body").removeClass(NO_SCROLL_CLASS);
    });
});


// --------------------------------------------
// スライダー
// --------------------------------------------
const swiper = new Swiper('.swiper', {
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
            slidesPerView: 5.5,// PCでは3枚を中央に、.5で見切れ具合を調整
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
                    $('.end-message').slideDown();
                    $('.submit-btn').fadeOut();
                    $('#contactForm').fadeOut();
                },
                200: function () {
                    $('.false-message').slideDown();
                }
            }
        });
        event.preventDefault();
    });
});