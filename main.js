const ascii = document.getElementById("ascii");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image(500, 500); 
img.addEventListener(
  "load",
  (e) => {
    console.log("hiii");
    ctx.drawImage(img, 0, 0, 800, 500);
    let imageData = ctx.getImageData(0, 0, 800, 500).data;
    console.log(imageData.filter((v, i) => i % 1 === 0));
    // canvas.style.display = "none";
    const data = [];
    let value = "";
    for (let i = 0; i < imageData.length; i += 4) {
      let hsp = Math.sqrt(
        0.299 * (imageData[i] * imageData[i]) +
          0.587 * (imageData[i + 1] * imageData[i + 1]) +
          0.114 * (imageData[i + 2] * imageData[i + 2])
      );
      ascii.appendChild(img);
      if (hsp > 127.5) {
        data.push(0)
      } else {
        data.push(1)
      }
    }
    data.forEach((v, i) => {
      if((i+1)% 4 === 0){
        if ((i + 1) % 1600 === 0) {
          value += "<br/>";
        } else {
          if (v) {
            value += "#";
          } else value += "-";
        }
      }
    });
    ascii.innerHTML = value;
  },
  false
);
console.log(img);
img.src = "kali.jpg";
