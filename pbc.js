function goToNextPage() {
window.location.href = "/playlist/playlist.html";
}

function goToNextPage1() {
window.location.href = "/level1/level1.html";
}

function goToNextPage2() {
window.location.href = "/ilm/ilm.html";
}

function goToNextPage3() {
window.location.href = "day.html";
}

function prophet() {
    window.location.href = "prophet.html";
}

function qurhan(){
    window.location.href ="qurhan.html";
}

function umarmoulavi() {
  window.location.href = "umarmoulavi.html";
}

function privatelife() {
  window.location.href = "/playlist/privatelife.html";
}

function prayer() {
  window.location.href = "prayer.html";
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 5000);
  }
function goToNextPage5() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScA8ItnYPBohw6HoQzIMoBDxB2Nryz7y74mtRTQa9ejWU3nfg/viewform?usp=sharing";
}
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
function goToNextPage6() {
  window.location.href = "/level2/level2.html";
}
function goToNextPage7() {
  window.location.href = "/level3/level3.html";
}
function openPopup1() {
  document.getElementById('popup1').style.display = 'flex';
}
function closePopup1() {
  document.getElementById('popup1').style.display = 'none';
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function shafi() {
  window.location.href = "/ilm/shafi.html";
}

function hanafi() {
  window.location.href = "/ilm/hanafi.html";
}

function hanbali() {
  window.location.href = "/ilm/hanbali.html";
}

function maliki() {
  window.location.href = "/ilm/maliki.html";
}

function bukhari() {
  window.location.href = "/ilm/bukhari.html";
}

function muslim() {
  window.location.href = "/ilm/muslim.html";
}

function chat() {
  window.location.href = "user.html";
}