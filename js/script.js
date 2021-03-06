$(document).ready(function () {
/*Togglar navbar från desktop till mobilläge*/
    $('#content-frame').on('click', function () {
        $('#topnav').attr('class', 'navbar');

    })

})
/* Skriver in datan vid sidbyten */
function portfolio() {
    $('#navPortfolio').attr('class', 'active');
    $('#navHome').attr('class', 'goResponsive()');
    $('#navContact').attr('class', '');
    $('#teamref').attr('class', '');

    $('#teamref').attr('onclick', 'theTeam(), goResponsive()');


    $('#content-frame').empty().append(`
   <h1>Portfolio<hr/></h1>
    <div class="projectDiv">    
        <div class="projectImg">

            <img name="project1" src="images/project1.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/circular-wave-logo-template_843660.htm" target="_blank">
                <div class="tooltip">
                    Visa projekt
                </div>
            </a>
        </div>
        <div class="labelDiv"><label>Logotext
               </label></div>
        Beskrivande text som säger var och när vi utvecklat projektet. Det var igår, i parken. <hr />
    </div>
    <div class="projectDiv">
        <div class="projectImg">
            <img name="project2" src="images/project2.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                <div class="tooltip">
                    Visa projekt
                </div>
            </a>
        </div>
        <div class="labelDiv"><label>Studio
               </label></div>
        Beskrivande text som säger var och när vi utvecklat projektet. Det var igår, i parken. <hr />
    </div>
    <div class="projectDiv">
        <div class="projectImg">
            <img name="project3" src="images/project3.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/technological-logo-design_1187936.htm" target="_blank">
                <div class="tooltip">
                    Visa projekt
                </div>
            </a>
        </div>
        <div class="labelDiv"><label>Techlogo
               </label></div>
        Beskrivande text som säger var och när vi utvecklat projektet. Det var igår, i parken. <hr />
    </div>
    <div class="projectDiv">
        <div class="projectImg">
            <img name="project4" src="images/project4.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/luxury-brand-design_1157544.htm#term" target="_blank">
                <div class="tooltip" href="#">
                    Visa projekt
                </div>
            </a>
        </div>
        <div class="labelDiv"><label>Luxury Brand
               </label></div>
        Beskrivande text som säger var och när vi utvecklat projektet. Det var igår, i parken. <hr />
    </div>
</div>`)
}

function theTeam() {
    $('#navPortfolio').attr('class', '');
    $('#navHome').attr('class', '');
    $('#navContact').attr('class', '');
    $('#teamref').attr('class', 'active');

    $('#teamref').attr('onclick', 'goResponsive()');



    $('#content-frame').empty().append(`
    <h1>Vilka är vi?<hr/></h1>
    <div id="theTeam-mother"> 
    

        <div id="leftSide">
        <div class="personContainerDiv"> 
           <div id="pontus" class="profileImgDiv">
                <a href="#" onClick="personalPagePontus()">
                    <img src="images/pontus.jpg" alt="">
                    <div class="darkimg"><p>Se mer</p></div>
                </a>
            </div>
            <div class="personText"> 
            <p class="personInfo">
                <a href="#" onClick="personalPagePontus()">Pontus Törn </a> <hr/>
                +4673123456 <br/>
                pontustorn@gmail.com</p>
            </div>           
        </div>

        <div class="personContainerDiv">
            <div id="jonte" class="profileImgDiv">
                <a href="#" onClick="personalPageJonte()">
                    <img src="images/jonte.jpg" alt="">
                    <div class="darkimg"><p>Se mer</p></div>
                </a>
            </div>
            <div class="personText"> 
            <p class="personInfo">
                <a class="namn" href="#" onClick="personalPageJonte()"> Jonathan Olsson</a> <hr/>
                +4673123456 <br/>
                pontustorn@gmail.com</p>
            </div>
        </div>

        <div class="personContainerDiv">
            <div id="johan" class="profileImgDiv">
                <a href="#" onClick="personalPageJohan()">
                    <img src="images/Johan.jpg" alt="">
                    <div class="darkimg"><p>Se mer</p></div>
                </a>
            </div>

            <div class="personText"> 
            <p class="personInfo">
                <a href="#" onClick="personalPageJohan()"> Johan Dalén</a><hr/>
                +4670689288 <br/>
                xjodal22@gmail.com</p>
            </div>
        </div>
        </div>

    <div id="rightSide">
    <div id ="aboutUs">
        <h2>Lite kort om oss</h2>
        <p> Padjelanta är det höga landet som är vackert och mjukt. Sarek är brutalt och alpint, bäst därför att
            balansera på gränsen. Padjelanta ligger i norra Lappland med Sarek i öster och Sulitelma i väster. Om vi
            börjar från norr så stiger Akka upp i ett fantastiskt majestät och gör skäl för namnet - Lapplands
            drottning.
        </p>
        <p> Ett flertal glaciärer letar sig ner från de höga massiven. Fallhöjden är stor, störst i Sverige
            faktiskt. Om man väljer den östliga grenen av Padjelantaleden känner man tyngden från Akkamassivets
            branter. Det är högt och imponerande, och med den stora forsens brus är detta sinnebilden av Lappland -
            höga bergen, brusande forsar och snötäckta bergssidor.
        </p>
        </div>
        <div id="headquartersDiv">
        <h2>Vårat högkvarter</h3>
        <div id ="headquarters-map"></div>
        </div>
        </div>
        
        
    </div>
    <div id="table-mother" class="col-12">

<div id="myModal" class="contributors-modal">

  
  <div class="contributors-modal-content">
    <table class="showMore">
    
    </table>
  </div>

</div>
    <h1> Just nu fördjupar vi oss inom </h1>
    <div class="table-container">
    
       <table id="jsTrends" class="trend-tables">
            <tr>              
                <h3>Trendande JavaScript-bibliotek på GitHub</h3>
            </tr>
            <tr class="trend-table-titles">
                <th>Namn</th>
                <th>Författare</th>
                <th>Stars</th>
                <th>Stars denna vecka</th>
                <th>Top contributors </th>
            </tr>
        </table>

    </div>

    <div class="table-container">
        <table id="cssTrends" class="trend-tables">
            <tr>
                <h3>Trendande CSS-bibliotek på GitHub</h3>
            </tr>
            <tr class="trend-table-titles">
                <th>Namn</th>
                <th>Författare</th>
                <th>Stars</th>
                <th>Stars denna vecka</th>
                <th>Top contributors </th>
            </tr>
        </table>
    </div>
    </div>
   
    
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsjoxCuIm512iS1klcnwE0b0kyoP7cwV8&callback=myMapp"></script>

    `)


    var jsTrends = [];
    var cssTrends = [];
    var moreJS = [];

    var modal = document.getElementById('myModal');

    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    $.getJSON('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly', function (jsResult) {
        jsTrends = jsResult.slice(0, 5);
        var i = 0;
        jsTrends.forEach((trend) => {

            var tableRow = $(
                `<tr class="trend-row${i}">
                     <td class="trend-name"><a href="${trend.url}" target="_blank">${trend.name}</a></td>
                     <td class="trend-author"><a href="https://github.com/${trend.author}" target="_blank">${trend.author}</a></td>
                     <td class="trend-stars">${trend.stars}</td>	
                     <td class="trend-stars-weekly">${trend.currentPeriodStars}</td>
                     <td class="trend-more"><a href="javascript:void(0);"><button class="visaBtn" onclick="getMoreJS(${i})"> Visa </button></a></td>					
                     </tr>`
            );
            $('#jsTrends').append(tableRow);
            i++;
        })


    })


    $.getJSON('https://github-trending-api.now.sh/repositories?language=css&since=weekly', function (cssResult) {
        cssTrends = cssResult.slice(0, 5);
        var i = 0;
        cssTrends.forEach((trend) => {
            var tableRow = $(
                `<tr class="trend-row${i}">
                  <td class="trend-name"><a href="${trend.url}" target="_blank">${trend.name}</a></td>
                  <td class="trend-author"><a href="https://github.com/${trend.author}" target="_blank">${trend.author}</a></td>
                  <td class="trend-stars">${trend.stars}</td>	
                  <td class="trend-stars-weekly">${trend.currentPeriodStars}</td>
                  <td class="trend-more"><a href="javascript:void(0);"><button class="visaBtn" onclick="getMoreCSS(${i})"> Visa </button></a></td>				
              </tr>`
            );
            $('#cssTrends').append(tableRow);
            i++;
        })
    })
}

function contactForm() {
    $('#navPortfolio').attr('class', '');
    $('#navHome').attr('class', '');
    $('#navContact').attr('class', 'active');
    $('#teamref').attr('class', '');

    $('#teamref').attr('onclick', 'theTeam(), goResponsive()');

    $('#content-frame').empty().append(`
    <h1 id="form-title">Kontakta oss<hr/></h1>
    <form>
               <div id="name" class="col-4 ">
                <label for="name-input">Namn</label>
                <input type="text" id="name-input" placeholder="Skriv ditt namn här...">
                <span class="hidden" id="err-msg-name" style="color:red">
                        Vänligen ange ett korrekt namn</span>
            </div>



<div id="email" class="col-4 ">
    <label for="email-input">Email</label>
    <input type="text" id="email-input" placeholder="Skriv din email här...">
    <span class="hidden" id="err-msg-email" style="color:red">
            Vänligen ange en korrekt Email</span>
</div>



<div id="tel" class="col-4 ">
    <label for="tel-input">Mobiltelefonnummer</label>
    <input type="text" id="tel-input" placeholder="Skriv ditt telefonnummer här...">
    <span class="hidden" id="err-msg-tel" style="color:red">
            Vänligen ange ett korrekt mobiltelefonnummer</span>
</div>


<div id="err-modal">
<div id="contact-modal-content">
<span id="close-contact-modal">&times;</span>
<p id="message"></p>
</div>
</div>


<div id="msg" class="col-3 row">
<label for="msg-input">Meddelande</label>
<textarea type="message" id="msg-input" placeholder="Skriv ditt meddelande här..."></textarea>
<span class="hidden" id="err-msg-msg" style="color:red"> Vänligen lämna ett meddelande</span>
<input type="button" value="Skicka" id="btn">

   
</form>

</div>


    <div id="map" class="col-5"></div>
</div>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsjoxCuIm512iS1klcnwE0b0kyoP7cwV8&callback=myMap"></script>
`
    )
}

function home() {
    $('#navPortfolio').attr('class', '');
    $('#navHome').attr('class', 'active');
    $('#navContact').attr('class', '');
    $('#teamref').attr('class', '');

    $('#teamref').attr('onclick', 'theTeam(), goResponsive()');


    setTimer();

    $('#content-frame').empty().append(`

    
    <div id="slideshow-container">
    <div id="slideshow">
        <div id="img-container">
               
            <a href="#" onclick="resizeImg()"> <img id="imgSlideshow" src="images/animal-attack.jpg"> </a>
            <div id="overlay-mother">
                <div id="prev" class="overlayControls">
                <a href="#" id="prevBtn" class="slideControls" onclick="previousImage()">&lt;</a>
            </div>
            <div id="play-pause" class="overlayControls">
                <a href="#" id="startCycle" class="slideControls" onclick="setTimer()">&#10074;&#10074;</a>
            </div>
            <div id="next" class="overlayControls">
                <a href="#" id="nextBtn" class="slideControls" onclick="nextImage()">&gt;</a>
            </div>
            </div>
           
        </div>
    </div> 
    </div>
    <div class="indexText">
    <h2>Välkommen till The Pack's Portfolio </h2>
    <p> <b>The Law for the Wolves</b>

    this is the law of the jungle, as old and as true as the sky,
    And the wolf that shall keep it may prosper, but the wolf that shall break it must die.	
    
    As the creeper that girdles the tree trunk, the law runneth forward and back;
    <b>For the strength of the pack is the wolf, and the strength of the wolf is the pack.</b>	
    
   
    </p> </div>`

    )
}

function personalPagePontus() {
    $('#teamref').attr('onclick', 'theTeam(), goResponsive()');

    $('#content-frame').empty().append(`    
    
    <div class="card">
    <img src="images/pontus.jpg" alt="Pontus" style="width:100%">
    
    <div>
        <h2>HTML</h2>
        <div id="progress" class="line stripesLoader" style="background-position:75%";
        ">
        <div class="rotateText">75%</div>
        </div>
        <h2>CSS</h2>
        <div id="progress" class="line stripesLoader" style="background-position:50%;
        ">
        <div class="rotateText">50%</div>
        </div>
        <h2>JavaScript</h2>
        <div id="progress" class="line stripesLoader" style="background-position:10%;
        ">
        <div class="rotateText">10%</div>
        </div>
        <h2>SQL</h2>
        <div id="progress" class="line stripesLoader" style="background-position:35%;
        ">
        <div class="rotateText">35%</div>
        </div>
    </div>


</div>
<div class="card2">

        <img src="images/aboutme.png" alt="Pontus" style="width:100%">
        <h1 class="name">Pontus Törn</h1>
    <p class="title">+46737445977</br>
    pontustorn@hotmail.com</br></p>
    <p class="school">Student på <a href="https://oru.se" target="_blank"> Örebro Universitet</a></p>
       
        <p class="infoText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit et est ac finibus. Suspendisse auctor sagittis placerat. Donec non nisi nunc. Praesent vulputate dolor at ante condimentum malesuada. Maecenas euismod tincidunt est, eu cursus ligula malesuada tincidunt. Morbi id blandit velit. Sed diam dui, egestas sit amet rutrum ut, suscipit in odio.

                Etiam vehicula venenatis tellus. Aliquam vitae venenatis tortor. Aenean non auctor tellus. Suspendisse vulputate ut mauris a dictum. Nulla at tincidunt urna. Integer non quam ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet erat eu tellus euismod semper at vel urna. Fusce leo erat, ultrices a interdum quis, semper a ante. Donec vitae lacinia velit. Quisque sed velit nec turpis rhoncus sollicitudin.
                
                </p>
 
    
    </div>
    <div class="card3">
            <img src="images/projects.png" alt="projects" style="width:100%">
            <div class="projectDiv">
                    <div class="projectImg">
                        <img src="images/project2.jpg" alt="">
                        <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                            <div class="tooltip" href="#">
                                Visa projekt
                            </div>
                        </a>
                    </div>
     
        
        </div>
        <div class="projectDiv">
                <div class="projectImg">
                    <img src="images/project3.jpg" alt="">
                    <a href="https://www.freepik.com/free-vector/technological-logo-design_1187936.htm" target="_blank">
                        <div class="tooltip" href="#">
                            Visa projekt
                        </div>
                    </a>
                </div>
 
    
    </div>
    <div class="projectDiv">
            <div class="projectImg">
                <img src="images/project1.jpg" alt="">
                <a href="https://www.freepik.com/free-vector/circular-wave-logo-template_843660.htm" target="_blank">
                    <div class="tooltip" href="#">
                        Visa projekt
                    </div>
                </a>
            </div>


</div>
<div class="projectDiv">
        <div class="projectImg">
            <img src="images/project2.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                <div class="tooltip" href="#">
                    Visa projekt
                </div>
            </a>
        </div>


</div>
</div>
<div class="card4"> 
        
        <img src="images/contactme.png" alt="contactme" style="width:100%" onclick="contactForm(), test()">
        <div class="contactDiv">
                <a href="https://www.facebook.com/pontus.torn.1" target="_blank" class="contactImg">
                    <img src="images/facebook.png" alt="">
                    
                    </a>
                </div>
 
    
    <div class="contactDiv">
            <a href="https://linkedin.com" target="_blank" class="contactImg">
                <img src="images/linkedin.png" alt="">
                
                </a>
            </div>



<div class="contactDiv">
        <a href="https://twitter.com" target="_blank" class="contactImg">
            <img src="images/twitter.png" alt="">
            
            </a>
        </div>




        <div class="contactDiv">
        <a href="https://github.com/pontustorn" target="_blank" class="contactImg">
            <img src="images/github.png" alt="">
            </a>
        </div>
    
          
    
    
    </div>
</div>`

    )
}

function personalPageJonte() {
    $('#teamref').attr('onclick', 'theTeam(), goResponsive()');

    $('#content-frame').empty().append(`    
    
    <div class="card">
    <img src="images/jonte.jpg" alt="Jonte" style="width:100%">
    
    <div>
        <h2>HTML</h2>
        <div id="progress" class="line stripesLoader" style="background-position:75%";
        ">
        <div class="rotateText">75%</div>
        </div>
        <h2>CSS</h2>
        <div id="progress" class="line stripesLoader" style="background-position:55%;
        ">
        <div class="rotateText">55%</div>
        </div>
        <h2>JavaScript</h2>
        <div id="progress" class="line stripesLoader" style="background-position:90%;
        ">
        <div class="rotateText">90%</div>
        </div>
        <h2>SQL</h2>
        <div id="progress" class="line stripesLoader" style="background-position:75%;
        ">
        <div class="rotateText">75%</div>
        </div>
    </div>


</div>
<div class="card2">

        <img src="images/aboutme.png" alt="Pontus" style="width:100%">
        <h1 class="name">Jonathan Olsson</h1>
        <p class="title">+46737445977</br>
        jonteolsson25@gmail.com</br></p>
        <p class="school">Student på <a href="https://oru.se" target="_blank"> Örebro Universitet</a></p>
       
        <p class="infoText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit et est ac finibus. Suspendisse auctor sagittis placerat. Donec non nisi nunc. Praesent vulputate dolor at ante condimentum malesuada. Maecenas euismod tincidunt est, eu cursus ligula malesuada tincidunt. Morbi id blandit velit. Sed diam dui, egestas sit amet rutrum ut, suscipit in odio.

                Etiam vehicula venenatis tellus. Aliquam vitae venenatis tortor. Aenean non auctor tellus. Suspendisse vulputate ut mauris a dictum. Nulla at tincidunt urna. Integer non quam ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet erat eu tellus euismod semper at vel urna. Fusce leo erat, ultrices a interdum quis, semper a ante. Donec vitae lacinia velit. Quisque sed velit nec turpis rhoncus sollicitudin.
                
                </p>
 
    
    </div>
    <div class="card3">
            <img src="images/projects.png" alt="projects" style="width:100%">
            <div class="projectDiv">
                    <div class="projectImg">
                        <img src="images/project2.jpg" alt="">
                        <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                            <div class="tooltip" href="#">
                                Visa projekt
                            </div>
                        </a>
                    </div>
     
        
        </div>
        <div class="projectDiv">
                <div class="projectImg">
                    <img src="images/project3.jpg" alt="">
                    <a href="https://www.freepik.com/free-vector/technological-logo-design_1187936.htm" target="_blank">
                        <div class="tooltip" href="#">
                            Visa projekt
                        </div>
                    </a>
                </div>
 
    
    </div>
    <div class="projectDiv">
            <div class="projectImg">
                <img src="images/project1.jpg" alt="">
                <a href="https://www.freepik.com/free-vector/circular-wave-logo-template_843660.htm" target="_blank">
                    <div class="tooltip" href="#">
                        Visa projekt
                    </div>
                </a>
            </div>


</div>
<div class="projectDiv">
        <div class="projectImg">
            <img src="images/project2.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                <div class="tooltip" href="#">
                    Visa projekt
                </div>
            </a>
        </div>


</div>
</div>
<div class="card4"> 
        
        <img src="images/contactme.png" alt="contactme" style="width:100%" onclick="contactForm(), test()">
        <div class="contactDiv">
                <a href="https://www.facebook.com/jonathan.olsson.503" target="_blank" class="contactImg">
                    <img src="images/facebook.png" alt="">
                    
                    </a>
                </div>
 
    
    <div class="contactDiv">
            <a href="https://www.linkedin.com/in/jonathan-olsson-451699136/" target="_blank" class="contactImg">
                <img src="images/linkedin.png" alt="">
                
                </a>
            </div>



<div class="contactDiv">
        <a href="https://twitter.com/jontemantheone" target="_blank" class="contactImg">
            <img src="images/twitter.png" alt="">
            
            </a>
        </div>




<div class="contactDiv">
        <a href="https://github.com/kebabmestarn" target="_blank" class="contactImg">
            <img src="images/github.png" alt="">
            </a>
        </div>
    
          
    
    
    </div>
</div>`

    )
}

function personalPageJohan() {
    $('#teamref').attr('onclick', 'theTeam(), goResponsive()');
    $('#content-frame').empty().append(`    
    
    <div class="card">
    <img src="images/Johan.jpg" alt="Johan" style="width:100%">
    
    <div>
        <h2>HTML</h2>
        <div id="progress" class="line stripesLoader" style="background-position: 50%;">
        <div class="rotateText">50%</div>
        </div>
        <h2>CSS</h2>
        <div id="progress" class="line stripesLoader" style="background-position:55%;">
        <div class="rotateText">55%</div>
        </div>
        <h2>JavaScript</h2>
        <div id="progress" class="line stripesLoader" style="background-position:40%;">
        <div class="rotateText">40%</div>
        </div>
        <h2>SQL</h2>
        <div id="progress" class="line stripesLoader" style="background-position:15%;">
        <div class="rotateText">15%</div>
        </div>
    </div>


</div>
<div class="card2">
        <img src="images/aboutme.png" alt="Johan" style="width:100%">
        <h1 class="name">Johan Dalén</h1>
        <p class="title">+46730689288</br>
        xjodal22@gmail.com</br></p>
        <p class="school">Student på <a href="https://oru.se" target="_blank"> Örebro Universitet</a></p>
       
        <p class="infoText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit et est ac finibus. Suspendisse auctor sagittis placerat. Donec non nisi nunc. Praesent vulputate dolor at ante condimentum malesuada. Maecenas euismod tincidunt est, eu cursus ligula malesuada tincidunt. Morbi id blandit velit. Sed diam dui, egestas sit amet rutrum ut, suscipit in odio.

                Etiam vehicula venenatis tellus. Aliquam vitae venenatis tortor. Aenean non auctor tellus. Suspendisse vulputate ut mauris a dictum. Nulla at tincidunt urna. Integer non quam ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet erat eu tellus euismod semper at vel urna. Fusce leo erat, ultrices a interdum quis, semper a ante. Donec vitae lacinia velit. Quisque sed velit nec turpis rhoncus sollicitudin.
                
                </p>
 
    
    </div>
    <div class="card3">
            <img src="images/projects.png" alt="projects" style="width:100%">
            <div class="projectDiv">
                    <div class="projectImg">
                        <img src="images/project2.jpg" alt="">
                        <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                            <div class="tooltip" href="#">
                                Visa projekt
                            </div>
                        </a>
                    </div>
     
        
        </div>
        <div class="projectDiv">
                <div class="projectImg">
                    <img src="images/project3.jpg" alt="">
                    <a href="https://www.freepik.com/free-vector/technological-logo-design_1187936.htm" target="_blank">
                        <div class="tooltip" href="#">
                            Visa projekt
                        </div>
                    </a>
                </div>
 
    
    </div>
    <div class="projectDiv">
            <div class="projectImg">
                <img src="images/project1.jpg" alt="">
                <a href="https://www.freepik.com/free-vector/circular-wave-logo-template_843660.htm" target="_blank">
                    <div class="tooltip" href="#">
                        Visa projekt
                    </div>
                </a>
            </div>


</div>
<div class="projectDiv">
        <div class="projectImg">
            <img src="images/project2.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                <div class="tooltip" href="#">
                    Visa projekt
                </div>
            </a>
        </div>


</div>
</div>
<div class="card4"> 
        
        <img src="images/contactme.png" alt="contactme" style="width:100%" onclick="contactForm(), test()">
        <div class="contactDiv">
                <a href="https://sv-se.facebook.com/" target="_blank" class="contactImg">
                    <img src="images/facebook.png" alt="">
                    
                    </a>
                </div>
 
    
    <div class="contactDiv">
            <a href="https://linkedin.com" target="_blank" class="contactImg">
                <img src="images/linkedin.png" alt="">
                
                </a>
            </div>



<div class="contactDiv">
        <a href="https://twitter.com/jdal_1" target="_blank" class="contactImg">
            <img src="images/twitter.png" alt="">
            
            </a>
        </div>




 <div class="contactDiv">
        <a href="https://github.com/jpvd13" target="_blank" class="contactImg">
            <img src="images/github.png" alt="">
            </a>
        </div>
    
          
    
    
    </div>
</div>`

    )
}
/***/ 

/* Ändrar menyn från knappar i en rad till "trestrecks-mobilnavknapp" */
function goResponsive() {
    var elem = document.getElementById("topnav");
    if (elem.className === "navbar") {
        elem.className += " responsive";
    } else {
        elem.className = "navbar";
    }

}

/* Lägger in google.map i "Vilka är vi?" */
function myMapp() {

    $('#headquarters-map').empty()
        var myLatLng = {lat: 46.291000, lng: -124.060417};

        var map = new google.maps.Map(document.getElementById('headquarters-map'), {
          zoom: 16,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Cape Disappointment'
        });
      }

/*Lägger in JSON data "Visa mer" Top 25 contributors i tal */
function getMoreJS(x) {

    $('#myModal').css('display', 'block');


    var tableData = [];
    for (var d = 0; d < 5; d++) {
        $(`#jsTrends .trend-row${d}`).each(function (index) {
            tableData.push({
                "author": $(this).find('td.trend-author').text(),
                "name": $(this).find('td.trend-name').text()
            })
        });
    }

    

    $('.showMore').empty().append(`
    <tr>
        <th class="contributors-header" colspan="2"> <h4> Top Contributors for <em>${tableData[x].name}</em> </h4></th>
        <th><span id="x-button" class="close-contributors-modal" onclick="closeContributors()">&times;</span></th> 
    </tr>
    <tr class="trend-table-titles">
    <th class="contributors-header"> GitHub profile </th>
    <th class="contributors-header"> Contributions </th>
    <th class="contributors-header">  </th>
  
</tr>`);


    $.getJSON(`https://api.github.com/repos/${tableData[x].author}/${tableData[x].name}/contributors?per_page=25`, function (showMoreJS) {
        moreJS = showMoreJS;
        var i = 0;
        moreJS.forEach((trend) => {

        
            var trMoreInfo = $(`<tr class="trend-row">
            <td> <a href="https://github.com/${moreJS[i].login}"> ${moreJS[i].login} </a></td>
            <td> ${moreJS[i].contributions} </td>
            <td> <a href="#"> <img src="${moreJS[i].avatar_url}"> </a> </td>
         </tr>`);

            
            $('.showMore').append(trMoreInfo);
            i++;
        })
    })
}

function getMoreCSS(x) {

    $('#myModal').css('display', 'block');


    var tableData = [];
    for (var d = 0; d < 5; d++) {
        $(`#cssTrends .trend-row${d}`).each(function (index) {
            tableData.push({
                "author": $(this).find('td.trend-author').text(),
                "name": $(this).find('td.trend-name').text()
            })
        });
    }

    $('.showMore').empty().append(`
    <tr>
        <th class="contributors-header" colspan="2"> <h4> Top Contributors for <em>${tableData[x].name}</em> </h4></th> 
        <th><span id="x-button" class="close-contributors-modal" onclick="closeContributors()">&times;</span></th> 
    </tr>
    <tr class="trend-table-titles">
    <th class="contributors-header"> GitHub profile </th>
    <th class="contributors-header"> Contributions </th>
    <th class="contributors-header">  </th>
  
</tr>`);
    
    $.getJSON(`https://api.github.com/repos/${tableData[x].author}/${tableData[x].name}/contributors?per_page=25`, function (showMoreJS) {
        moreJS = showMoreJS;
        var i = 0;
        
        moreJS.forEach((trend) => {

            var trMoreInfo = $(`<tr class="trend-row"> 
            <td> <a href="https://github.com/${moreJS[i].login}" target="_blank"> ${moreJS[i].login} </a></td>
            <td> ${moreJS[i].contributions} </td>
            <td> <a href="https://github.com/${moreJS[i].login}" target="_blank"> <img src="${moreJS[i].avatar_url}"> </a> </td>
         </tr>`);


            $('.showMore').append(trMoreInfo);
            i++;
        })
    })
}


function closeContributors(){
    
    var modal = document.getElementById('myModal');
    
        modal.style.display = "none";
    }

