var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var element = document.getElementById("myFooter");

  if (prevScrollPos > currentScrollPos) {
    element.style.opacity = "1";
  } else {
    element.style.opacity = "0";
  }

  prevScrollPos = currentScrollPos;
});
var currentImgId;

function enlargeImg(imgId) {
  var img = document.getElementById(imgId);

  // Add the "enlarged" class to the image element
  img.classList.toggle("enlarged");
  img.classList.toggle("photo")

  // set current image id to clicked image id
  currentImgId = imgId;
};
