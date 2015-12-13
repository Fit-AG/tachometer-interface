TachometerTimeline = React.createClass({
  render(){
    return (
      <canvas ref="canvas" style={{margin: "1em"}}/>
    );
  },
  componentDidMount(){
    let canvas = this.refs.canvas;

    let data = {datasets: [{
        label: "Geschwindigkeit",
        yAxisID: "speed",
        borderColor: "#F44336",
        data: [{
          x: 123456,
          y: 10
        }, {
          x: 434479,
          y: 17
        },
        {
          x: 825437,
          y: 18
        },
        {
          x: 1624739,
          y: 12
        }],
        fill: false
      },{
        label: "Frequenz",
        yAxisID: "frequency",
        borderColor: "#2196F3",
        data: [{
          x: 123456,
          y: 2
        }, {
          x: 434479,
          y: 6
        },
        {
          x: 825437,
          y: 3
        },
        {
          x: 1624739,
          y: 0.7
        }],
        fill: false
      }]
    };

    const options = {
      tooltips: {
         mode: 'label'
      },
      elements: {
        line: {
          tension: 0
        }
      },
      scales: {
					xAxes: [{
						type: "time",
						time: {
							// format: "HH:mm:ss:SSS",
              displayFormat: "HH:mm:ss"
						},
						scaleLabel: {
							display: true,
						},
					}],
					yAxes: [{
						type: "linear",
						id:"speed",
						scaleLabel: {
							display: true,
							labelString: 'Geschwindigkeit',
							id:"speed"
						}
					},
          {
            type: "linear",
            id:"frequency",
            scaleLabel: {
              display: true,
              labelString: 'Frequenz',
              id:"frequency"
            }
          }]
				},
    };

    let chart = new Chart(canvas, {
      type: "line",
      data,
      options
    });
  }
});
