const songs = [
  { name: "song1", title: "Annul Maelae", image: "song1" },
  { name: "song2", title: "Venniavu Saaral Nee", image: "song2" },
  { name: "song3", title: "Nenjukkul Peithidum", image: "song3" },
  { name: "song4", title: "Neeye Neeye", image: "song4" },
  { name: "song5", title: "Hey Minnale", image: "song5" },
  { name: "song6", title: "Chennai Senthamizh", image: "song6" },
  { name: "song7", title: "Ava Enna Enna", image: "song7" },
  { name: "song8", title: "Nee Paartha Vizhigal", image: "song8" },
  { name: "song9", title: "Neeye Neeye", image: "song9" },
  { name: "song10", title: "Poo Nee Poo", image: "song10" },
];

let currentIndex = 0;

const audio = document.getElementById("audio");
const albumArt = document.getElementById("album-art");
const songTitle = document.getElementById("song-title");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const volumeSlider = document.getElementById("volume");

function loadSong(index) {
  const song = songs[index];
  audio.src = `songs/${song.name}.mp3`;
  albumArt.src = `images/${song.image}.jpg`;
  songTitle.textContent = song.title;
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playSong();
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

loadSong(currentIndex);
