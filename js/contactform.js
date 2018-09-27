var nameCheck
var emailCheck
var telCheck
var msgCheck



function test() {
 var nameVal = $('#name-input').val();
 var emailVal = $('#email-input').val();
 var telVal = $('#tel-input').val();
  
 if(!nameVal || !emailVal || !telVal){
  $('#name-input').val(""+localStorage.getItem("name")+"");
  $('#email-input').val(""+localStorage.getItem("email")+"");
  $('#tel-input').val(""+localStorage.getItem("tel")+""); }
  
  //Realtime regex check f�r namn
  $('#name-input').on('keypress keydown keyup focus', function () {
    var validation = /^([A-Za-zåäö ]|Å|Ä|Ö){3,}$/g;
    var name = $(this).val();
    var validationResult = validation.test(name);

    localStorage.setItem("name", ""+$('#name-input').val()+"");

    errorMessage(validationResult, "-name");
  });

  //Realtime regex check f�r telefonnummer
  $('#tel-input').on('keypress keydown keyup focus', function () {
    var validation = /^([+]{0,1}[0-9]{0,2})[0-9]{10,10}$/g;
    var tel = $(this).val();
    var validationResult = validation.test(tel);

    localStorage.setItem("tel", ""+$('#tel-input').val()+"");

    errorMessage(validationResult, "-tel");
  });

  //Realtime regex check f�r email(En variant, l�nad)
  $('#email-input').on('keypress keydown keyup focus', function () {
    var validation = /^(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)/g;
    var email = $(this).val();
    var validationResult = validation.test(email);

    localStorage.setItem("email", ""+$('#email-input').val()+"");

    errorMessage(validationResult, "-email");
  });

  //Realtime regex check f�r meddelande
  $('#msg-input').on('keypress keydown keyup focus', function () {
    var validation = /^(?!\s*$).+/g;
    var msg = $(this).val();
    var validationResult = validation.test(msg);

    errorMessage(validationResult, "-msg");
  });

  //Ta bort errormeddelande vid onBlur
  //$('#name-input, #email-input, #tel-input, #msg-input').on('blur', function(){
  // $('span').removeClass().addClass('hidden');

  //})

  var errMsg = document.getElementById('err-modal');
  

  $('#btn').on('click', function () {
    if (nameCheck === true && telCheck === true && msgCheck === true && emailCheck === true) {

      $('#name-input, #email-input, #tel-input, #msg-input').val('');


      $('#err-modal').css('display', 'block');
      $('#message').empty().append('Meddelande skickat!');
       
        $('#err-modal').on('click', function(){
          $('#err-modal').css('display', 'none');
        })

        errorMessage(false, "-msg");
        errorMessage(false, "-name");
        errorMessage(false, "-tel");
        errorMessage(false, "-email");
        $('#err-msg-name, #err-msg-email, #err-msg-tel, #err-msg-msg').addClass('hidden');

    
      
     } else {

      $('#err-modal').css('display', 'block');
      $('#message').empty().append('Formuläret är inte korrekt ifyllt, försök igen.');

        $('#err-modal').on('click', function(){
          $('#err-modal').css('display', 'none');
        })
    }
    
    
   

  })}
  
  function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(39.027877, 125.776536),
        zoom:18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map=new google.maps.Map(document.getElementById("map"),mapProp);
    }
  

  function errorMessage(validationResult, textType) {
    if (validationResult === false) {
      $('#err-msg' + textType).removeClass('hidden');
      $('#err-msg' + textType).show();

      if (textType == ("-name")) { nameCheck = false; }
      if (textType == ("-msg")) { msgCheck = false; }
      if (textType == ("-email")) { emailCheck = false; }
      if (textType == ("-tel")) { telCheck = false; }
    }
    else if (validationResult === true) {
      $('#err-msg' + textType).addClass('hidden');

      if (textType == ("-name")) { nameCheck = true; }
      if (textType == ("-msg")) { msgCheck = true; }
      if (textType == ("-email")) { emailCheck = true; }
      if (textType == ("-tel")) { telCheck = true; }

    }

  }