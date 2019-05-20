const body = document.querySelector("body");


const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.appendChild(image);
}

function geRandom(){
    const number = Math.floor(Math.random() * 3);
    return number;
}


function init(){
    const randomNumber = geRandom();
    paintImage(randomNumber);
}
init();