    var nameCheck 
    var emailCheck 
    var telCheck 
    var msgCheck 
function test(){
  //Realtime regex check f�r namn
  $('#name-input').on('keypress keydown keyup focus', function () {
    var validation = /^([A-Za-zåäö ]|Å|Ä|Ö){3,}$/g;
    var name = $(this).val();
    var validationResult = validation.test(name);

    errorMessage(validationResult, "-name");
  });

  //Realtime regex check f�r telefonnummer
  $('#tel-input').on('keypress keydown keyup focus', function () {
    var validation = /^([+]{0,1}[0-9]{0,2})[0-9]{10,10}$/g;
    var tel = $(this).val();
    var validationResult = validation.test(tel);

    errorMessage(validationResult, "-tel");
  });

  //Realtime regex check f�r email(En variant, l�nad)
  $('#email-input').on('keypress keydown keyup focus', function () {
    var validation = /^(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)/g;
    var email = $(this).val();
    var validationResult = validation.test(email);

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

  $('#btn').on('click', function(){
    if(nameCheck === true && telCheck === true && msgCheck === true && emailCheck === true){
      $('#name-input, #email-input, #tel-input, #msg-input').val('');
      alert("Meddelande skickat!");
      errorMessage(false, "-msg");
      errorMessage(false, "-name");
      errorMessage(false, "-tel");
      errorMessage(false, "-email"); 
      $('#err-msg-name, #err-msg-email, #err-msg-tel, #err-msg-msg').addClass('hidden');
   
    } else {
        alert("Kontaktformulär ej korrekt ifyllt, vänligen försök igen.");
    } 

  })

   
}
  function errorMessage(validationResult, textType) {
    if (validationResult === false) {
      $('#err-msg' + textType).removeClass('hidden');
      $('#err-msg' + textType).show();

      if(textType == ("-name")){nameCheck = false;}
      if(textType == ("-msg")){msgCheck = false;}
      if(textType == ("-email")){emailCheck = false;}
      if(textType == ("-tel")){telCheck = false;}
    }
    else if(validationResult === true) {
      $('#err-msg' + textType).addClass('hidden');

      if(textType == ("-name")){nameCheck = true;}
      if(textType == ("-msg")){msgCheck = true;}
      if(textType == ("-email")){emailCheck = true;}
      if(textType == ("-tel")){telCheck = true;}
             
    }  
    
  }

