

		jQuery(window).load( function(){
            

			var globalGraphSettings = {animation : Modernizr.canvas};

			function showBarChart(){
				var ctx = document.getElementById("barChartCanvas").getContext("2d");
				// new Chart(ctx).Bar(barChartData,globalGraphSettings);
				var data = {
				labels : ["2009","2010","2011","2012"],
                datasets: [
    					{
                            label: "Total Births",
    						backgroundColor : "rgba(125, 168, 137,0.5)",
    						borderColor : "rgba(125, 168, 137,1)",
    						data : [35,91,114,131]
    					},
    					{
                            label: "Natural Births",
    						backgroundColor : "rgba(220,220,220,0.5)",
    						borderColor : "rgba(220,220,220,1)",
    						data : [34,86,109,120]
    					}
    				],
                };
                
                var myBarChart = new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: {
                        }
                    });
			}

			$('#barChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showBarChart,300); },{accX: 0, accY: -155},'easeInCubic');

		});