console.log('Loaded!');

//Change the text of the main text div

var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//Move the image
var image = document.getElementById("madi");
image.onclick = function(){
    image.style.marginLeft = '100px';
}