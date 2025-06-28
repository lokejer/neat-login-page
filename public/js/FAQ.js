document.addEventListener('DOMContentLoaded', () => {
  // Select all FAQ toggle buttons
  const faqButtons = document.querySelectorAll('.accordion-button');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('hi')
      const icon = button.querySelector('.faq-icon');

      // Use Bootstrap's shown/hidden events
      const collapseId = button.getAttribute('data-bs-target');
      const collapseEl = document.querySelector(collapseId);

      collapseEl.addEventListener('shown.bs.collapse', () => {
        button.scrollIntoView({ behavior: 'smooth', block: 'start' });
        icon.style.transform = 'rotate(180deg)';
      });

      collapseEl.addEventListener('hidden.bs.collapse', () => {
        icon.style.transform = 'rotate(0deg)';
      });
    });
  });
});
