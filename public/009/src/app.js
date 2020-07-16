const audio = document.getElementById("audio");

audio.src = './assets/como_te_quiero.mp3';

const context = new AudioContext();
const src = context.createMediaElementSource(audio);
const analyser = context.createAnalyser();


const canvas = document.querySelector("#canvas");

document.querySelector('button').addEventListener('click', function() {
    context.resume().then(() => {
    console.log('Playback resumed successfully');
    });
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

src.connect(analyser);
analyser.connect(context.destination);

analyser.fftSize = 256;

const bufferLength = analyser.frequencyBinCount;

var dataArray = new Uint8Array(bufferLength);

var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var barWidth = (WIDTH / bufferLength) * 2.5;
var barHeight;
var x = 0;

function renderFrame() {
    requestAnimationFrame(renderFrame);

    x = 0;

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        ctx.fillStyle = "#fff";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }
}

renderFrame();


