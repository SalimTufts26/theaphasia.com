const test = document.querySelector("#test");
const song1 = document.querySelector("#s1Btn");
const song2 = document.querySelector("#s2Btn");
const blank = document.querySelector("#blank");

let state1 = "pause";
let state2 = "pause";

song1.addEventListener("click", () => {
  if (state1 === "pause") {
    blank.src = "../assets/heavenSong.wav";
    blank.play();
    state1 = "play";
    state2 = "pause";
    song1.textContent = "Stop";
    song2.textContent = "Play";
  } else {
    blank.pause();
    state1 = "pause";
    song1.textContent = "Play";
  }
});

song2.addEventListener ("click", () => {
  if (state2 === "pause") {
    blank.src = "../assets/tideSong.wav";
    blank.play();
    state2 = "play";
    state1 = "pause";
    song2.textContent = "Stop";
    song1.textContent = "Play";
  } else {
    blank.pause();
    state2 = "pause";
    song2.textContent = "Play";
  }
});



