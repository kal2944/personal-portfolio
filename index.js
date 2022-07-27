

const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const navLink1 = document.querySelector(".nav_link1");
const navLink2 = document.querySelector(".nav_link2");
const navLink3 = document.querySelector(".nav_link3");

navToggle.addEventListener('click', function() {
    links.classList.toggle("show_nav");
    bar1.classList.toggle("change1");
    bar2.classList.toggle("change2");
    bar3.classList.toggle("change3");
})

navLink1.addEventListener('click', function() {
    links.classList.remove('show_nav');
    bar1.classList.remove("change1");
    bar2.classList.remove("change2");
    bar3.classList.remove("change3");
})

navLink2.addEventListener('click', function() {
    links.classList.remove('show_nav');
    bar1.classList.remove("change1");
    bar2.classList.remove("change2");
    bar3.classList.remove("change3");
})

navLink3.addEventListener('click', function() {
    links.classList.remove('show_nav');
    bar1.classList.remove("change1");
    bar2.classList.remove("change2");
    bar3.classList.remove("change3");
})
