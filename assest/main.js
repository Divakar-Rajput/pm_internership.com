function toggleDropdown(event) {
  event.stopPropagation(); // Prevent outside click from closing immediately

  // Close all other dropdowns first
  document.querySelectorAll('.dropdown_menu').forEach(menu => {
    if (menu !== event.currentTarget.nextElementSibling) {
      menu.classList.remove('show');
    }
  });
  // Toggle the clicked one
  const menu = event.currentTarget.nextElementSibling;
  menu.classList.toggle('show');
}
// Close dropdowns when clicking outside
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
      if(e.key === "Escape") {
        if(dropdown.classList.contains('open')) {
          dropdown.classList.remove('open');
          knowMoreBtn.classList.remove('open');
          knowMoreBtn.setAttribute('aria-expanded', 'false');
          knowMoreBtn.focus();
        }
      }
    });

//   window.addEventListener("DOMContentLoaded", () => {
//     const container = document.querySelector(".marqueen_content");
//     const originalContent = container.innerHTML;

//     // Clone content until it's long enough for seamless scroll
//     while (container.scrollWidth < container.offsetWidth * 2) {
//       container.innerHTML += originalContent;
//     }
//   });

