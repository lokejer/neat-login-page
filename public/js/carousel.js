// const mainImage = document.getElementById('mainImage');
// const thumbnails = document.querySelectorAll('.thumb');

// thumbnails.forEach(thumb => {
//   thumb.addEventListener('click', () => {
//     // change the main image source
//     mainImage.src = thumb.src;

//     // show active border
//     thumbnails.forEach(t => {
//       t.classList.add('blur-effect');
//     });
//     thumb.classList.remove('blur-effect');
//   });
// });

// image slider
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'assets/cover-1.jpg',
    'assets/cover-2.jpg',
    'assets/cover-3.jpg'
  ];

  let currentIndex = 0;

  const mainImage = document.getElementById('mainImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const radios = document.querySelectorAll('.radio-input input[type="radio"]');
  
  function updateImage(index) {
    currentIndex = index;
    
    // current image fades-out
    mainImage.classList.add('fade-out');

    // wait for fade-out to finish before changing src
    setTimeout(() => {
      mainImage.src = images[currentIndex];
      mainImage.classList.remove('fade-out');
    }, 300);

    // update radio buttons
    radios.forEach((radio, i) => {
      radio.checked = (i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    updateImage(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) newIndex = 0;
    updateImage(newIndex);
  });

  // clicking a radio button changes the image
  radios.forEach((radio, i) => {
    radio.addEventListener('click', () => {
      updateImage(i);
    });
  });

  // initial sync
  updateImage(currentIndex);
});
