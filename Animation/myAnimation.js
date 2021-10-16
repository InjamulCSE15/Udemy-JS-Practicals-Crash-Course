
var imgSlide = new Array ("1.png", "2.png", "3.png", "4.png");
var x = 1;
var ref;

function imgGallery () {
    document.images[0].src = imgSlide[x];
    x++;

    if(x > 3)
        x = 0;
}

function start () {
    ref = setInterval("imgGallery()", 2000);
}

function stop () {
    clearInterval(ref);
}