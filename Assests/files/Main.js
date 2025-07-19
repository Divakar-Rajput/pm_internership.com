// Initialize Swiper
const SecotorSwiper = new Swiper('.SecotorSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    grabCursor: true,
});
function SliderUpdate() {
    const gallerySwiper = new Swiper('.gallerySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        freeMode: true,
        freeModeMomentum: false,
        grabCursor: true,
        on: {
            slideChange: function () {
                document.querySelectorAll('.swiper-wrapper .swiper-slide').forEach(slide => {
                    slide.classList.remove('active-card');
                });
                const activeIndex = this.realIndex + 1;
                const activeSlide = this.slides[activeIndex];
                if (activeSlide) {
                    activeSlide.classList.add('active-card');
                }
            }
        }
    });
}
SliderUpdate()
// Tab button active state handling
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tabcontent');
    const tabButtons = document.querySelectorAll('.tab_btn');

    // Hide all tabs and remove active classes
    tabContents.forEach(content => content.style.display = 'none');
    tabButtons.forEach(btn => btn.classList.remove('tab_btn_active'));

    // Show the selected tab
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
    evt.currentTarget.classList.add('tab_btn_active');
    setTimeout(SliderUpdate, 1000);
}
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
    setTimeout(closeDisclaimer, 3000);
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

//start for gallery view
document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.gallery_slider_card img');
    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const image = this.closest('.gallery_slider_card').querySelector('img');
            if (image) {
                const imagePlayer = document.getElementById('imageviewer');
                imagePlayer.style.display = "flex";
                const Player_image_src = document.getElementById("image");
                Player_image_src.src = image.src;
            }
        });
    });
});
function closeImagePlayer() {
    const imagePlayer = document.getElementById('imageviewer');
    imagePlayer.style.display = "none";
}
//end for gallery view

//start for video player
document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.Gallery_play_btn__eFxZZ');
    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const video = this.closest('.video_slider_card').querySelector('video');
            if (video) {
                const videoPlayer = document.getElementById('videoPlayer');
                videoPlayer.style.display = "flex";
                const Player_video_src = document.getElementById("popupVideo");
                Player_video_src.src = video.src;
                //   Player_video_src.muted = "true";
            }
        });
    });
});
function closeVideoPlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.style.display = "none";
    const Player_video_src = document.getElementById("popupVideo");
    Player_video_src.pause();
}
//end for video player

//for vikshit bharat

document.addEventListener('DOMContentLoaded', function () {
    const groomSwiper = new Swiper('.groomSwiper', {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 1000
    });
});