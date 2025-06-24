const curatedLookbooks = {
  "nyc summer": [
    "nycsummer1.jpg",
    "nycsummer2.jpg",
    "nycsummer3.jpg",
    "nycsummer4.jpg"
  ],
  "cozy fall": [
    "cozyfall1.jpg",
    "cozyfall2.jpg",
    "cozyfall3.jpg",
    "cozyfall4.jpg"
  ],
};

const moodboard = document.getElementById('moodboard');
const generateBtn = document.getElementById('generateBtn');
const vibeInput = document.getElementById('vibeInput');
const uploadImages = document.getElementById('uploadImages');

generateBtn.addEventListener('click', () => {
  moodboard.innerHTML = ''; // Clear existing
  const vibe = vibeInput.value.toLowerCase().trim();
  // ✨ Add a vibe description
const description = document.createElement('p');
description.className = 'vibe-description';

if (vibe === "nyc summer") {
  description.textContent = "Feminine, bold, and playful — inspired by café mornings and rooftop evenings.";
} else if (vibe === "cozy fall") {
  description.textContent = "Layered knits, warm tones, and golden hour walks.";
} else {
  description.textContent = "";
}
moodboard.appendChild(description);
if (curatedLookbooks[vibe]) {
  // 🌈 Change background color based on vibe
  if (vibe === "nyc summer") {
    document.body.style.backgroundColor = "#f0f7ff";
  } else if (vibe === "cozy fall") {
    document.body.style.backgroundColor = "#f8f1e4";
  } else {
    document.body.style.backgroundColor = "#ffffff";
  }

  // 🖼️ Display the curated images
  if (curatedLookbooks[vibe]) {
  curatedLookbooks[vibe].forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    moodboard.appendChild(img);
  });
} else {
  moodboard.innerHTML = `<p>No curated lookbook found for "${vibe}". Try "nyc summer" or "cozy fall".</p>`;
}
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
// Quick vibe buttons
document.querySelectorAll('.quick-vibe').forEach(button => {
  button.addEventListener('click', () => {
    const vibe = button.getAttribute('data-vibe');
    vibeInput.value = vibe;
    generateBtn.click(); // Automatically triggers moodboard
  });
});
document.getElementById('saveBtn').addEventListener('click', () => {
  html2canvas(document.getElementById('lookbook')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'moodboard.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});

