
const tideBtn = document.querySelector("#tide");
const heavenBtn = document.querySelector("#heaven");
const audio = document.createElement("audio");
const test = document.querySelector("#test");


audio.autoplay = "autoplay";
audio.id = "audio-player";
audio.controls = "controls";
test.appendChild(audio);

heavenBtn.addEventListener("click", () => {
    test.textContent = "";

});


