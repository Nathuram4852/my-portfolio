
   AOS.init({
    duration: 1200,       // Smooth 1.2s animation
    easing: 'ease-in-out',
    once: true            // Animate only once on scroll
  });


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectItems.forEach(item => {
          const categories = (item.getAttribute('data-category') || "").split(" ");

          if (filterValue === "all" || categories.includes(filterValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });