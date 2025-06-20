
   AOS.init({
    duration: 1200,       // Smooth 1.2s animation
    easing: 'ease-in-out',
    once: true            // Animate only once on scroll
  });


const filterButtons = document.querySelectorAll('[data-filter]');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    projectItems.forEach(item => {
      const categories = item.getAttribute('data-category')?.split(' ') || [];

      // Show item if 'all' is selected or filter matches any category
      if (filterValue === 'all' || categories.includes(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
