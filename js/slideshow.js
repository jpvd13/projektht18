var imgNumber = 0;
var path = ["images/animal-attack.jpg",
  "images/animal-chill.jpg",
  "images/animal-eyes.jpg",
  ];
var numberOfImg = path.length;
var timer = null;
var imgDescriptions = ["Scolding", "Chilling", "Close up"]

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
  $("#imgDesc").empty().append(imgDescriptions[imgNumber]);
  return false;
}

function nextImage() {
  ++imgNumber;
  if (imgNumber > (numberOfImg - 1)) {
    imgNumber = 0;
  }
  $("#imgSlideshow").attr('src', path[imgNumber]);
  $("#imgDesc").empty().append(imgDescriptions[imgNumber]);
  return false;
}
