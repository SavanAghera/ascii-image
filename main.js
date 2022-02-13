const height = 30;
const width = 50;
const ascii = document.getElementById("ascii");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const video = document.querySelector("video");
const constraints = {
  video: true,
};

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream;
});
video.addEventListener("play", (e) => {
  setInterval(timer, 20);

},
  false
);
function timer () {
  ctx.drawImage(video, 0, 0, width, height);
  let imageData = ctx.getImageData(0, 0, width, height).data;
  canvas.style.display = 'none'
  const data = [];
  let value = "" , temp = "" , j = 0;;
  for (let i = 0; i < imageData.length; i += 4) {
    if (i % (width *4) === 0) {
      value += temp + "<br/>";
      temp = "";
      j++;
    }
    temp += `<span style='color:rgb(${imageData[i]}, ${imageData[i + 1]}, ${imageData[i + 2]})'>s</span>`;
  }
  console.log(data);
  ascii.innerHTML = value;
}