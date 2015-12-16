TachometerTimeline = React.createClass({
  mixins: [ReactMeteorData],
  render(){
    return (
      <canvas ref="canvas" style={{margin: "1em"}}/>
    );
  },
  getMeteorData() {
    let self = this;
    let handle = Meteor.subscribe("measurements");

    let data = {
        isLoading: !handle.ready(),
        measurement: Measurements.findOne({})
    };

    return data;
  },
  componentWillUpdate(){
    if(this.data.measurement !== undefined)
      this.renderChart();
  },
  renderChart(){
    const options = {
      tooltips: {
         mode: 'label',
         backgroundColor: "#263238",
         titleFontSize: 15,
         caretSize: 10,
         callbacks: {
           title: function(dataPoint, dataSets){
             return moment(dataPoint[0].xLabel).format("HH:mm:ss:SSS A - ll");
           }
         }
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
							format: "HH:mm:ss:SSS",
							// unit: 'millisecond',
              // displayFormat: "HH:mm:ss:SSS"
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

    let canvas = this.refs.canvas;
    console.log(this.data);
    let object = {
        type: "line",
        data: {
          datasets: this.data.measurement.datasets()
        },
        options
    };
    console.log(object);
    let chart = new Chart(canvas, object);
  }
});
