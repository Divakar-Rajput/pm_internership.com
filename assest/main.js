document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.explore_slider_track');
  const cards = track.children;
  const trackWidth = track.scrollWidth;
  track.innerHTML += track.innerHTML;
  let position = 0;
  const speed = 1.2;
  function animate() {
    position -= speed;
    if (Math.abs(position) >= trackWidth) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }
  animate();
});

// window.addEventListener('load', function() {
//     const track = document.querySelector('.explore_slider_track');
//     const cards = Array.from(track.children);

//     // Duplicate cards for infinite effect
//     cards.forEach(card => {
//       const clone = card.cloneNode(true);
//       track.appendChild(clone);
//     });
//   });

document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.gallery_slider_track');
  const cards = track.children;
  const trackWidth = track.scrollWidth;
  track.innerHTML += track.innerHTML;
  let position = 0;
  const speed = 1.2;
  function animate() {
    position -= speed;
    if (Math.abs(position) >= trackWidth) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }
  animate();
});


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

function closeDisclaimer() {
  document.getElementById('disclaimerPopup').style.display = 'none';
}

// Dropdown toggle for "Know More" button
const knowMoreBtn = document.getElementById('knowMoreBtn');
const dropdown = document.getElementById('knowMoreDropdown');

knowMoreBtn.addEventListener('click', () => {
  const isOpen = dropdown.classList.toggle('open');
  knowMoreBtn.classList.toggle('open', isOpen);
  knowMoreBtn.setAttribute('aria-expanded', isOpen);
  if (isOpen) {
    dropdown.focus();
  }
});

// Close dropdown when clicking outside or pressing Escape
document.addEventListener('click', (e) => {
  if (!knowMoreBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    knowMoreBtn.classList.remove('open');
    knowMoreBtn.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    if (dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
      knowMoreBtn.classList.remove('open');
      knowMoreBtn.setAttribute('aria-expanded', 'false');
      knowMoreBtn.focus();
    }
  }
});

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

