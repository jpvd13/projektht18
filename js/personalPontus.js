    function move() {
        var elem= [document.getElementById("myBarHtml"), document.getElementById("myBarCss"), document.getElementById("myBarJava"), document.getElementById("myBarSql")];
        var width = 1;
        var id = setInterval(frame, 0.1);
        function frame() {
            if (width >= 75) {
                clearInterval(id);
            }
            else {
                width++;
                elem.forEach(function(bar) {
                    $(bar).css("width", width + '%');
                });
            };
        }
    }
