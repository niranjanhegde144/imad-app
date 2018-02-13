console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "Main html elements has been changed";

var image = document.getElementById('madi');
image.onclick = function() {
    var interval = setInterval(moveRight, 50);
};

var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 5;
    image.style.marginLeft = marginLeft + 'px';
}
