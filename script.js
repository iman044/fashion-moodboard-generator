const curatedLookbooks = {
  "nyc summer carrie bradshaw": [
    "images/carrie1.jpg",
    "images/nyc2.jpg",
    "images/summer3.jpg",
  ],
  "gilmore girls fall cozy": [
    "images/gilmore1.jpg",
    "images/fall2.jpg",
    "images/cozy3.jpg",
  ],
};

const moodboard = document.getElementById('moodboard');
const generateBtn = document.getElementById('generateBtn');
const vibeInput = document.getElementById('vibeInput');
const uploadImages = document.getElementById('uploadImages');

generateBtn.addEventListener('click', () => {
  moodboard.innerHTML = ''; // Clear existing
  const vibe = vibeInput.value.toLowerCase().trim();

  if (curatedLookbooks[vibe]) {
    curatedLookbooks[vibe].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      moodboard.appendChild(img);
    });
  } else {
    moodboard.innerHTML = `<p>No curated lookbook found for "${vibe}". Try "nyc summer carrie bradshaw" or "gilmore girls fall cozy".</p>`;
  }
});

uploadImages.addEventListener('change', () => {
  const files = uploadImages.files;
  for (let file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      moodboard.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});
