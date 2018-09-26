function portfolio() {    
    $('#nav-home').css('background-color', '')    
    $('#nav-team').css('background-color', '');
    $('#nav-portfolio').css('background-color', 'rgba(0, 0, 0, 0.123)');
    $('#nav-contact').css('background-color', '');
    
    $('#teamref').attr('onclick', 'theTeam()');

    $('#iframe-div').empty().append(`
   <h2 style="text-align:center">V&aring;ra senaste projekt</h2>   
    <div class="projectDiv">
        <div class="projectImg" id="project1">
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
        <div class="projectImg" id="project2">
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
</div>`)}

function theTeam() {
    $('#nav-home').css('background-color', '')    
    $('#nav-team').css('background-color', 'rgba(0, 0, 0, 0.123)');
    $('#nav-portfolio').css('background-color', '');
    $('#nav-contact').css('background-color', '');

    $('#teamref').attr('onclick', '');

    $('#iframe-div').empty().append(`
    <div class="col-6"></div>
    <div class="col-12 viContainer">
        <h2>Vilka är vi?</h2>

        <div class="personContainerDiv">
            <div id="pontus" class="profileImgDiv">
                <a onClick="personalPagePontus()">
                    <img src="images/grass.jpg" alt="">
                </a>
            </div>
            <a onClick="personalPagePontus()">Pontus Törn</a>
        </div>

        <div class="personContainerDiv">
            <div id="jonte" class="profileImgDiv">
                <a onClick="personalPageJonte()">
                    <img src="images/jonte.jpg" alt="">
                </a>
            </div>
            <a onClick="personalPageJonte()"> Jonathan Olsson</a>
        </div>

        <div class="personContainerDiv">
            <div id="johan" class="profileImgDiv">
                <a onClick="personalPageJohan()">
                    <img src="images/slide5.jpg" alt="">
                </a>
            </div>

            <a onClick="personalPageJohan()"> Johan Dalén</a>

        </div>
    </div>

    <div class="col-6 textAboutUs">
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

        <table id="jsTrends" class="trend-tables">
            <tr>
                <h2> Vi fördjupar oss just nu inom: </h2>
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

            if(jsTrends && cssTrends.length == 0){
                
            
             $.getJSON('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly', function(jsResult) {                             
                 jsTrends = jsResult.slice(0,5);            
                
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
     
             $.getJSON('https://github-trending-api.now.sh/repositories?language=css&since=weekly', function(cssResult) {                 
                 cssTrends = cssResult.slice(0,5);

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
                     
                 
     })})}
    }   

function contactForm() {
    $('#nav-home').css('background-color', '')   
    $('#nav-team').css('background-color', '');
    $('#nav-portfolio').css('background-color', '');
    $('#nav-contact').css('background-color', 'rgba(0, 0, 0, 0.123)');

    $('#teamref').attr('onclick', 'theTeam()');

    $('#iframe-div').empty().append(`<div id="form">
    <h1 id="form-title">Kontakta oss</h1>
    <form>

        <div class="row">
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
        </div>
</div>


<div class="">
    <div id="msg" class="col-3 row">
        <label for="msg-input">Meddelande</label>
        <textarea type="message" id="msg-input" placeholder="Skriv ditt meddelande här..."></textarea>
       <span class="hidden" id="err-msg-msg" style="color:red">
                Vänligen lämna ett meddelande</span>

        <input type="button" value="Skicka" id="btn" onclick="test()">
    </div>

</div>


</form>
</div>`)}


function slideshow(){


    $('#nav-home').css('background-color', 'rgba(0, 0, 0, 0.123)')    
    $('#nav-team').css('background-color', '');
    $('#nav-portfolio').css('background-color', '');
    $('#nav-contact').css('background-color', '');

    $('#teamref').attr('onclick', 'theTeam()');

    $('#iframe-div').css('height', '800px');
    setTimer();

    $('#iframe-div').empty().append(`
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

)}


function personalPagePontus(){

    $('#iframe-div').empty().append(`<div class="card">
    <img src= "images/grass.jpg" alt="Pontus" style="width:100%">
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

)}


function personalPageJonte(){

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

)}

function personalPageJohan(){

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

)}