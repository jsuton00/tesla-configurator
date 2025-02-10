const topBar = document.querySelector('#top-bar');
const exteriorColourSection = document.querySelector('#exterior-buttons');
const interiorColourSection = document.querySelector('#interior-buttons');
const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');

// Handle top bar on scroll
const handleTopBarScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle('visible-bar', atTop);
  topBar.classList.toggle('hidden-bar', !atTop);
};

// Handle colour selection
const handleColourButtonClick = (event) => {
  let button;
  console.log(event.target);
};

// Event listeners
window.addEventListener('scroll', () =>
  requestAnimationFrame(handleTopBarScroll)
);
exteriorColourSection.addEventListener('click', handleColourButtonClick);
interiorColourSection.addEventListener('click', handleColourButtonClick);
