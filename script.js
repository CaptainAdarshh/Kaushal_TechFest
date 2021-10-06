const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    console.log("Button is active");
    menuLinks.classList.toggle('active');
})


// Get a Date

const countdown = () => {
    const countDate = new Date("Dec 17, 2021 00:00:00").getTime();
    const now = new Date().getTime();

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Calculate the days

    const festDay = Math.floor(gap / day);
    console.log(festDay);


    document.querySelector(".days-remaining span").innerText = festDay;

}

countdown()