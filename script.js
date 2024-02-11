// console.log(dataInfo, JSON.parse(dataInfo));

const images = JSON.parse(dataInfo);
let contant = document.querySelector('.contant');

images.map(function (value) {
    let img = document.createElement('img');
    img.id = value.id;
    img.height = value.height;
    img.width = value.width;
    img.src = value.url;


    contant.appendChild(img);
    // console.log(value);
});