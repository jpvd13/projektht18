var nameCheck 
var emailCheck
var telCheck
var msgCheck

function whenLoaded() {

 var nameVal = $('#name-input').val();
 var emailVal = $('#email-input').val();
 var telVal = $('#tel-input').val();


 
  if(nameVal == null){ $('#name-input').val(""); console.log("bajs")} 
  else{$('#name-input').val(""+localStorage.getItem("name")+"")}

  var nameBoolean = localStorage.getItem("name-boolean");
  if(nameBoolean == "false"){$('#err-msg-name').removeClass('hidden')}
  


  if(emailVal == null){ $('#email-input').val("")}
  else{$('#email-input').val(""+localStorage.getItem("email")+"")}

  var emailBoolean = localStorage.getItem("email-boolean");
  if(emailBoolean == "false"){$('#err-msg-email').removeClass('hidden')}


  
  if(telVal == null){$('#tel-input').val("")}
  else{$('#tel-input').val(""+localStorage.getItem("tel")+"")}

  var telBoolean = localStorage.getItem("tel-boolean");
  if(telBoolean == "false"){$('#err-msg-tel').removeClass('hidden')}


  errorMessage(nameBoolean, '-name');
  errorMessage(telBoolean, '-tel');
  errorMessage(emailBoolean, '-email');  

  //Realtime regex check f�r namn
  $('#name-input').on('keypress keydown keyup focus', function () {
    var validation = /^([A-Za-zåäöé]\s?|Å|Ä|Ö){3,}$/g;
    var name = $(this).val();
    var validationResult = validation.test(name).toString();

    localStorage.setItem("name", ""+$('#name-input').val()+"");
    
    errorMessage(validationResult, "-name");
  });

  //Realtime regex check f�r telefonnummer
  $('#tel-input').on('keypress keydown keyup focus', function () {
    var validation = /^([+]{0,1}[0-9]{0,2})[0-9]{10,10}$/g;
    var tel = $(this).val();
    var validationResult = validation.test(tel).toString();

    localStorage.setItem("tel", ""+$('#tel-input').val()+"");

    errorMessage(validationResult, "-tel");
  });

  //Realtime regex check f�r email(En variant, l�nad)
  $('#email-input').on('keypress keydown keyup focus', function () {
    var validation = /^(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)/g;
    var email = $(this).val();
    var validationResult = validation.test(email).toString();

    localStorage.setItem("email", ""+$('#email-input').val()+"");

    errorMessage(validationResult, "-email");
  });

  //Realtime regex check f�r meddelande
  $('#msg-input').on('keypress keydown keyup focus', function () {
    var validation = /^(?!\s*$).+/g;
    var msg = $(this).val();
    var validationResult = validation.test(msg).toString();
  
    
    errorMessage(validationResult, "-msg");
  });

  //Ta bort errormeddelande vid onBlur
  //$('#name-input, #email-input, #tel-input, #msg-input').on('blur', function(){
  // $('span').removeClass().addClass('hidden');

  //})


  $('#btn').on('click', function () {
    if (nameCheck === true && telCheck === true && msgCheck === true && emailCheck === true) {

      $('#msg-input').val('');
      $('#modal-content').css('background-color', 'lightgreen');
      $('#err-modal').css('display', 'block');
      $('#message').empty().append('Meddelande skickat!');
       
        $('#err-modal').on('click', function(){
          $('#err-modal').css('display', 'none');
        })

        errorMessage(nameBoolean, '-name');
        errorMessage(telBoolean, '-tel');
        errorMessage(emailBoolean, '-email'); 
        errorMessage('false', '-msg'); 
        $('#err-msg-name, #err-msg-email, #err-msg-tel, #err-msg-msg').addClass('hidden');
        localStorage.setItem("name-boolean", "true");
        localStorage.setItem("email-boolean", "true");
        localStorage.setItem("tel-boolean", "true");
      
     } else {

      $('#modal-content').css('background-color', 'lightcoral');
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
    } 
   
    var map=new google.maps.Map(document.getElementById("map"),mapProp);

    
}
 
  
    function fixName(){
  errorMessage(name-boolean, '-name');
  errorMessage(tel-boolean, '-tel');
  errorMessage(email-boolean, '-email');  
    }



  function errorMessage(validationResult, textType) {
    if (validationResult === 'false') {
      $('#err-msg' + textType).removeClass('hidden');
     
      if (textType == ("-name")) { nameCheck = false; localStorage.setItem("name-boolean", ""+nameCheck+"") }
      if (textType == ("-msg")) { msgCheck = false; }
      if (textType == ("-email")) { emailCheck = false; localStorage.setItem("email-boolean", ""+emailCheck+"") }
      if (textType == ("-tel")) { telCheck = false; localStorage.setItem("tel-boolean", ""+telCheck+"") }
    }
    else if (validationResult === 'true') {
      $('#err-msg' + textType).addClass('hidden');

      if (textType == ("-name")) { nameCheck = true; localStorage.setItem("name-boolean", ""+nameCheck+"") }
      if (textType == ("-msg")) { msgCheck = true; }
      if (textType == ("-email")) { emailCheck = true; localStorage.setItem("email-boolean", ""+emailCheck+"") }
      if (textType == ("-tel")) { telCheck = true; localStorage.setItem("tel-boolean", ""+telCheck+"") }

    }
    

  }
