const height = 60;
const width = 100;
const ascii = document.getElementById("ascii");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image(width, height);
img.addEventListener("load", (e) => {
  ctx.drawImage(img, 0, 0, width, height);
  let imageData = ctx.getImageData(0, 0, width, height).data;
  console.log(imageData.filter((v, i) => i % 1 === 0));
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
},
  false
);
console.log(img);
img.src = "test.jpg";