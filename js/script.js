function portfolio() {
    $('#navPortfolio').attr('class', 'active');
    $('#navHome').attr('class', 'goResponsive()');
    $('#navContact').attr('class', '');
    $('#teamref').attr('class', '');

    $('#teamref').attr('onclick', 'theTeam(), goResponsive()');


    $('#iframe-div').empty().append(`
    <h1>Portfolio<hr/></h1>
    <div class="projectDiv">
            <div class="projectImg">
            <img name="project1" src="images/project1.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/circular-wave-logo-template_843660.htm" target="_blank">
                <div class="tooltip" href="#">
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
                <div class="tooltip" href="#">
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
                <div class="tooltip" href="#">
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

    $('#iframe-div').empty().append(`
    <h1>Vilka är vi?<hr/></h1>
        <div class="col-12">
        

        <div class="personContainerDiv">
            <div id="pontus" class="profileImgDiv">
                <a href="#" onClick="personalPagePontus()">
                    <img src="images/grass.jpg" alt="">
                </a>
            </div>
            <a href="#" onClick="personalPagePontus()">Pontus Törn</a>
        </div>

        <div class="personContainerDiv">
            <div id="jonte" class="profileImgDiv">
                <a href="#" onClick="personalPageJonte()">
                    <img src="images/jonte.jpg" alt="">
                </a>
            </div>
            <a href="#" onClick="personalPageJonte()"> Jonathan Olsson</a>
        </div>

        <div class="personContainerDiv">
            <div id="johan" class="profileImgDiv">
                <a href="#" onClick="personalPageJohan()">
                    <img src="images/slide5.jpg" alt="">
                </a>
            </div>

            <a href="#" onClick="personalPageJohan()"> Johan Dalén</a>

        </div>
    </div>

    <div class="textAboutUs col-5">
        <h2>Mellan Sarek och Padjelanta </h2>
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
    

    
    <div class="table-container col-12 row">
    <h2> Vi fördjupar oss just nu inom: </h2>
        <table id="jsTrends" class="trend-tables">
            <tr>              
                <h3>Trendande JavaScript-bibliotek</h3>
            </tr>
            <tr class="trend-table-titles">
                <th>Namn</th>
                <th>Författare</th>
                <th>Stars</th>
                <th>Stars denna vecka</th>
            </tr>
        </table>
    </div>
    <div class="table-container col-12 row">
        <table id="cssTrends" class="trend-tables">
            <tr>
                <h3>Trendande CSS-bibliotek</h3>
            </tr>
            <tr class="trend-table-titles">
                <th>Namn</th>
                <th>Författare</th>
                <th>Stars</th>
                <th>Stars denna vecka</th>
            </tr>
        </table>
    </div>`)
    var jsTrends = [];
    var cssTrends = [];

    if (jsTrends && cssTrends.length == 0) {


        $.getJSON('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly', function (jsResult) {
            jsTrends = jsResult.slice(0, 5);

            jsTrends.forEach((trend) => {
                var tableRow = $(
                    `<tr class="trend-row">
                     <td class="trend-name"><a href="${trend.url}" target="_blank"> ${trend.name}</a></td>
                     <td class="trend-author"><a href="https://github.com/${trend.author}" target="_blank">${trend.author}</a></td>
                     <td class="trend-stars">${trend.stars}</td>	
                     <td class="trend-stars-weekly">${trend.currentPeriodStars}</td>					
                     </tr>`
                );
                $('#jsTrends').append(tableRow);

            })
        })

        $.getJSON('https://github-trending-api.now.sh/repositories?language=css&since=weekly', function (cssResult) {
            cssTrends = cssResult.slice(0, 5);

            cssTrends.forEach((trend) => {
                var tableRow = $(
                    `<tr class="trend-row">
                  <td class="trend-name"><a href="${trend.url}" target="_blank"> ${trend.name}</a></td>
                  <td class="trend-author"><a href="https://github.com/${trend.author}" target="_blank">${trend.author}</a></td>
                  <td class="trend-stars">${trend.stars}</td>	
                  <td class="trend-stars-weekly">${trend.currentPeriodStars}</td>				
              </tr>`
                );
                $('#cssTrends').append(tableRow);

            })
        })
    }
}

function contactForm() {
    $('#navPortfolio').attr('class', '');
    $('#navHome').attr('class', '');
    $('#navContact').attr('class', 'active');
    $('#teamref').attr('class', '');

    $('#teamref').attr('onclick', 'theTeam(), goResponsive()');

    $('#iframe-div').empty().append(`<div id="form">
    <h1 id="form-title">Kontakta oss<hr/></h1>
 
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
<div id="modal-content">
<span id="close">&times;</span>
<p id="message"></p>
</div>
</div>


<div id="msg" class="col-3 row">
<label for="msg-input">Meddelande</label>
<textarea type="message" id="msg-input" placeholder="Skriv ditt meddelande här..."></textarea>
<span class="hidden" id="err-msg-msg" style="color:red">
    Vänligen lämna ett meddelande</span>

<input type="button" value="Skicka" id="btn">
</div>




<div id="map" class="col-6"></div>
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

    $('#iframe-div').empty().append(`

    <div class="indexText">
    <h2>Välkommen till The Pack's Portfolio </h2>
    <p> <b>The Law for the Wolves</b>

    this is the law of the jungle, as old and as true as the sky,
    And the wolf that shall keep it may prosper, but the wolf that shall break it must die.	
    
    As the creeper that girdles the tree trunk, the law runneth forward and back;
    <b>For the strength of the pack is the wolf, and the strength of the wolf is the pack.</b>	
    
   
    </p> </div>

    <div id="slideshow-container">
    <div id="slideshow">
        <div>
               
              <img name="slide" id="imgSlideshow" src="images/animal-attack.jpg">
              <label id="imgDesc">Scolding</label>
              <div id="button" class="col-12">
                        <a href="#" id="prevBtn" class="slideControls" onclick="previousImage()">&lt;</a>
                        <a href="#" id="startCycle" class="slideControls" onclick="setTimer()">&#x25B6;/&#10074;&#10074;</a>
                        <a href="#" id="nextBtn" class="slideControls" onclick="nextImage()">&gt;</a>
                      </div>
        </div>
    </div> 
    </div>   `

    )
}

function personalPagePontus() {

    $('#iframe-div').empty().append(`    <div class="card">
    <img src="images/pontus.jpg" alt="Pontus" style="width:100%">
    
    <div>
        <h2>HTML</h2>
        <div id="progress" class="line stripesLoader" style="background: position 0%;
        background-color:#88a7b6">
        <div class="rotate">75%</div>
        </div>
        <h2>CSS</h2>
        <div id="progress" class="line stripesLoader" style="background-position:100%;
        background-color:#88a7b6">
        <div class="rotate">100%</div>
        </div>
        <h2>JavaScript</h2>
        <div id="progress" class="line stripesLoader" style="background-position:70%;
        background-color:#88a7b6">
        <div class="rotate">70%</div>
        </div>
        <h2>SQL</h2>
        <div id="progress" class="line stripesLoader" style="background-position:100%;
        background-color:#88a7b6">
        <div class="rotate">100%</div>
        </div>
    </div>

</div>
<div class="card2">
        <img src="images/aboutme.jpg" alt="Pontus" style="width:100%">
        <h1>Pontus Törn</h1>
    <p class="title">Student</p>
    <p>Örebro Universitet</p>
       
        <p class="infoText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit et est ac finibus. Suspendisse auctor sagittis placerat. Donec non nisi nunc. Praesent vulputate dolor at ante condimentum malesuada. Maecenas euismod tincidunt est, eu cursus ligula malesuada tincidunt. Morbi id blandit velit. Sed diam dui, egestas sit amet rutrum ut, suscipit in odio.

                Etiam vehicula venenatis tellus. Aliquam vitae venenatis tortor. Aenean non auctor tellus. Suspendisse vulputate ut mauris a dictum. Nulla at tincidunt urna. Integer non quam ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet erat eu tellus euismod semper at vel urna. Fusce leo erat, ultrices a interdum quis, semper a ante. Donec vitae lacinia velit. Quisque sed velit nec turpis rhoncus sollicitudin.
                
                Maecenas ornare erat enim, convallis rhoncus metus porttitor sit amet. Morbi efficitur erat eget nulla condimentum maximus. Morbi in viverra leo, a placerat ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus egestas ante a mi venenatis vestibulum. Suspendisse potenti. Duis eget sapien tincidunt, ultricies diam vitae, volutpat nunc. Pellentesque id dignissim justo. Pellentesque vitae dui sit amet turpis gravida aliquet. Vestibulum sapien dui, dapibus euismod iaculis ac, dignissim nec sapien. In blandit, risus non ultricies hendrerit, eros est varius risus, at vulputate urna dolor quis massa. Maecenas dignissim tincidunt quam, in facilisis est dapibus sit amet. Mauris in lectus laoreet, pellentesque dui a, suscipit turpis.</p>
 
    
    </div>
    <div class="card2">
            <img src="images/projects.jpg" alt="Pontus" style="width:100%">
            <div class="projectDiv">
                    <div class="projectImg" id="project2">
                        <img name="project2" src="images/project2.jpg" alt="">
                        <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                            <div class="tooltip" href="#">
                                Visa projekt
                            </div>
                        </a>
                    </div>
     
        
        </div>
        <div class="projectDiv">
                <div class="projectImg" id="project2">
                    <img name="project2" src="images/project3.jpg" alt="">
                    <a href="https://www.freepik.com/free-vector/technological-logo-design_1187936.htm" target="_blank">
                        <div class="tooltip" href="#">
                            Visa projekt
                        </div>
                    </a>
                </div>
 
    
    </div>
    <div class="projectDiv">
            <div class="projectImg" id="project2">
                <img name="project2" src="images/project1.jpg" alt="">
                <a href="https://www.freepik.com/free-vector/circular-wave-logo-template_843660.htm" target="_blank">
                    <div class="tooltip" href="#">
                        Visa projekt
                    </div>
                </a>
            </div>


</div>
<div class="projectDiv">
        <div class="projectImg" id="project2">
            <img name="project2" src="images/project2.jpg" alt="">
            <a href="https://www.freepik.com/free-vector/logo-template-design_1063800.htm" target="_blank">
                <div class="tooltip" href="#">
                    Visa projekt
                </div>
            </a>
        </div>


</div>`

    )
}

function personalPageJonte() {

    $('#iframe-div').empty().append(`<div class="card">
    <img src= "images/jonte.jpg" alt="Jonte" style="width:100%">
    <h1>Pontus Törn</h1>
    <p class="title">Student</p>
    <p>Örebro Universitet</p>
    
    <div>
        <h2>HTML</h2>
        <div class="myProgress">
            <div id="myBarHtml"> </div>
        </div>
        <h2>CSS</h2>
        <div class="myProgress">
            <div id="myBarCss"> </div>
        </div>
        <h2>JavaScript</h2>
        <div class="myProgress">
            <div id="myBarJava"> </div>
        </div>
        <h2>SQL</h2>
        <div class="myProgress">
            <div id="myBarSql"> </div>
        </div>
    </div>
<button onclick="move()">Click me</button>
</div> `

    )
}

function personalPageJohan() {

    $('#iframe-div').empty().append(`<div class="card">
    <img src= "images/slide5.jpg" alt="Johan" style="width:100%">
    <h1>Pontus Törn</h1>
    <p class="title">Student</p>
    <p>Örebro Universitet</p>
    
    <div>
        <h2>HTML</h2>
        <div class="myProgress">
            <div id="myBarHtml"> </div>
        </div>
        <h2>CSS</h2>
        <div class="myProgress">
            <div id="myBarCss"> </div>
        </div>
        <h2>JavaScript</h2>
        <div class="myProgress">
            <div id="myBarJava"> </div>
        </div>
        <h2>SQL</h2>
        <div class="myProgress">
            <div id="myBarSql"> </div>
        </div>
    </div>
<button onclick="move()">Click me</button>
</div> `

    )
}


function headSlide() {

    setTimer();

    $('#head').empty().append(`
    <div id="slideshow-container">
    <div id="slideshow">
        <div>
                <div id="button" class="col-12">
                        <a href="#" id="prevBtn" class="slideControls" onclick="previousImage()">&lt;</a>
                        <a href="#" id="startCycle" class="slideControls" onclick="setTimer()">&#x25B6;/&#10074;&#10074;</a>
                        <a href="#" id="nextBtn" class="slideControls" onclick="nextImage()">&gt;</a>
                      </div>
              <img name="slide" id="imgSlideshow" src="images/slide1.jpg">
              <label id="imgDesc">En sn&ouml;ig skog</label>
             
        </div>
    </div> 
    </div>   `
    )
}

function goResponsive() {   
    var elem = document.getElementById("topnav");
    if (elem.className === "navbar") {
        elem.className += " responsive";
    } else {
        elem.className = "navbar";
    }
    console.log('bajs');
}

$( document ).ready(function() {
    
    
    $('#iframe-div').on('click', function(){      
        $('#topnav').attr('class', 'navbar');
    
    }
            
    )})
     
   
    
   
