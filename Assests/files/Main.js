// start preloader overlay
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 300);
});
//   end preloader overlay


//disclaimer start
function closeDisclaimer() {
    const popup = document.getElementById('disclaimerPopup');
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}
window.addEventListener('load', () => {
    setTimeout(closeDisclaimer, 10);
});
//disclaimer end

//for dropdown
function toggleDropdown(event) {
    event.stopPropagation();
    document.querySelectorAll('.dropdown_menu').forEach(menu => {
        if (menu !== event.currentTarget.nextElementSibling) {
            menu.classList.remove('show');
        }
    });
    const menu = event.currentTarget.nextElementSibling;
    menu.classList.toggle('show');
}
document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown_menu').forEach(menu => {
        menu.classList.remove('show');
    });
});
// end for dropdown

//for small width sidebar
function opensidebar() {
    const sidebar = document.querySelector('.right_sidebar_container');
    const menuButton = document.querySelector('.menu');
    if (sidebar.classList.contains('sidebar_show')) {
        sidebar.classList.remove('sidebar_show');
        sidebar.classList.add('sidebar_close');
    } else {
        sidebar.classList.add('sidebar_show');
        sidebar.classList.remove('sidebar_close');
    }
    menuButton.classList.toggle('opened');
}
//end for small width sidebar
//for small width sidebar dropdown
document.querySelectorAll(".sidebar-menu li .drop_icon").forEach(icon => {
    icon.addEventListener("click", function (e) {
        e.stopPropagation();
        const parentLi = this.parentElement;
        parentLi.classList.toggle("open");
        document.querySelectorAll(".sidebar-menu li").forEach(li => {
            if (li !== parentLi) li.classList.remove("open");
        });
    });
});
//end small width sidebar dropdown
//for explore/sector slider 
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.explore_slider_track');
    const trackWidth = track.scrollWidth;
    track.innerHTML += track.innerHTML;

    let position = 0;
    const stepSize = 1400;
    const pauseTime = 250;
    const speed = 2;

    let movedSinceLastPause = 0;
    let paused = false;

    function animate() {
        if (!paused) {
            position -= speed;
            movedSinceLastPause += speed;

            if (Math.abs(position) >= trackWidth / 2) {
                position = 0;
                movedSinceLastPause = 0;
                track.style.transition = 'none';
                track.style.transform = `translateX(${position}px)`;
            } else {
                track.style.transform = `translateX(${position}px)`;
            }
            if (movedSinceLastPause >= stepSize) {
                paused = true;
                setTimeout(() => {
                    movedSinceLastPause = 0;
                    paused = false;
                    requestAnimationFrame(animate);
                }, pauseTime);
                return;
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
});
// end for explore/sector slider

//start gallery tab 
const tabs = document.querySelectorAll('.tab_btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(btn => btn.classList.remove('tab_btn_active'));
        tab.classList.add('tab_btn_active');
    });
});

function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tabcontent');
    const tabButtons = document.querySelectorAll('.tab_btn');
    tabContents.forEach(content => content.style.display = 'none');
    tabButtons.forEach(btn => btn.classList.remove('tab_btn_active'));
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
    evt.currentTarget.classList.add('tab_btn_active');
}
//end gallery tab

//start for gallery slider

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.gallery_slider_track');
    const trackWidth = track.scrollWidth;
    track.innerHTML += track.innerHTML;
    let position = 0;
    const stepSize = 1206;
    const pauseTime = 250;
    const speed = 2;
    let movedSinceLastPause = 0;
    let paused = false;
    function animate() {
        if (!paused) {
            position -= speed;
            movedSinceLastPause += speed;

            if (Math.abs(position) >= trackWidth / 2) {
                position = 0;
                movedSinceLastPause = 0;
                track.style.transition = 'none';
                track.style.transform = `translateX(${position}px)`;
            } else {
                track.style.transform = `translateX(${position}px)`;
            }
            if (movedSinceLastPause >= stepSize) {
                paused = true;
                setTimeout(() => {
                    movedSinceLastPause = 0;
                    paused = false;
                    requestAnimationFrame(animate);
                }, pauseTime);
                return;
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
});

//end gallery slider