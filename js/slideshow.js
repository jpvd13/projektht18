var imgNumber = 0;
var path = ["images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg",
  "images/slide5.jpg"];
var numberOfImg = path.length;
var timer = null;
var imgDescriptions = ["En sn&ouml;ig skog", "N&aring;gra n&auml;ckrosor", "Bl&aring; kullar", "En fin solnedg&aring;ng", "Klassikern"]

function slide() {
  imgNumber = (imgNumber + 1) % path.length;
  console.log(imgNumber);
$("#imgSlideshow").attr('src', path[imgNumber]);
$("#imgDesc").empty().append(imgDescriptions[imgNumber]);
}

function setTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(slide, 5000);
  }
  return false;
}

function previousImage() {
  --imgNumber;
  if (imgNumber < 0) {
    imgNumber = numberOfImg - 1;
  }
  $("#imgSlideshow").attr('src', path[imgNumber]);
  return false;
}

function nextImage() {
  ++imgNumber;
  if (imgNumber > (numberOfImg - 1)) {
    imgNumber = 0;
  }
  $("#imgSlideshow").attr('src', path[imgNumber]);
  return false;
}
