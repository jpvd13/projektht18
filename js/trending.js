/* $(document).ready(function(){

   var jsTrends = [];
   var cssTrends = [];  
   
    
		$.getJSON('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly', function(jsResult) {
            console.log(jsResult);            
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
            console.log(cssResult);
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

			
})})});  */