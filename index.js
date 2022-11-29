window.onload = function () {
	const labels = ['COURCE', 'QUESTION', 'EXAM'];
	const labels2 = ['11', '12', '13','14','15','16','17','18','19','20','21','22'];
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			data_JSON = JSON.parse(this.responseText).data_charts.map((item) => parseInt(item, 10));
			data_JSON2 = JSON.parse(this.responseText).data_charts2.map((item) => parseInt(item, 10));
			const data_2 = {
				labels: labels,
				datasets: [{
					backgroundColor: '#2ecc71',
					borderColor: 'rgb(89, 199, 255)',
					data: data_JSON,
					pointRadius: 0,
					fill: 1,
                
				}]
			};
			const config_2 = {
				type: 'bar',
				responsive: true,
				data: data_2,
				options: {
					plugins: {
						legend: {
							display: false
						}
					},
					scales: {
						xAxes: [{
							gridLines: {
								display: false
							}
						}],
						yAxes: [{
							gridLines: {
								display: false
							}
						}],
						y: {
							max: 200,
							min: 0,
							grace: '5%',
							grid: {
      							display: false
   							 }
						}, x: {
    						grid: {
     							 display: false
    							}
							  }
					}
				},
             
			};
	
			const myChart_2 = new Chart(
				document.getElementById('myChart_2'),
				config_2

			)
			
	
	const data_3 = {
		labels: labels2,
		datasets: [{
			backgroundColor: '#2ecc71',
			borderColor: '#2ecc71',
			data: data_JSON2,
			
                
		}]
	};
	const config_3 = {
		type: 'line',
		responsive: true,
		data: data_3,
		options: {
			plugins: {
				legend: {
					display: false
				}
			},
      scales: {
         xAxes: [{
            gridLines: {
                display:false
            }
        }],
         yAxes: [{
            gridLines: {
                display:false
            }   
        }],
				y: {
					max: 320,
					min: 50,
          grace: '5%',
				}, x: {
    						grid: {
     							 display: false
    							}
							  }
			}
		},
             
	};
	
	const myChart_3 = new Chart(
		document.getElementById('myChart_3'),
		config_3
	)
		}
	}
	request.open("GET", "data.json", true);
	request.send();
}