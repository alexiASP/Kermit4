"use strict"

const VIDEO = document.querySelector(".video-player");
const VIDEO_HOLDER = document.querySelector(".video-holder");
const VIDEO_BUTTON = document.getElementById('button-play-stop');
const SHOW_ALL_BUTTON = document.getElementById('btn_show-all');


function togglePlayPause() {
    if(VIDEO.paused) {
        VIDEO_BUTTON.classList.remove('fa-play');
        VIDEO_BUTTON.classList.add('fa-pause');
        VIDEO.play();
    } else {
        VIDEO_BUTTON.classList.remove('fa-pause');
        VIDEO_BUTTON.classList.add('fa-play');
        VIDEO.pause();
    }
}

VIDEO_HOLDER.onclick = function() {
    VIDEO_BUTTON.classList.add('_btn-animatable');
    setTimeout(function (){VIDEO_BUTTON.classList.remove('_btn-animatable')}, 150);
    togglePlayPause();
}

SHOW_ALL_BUTTON.onmouseenter = function() {
    document.getElementById('advantages').classList.add('_show-images');
}

document.getElementById('advantages').onclick = function() {
    document.getElementById('advantages').classList.remove('_show-images');
}

document.getElementById('advantages').onmouseleave = function () {
    document.getElementById('advantages').classList.remove('_show-images');
}

function ddwnLinksShow(index) {
    const DDWN_MENU_CHEVRON = document.getElementById(`ddwn_chevron${index}`);
    const DDWN_MENU_HOLDER = document.getElementById(`ddwn-links_holder${index}`);

    if (DDWN_MENU_CHEVRON.classList.contains('fa-chevron-down')) {
        DDWN_MENU_CHEVRON.closed = false;
        DDWN_MENU_CHEVRON.classList.remove('fa-chevron-down');
        DDWN_MENU_CHEVRON.classList.add('fa-chevron-up');
    } else {
        DDWN_MENU_CHEVRON.closed = true;
        DDWN_MENU_CHEVRON.classList.remove('fa-chevron-up');
        DDWN_MENU_CHEVRON.classList.add('fa-chevron-down');
    }

    if (DDWN_MENU_CHEVRON.closed) {
        DDWN_MENU_HOLDER.classList.remove('_ddwn-links_active');
    } else {
        DDWN_MENU_HOLDER.classList.add('_ddwn-links_active');
    }

    console.log(`list closed: ${DDWN_MENU_CHEVRON.closed}`);
}

function checkDdwnLinksClosed(index) {
    const DDWN_MENU_CHEVRON = document.getElementById(`ddwn_chevron${index}`);
    DDWN_MENU_CHEVRON.classList.contains('fa-chevron-down')
        ? DDWN_MENU_CHEVRON.closed = false
        : DDWN_MENU_CHEVRON.closed = true; return true;
}

function ddwnLinksShow() {

}

document.getElementById("ddwn_chevron1").onmouseenter = function (elemIndex = 1) {
    checkDdwnLinksClosed(elemIndex);
    ddwnLinksShow(elemIndex);
}

document.getElementById("ddwn_chevron2").onmouseenter = function (elemIndex = 2) {
    checkDdwnLinksClosed(elemIndex);
    ddwnLinksShow(elemIndex);
}

document.getElementById("ddwn_chevron3").onmouseenter = function (elemIndex = 3) {
    checkDdwnLinksClosed(elemIndex);
    ddwnLinksShow(elemIndex);
}

document.getElementById("ddwn_chevron4").onmouseleave = function (elemIndex = 4) {
    checkDdwnLinksClosed(elemIndex);
    ddwnLinksShow(elemIndex);
}