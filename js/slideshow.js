var imgNumber = 0;
var path = ["images/animal-attack.jpg",
  "images/animal-chill.jpg",
  "images/animal-eyes.jpg",
];
var numberOfImg = path.length;
var timer = null;


function slide() {
  imgNumber = (imgNumber + 1) % path.length;
  $("#imgSlideshow").attr('src', path[imgNumber]);
}

function setTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    $('#play-pause').children().empty().append('&#x25B6;');
  } else {
    timer = setInterval(slide, 2000);
    $('#play-pause').children().empty().append('&#10074;&#10074;');
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


var counter = 1; 
function resizeImg(){    
    if (counter == 1) {
      $('#img-container').animate({
        height: '500px',
      });      
      counter = 0;
      console.log(counter);
    } 

    else{
      $('#img-container').animate({
        height: '100px',
      });
      counter = 1;
      console.log(counter);
    }
  };
