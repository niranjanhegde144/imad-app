var button = document.getElementById('counter');
var count = 0;
button.onclick = function () {
 /* 
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            alert("Button clicked");
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }  
  };*/
  
  var span = document.getElementById('count');
  count = count + 1;
  span.innerHTML = count.toString();
  
};