console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "Main html elements has been changed";

var image = document.getElementById('madi');
image.onclick = function() {
  image.style.marginLeft = '150px';  
};

