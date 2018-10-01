var nameCheck 
var emailCheck
var telCheck
var msgCheck

function clearStorage(){
localStorage.clear(); }

function empty(e) {
  switch (e) {
    case "":
    case 0:
    case "0":
    case null:
    case false:
    case typeof this === "undefined":
      return true;
    default:
      return false;
  }
}

function whenLoaded() {

  var nameVal = $('#name-input').val();
  var emailVal = $('#email-input').val();
  var telVal = $('#tel-input').val();
  
  var storedContact = JSON.parse(localStorage.getItem('contact'));
console.log(storedContact);
  if(!empty(storedContact)){
  if (storedContact.name.length > 0) {
    $('#name-input').val(''+storedContact.name+'');
  } else {
    $('#name-input').val("");
  }

  if (storedContact.email.length > 0){
    var contactEmail = storedContact.email;  
    $('#email-input').val(''+contactEmail+'');  
  } else {
    $('#email-input').val("");
  }

  if(storedContact.tel.length > 0){
    var contactTel = storedContact.tel;
    $('#tel-input').val(''+contactTel+'');
  } else {
    $('#tel-input').val("");
  }
}

 
  if(nameVal === 'null'){ $('#name-input').val("")} 
  var nameBoolean = localStorage.getItem("name-boolean");
  if(nameBoolean == "false"){$('#err-msg-name').removeClass('hidden')}
 
  
  if(emailVal === "null"){ $('#email-input').val("")}
  var emailBoolean = localStorage.getItem("email-boolean");
  if(emailBoolean == "false"){$('#err-msg-email').removeClass('hidden')}

  
  if(telVal === "null"){$('#tel-input').val("")}
  var telBoolean = localStorage.getItem("tel-boolean");
  if(telBoolean == "false"){$('#err-msg-tel').removeClass('hidden')}


  addToContact($('#name-input').val() , '-name');
  addToContact($('#email-input').val() , '-email');
  addToContact($('#tel-input').val() , '-tel');


  errorMessage(nameBoolean, '-name');
  errorMessage(telBoolean, '-tel');
  errorMessage(emailBoolean, '-email');  

  //Realtime regex check f�r namn
  $('#name-input').on('keypress keydown keyup focus', function () {
    var validation = /^([A-Za-zåäöé]\s?|Å|Ä|Ö){3,}$/g;
    var name = $(this).val();
    var validationResult = validation.test(name).toString();

    localStorage.setItem("name", ""+$('#name-input').val()+"");
   
    addToContact($('#name-input').val() , '-name');
    store(contact);
    errorMessage(validationResult, "-name");
  });

  //Realtime regex check f�r telefonnummer
  $('#tel-input').on('keypress keydown keyup focus', function () {
    var validation = /^([+]{0,1}[0-9]{0,2})[0-9]{10,10}$/g;
    var tel = $(this).val();
    var validationResult = validation.test(tel).toString();

    localStorage.setItem("tel", ""+$('#tel-input').val()+"");
    addToContact($('#tel-input').val() , '-tel');
    store(contact);
    errorMessage(validationResult, "-tel");
  });

  //Realtime regex check f�r email(En variant, l�nad)
  $('#email-input').on('keypress keydown keyup focus', function () {
    var validation = /^(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)/g;
    var email = $(this).val();
    var validationResult = validation.test(email).toString();

    localStorage.setItem("email", ""+$('#email-input').val()+"");
    addToContact($('#email-input').val() , '-email');
    store(contact);
    errorMessage(validationResult, "-email");
  });

  //Realtime regex check f�r meddelande
  $('#msg-input').on('keypress keydown keyup focus', function () {
    var validation = /^(?!\s*$).+/g;
    var msg = $(this).val();
    var validationResult = validation.test(msg).toString();
  
    
    errorMessage(validationResult, "-msg");
  });



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

  var contact = {
    name:'',
    email:'',
    tel:''
    };

  function addToContact(input, textType){
   
    if (textType == ("-name")){contact.name = input}
    if (textType == ("-email")){contact.email = input}
    if (textType == ("-tel")){contact.tel = input}
    
  }

  function store(input){
    var inputToString = JSON.stringify(input);
    localStorage.setItem('contact', ''+inputToString+'');
  }
  
  function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(39.027877, 125.776536),
        zoom:18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }   
    var map=new google.maps.Map(document.getElementById("map"),mapProp);  
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
