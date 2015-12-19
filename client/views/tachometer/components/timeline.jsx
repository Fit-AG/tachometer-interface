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
    let canvas = this.refs.canvas;

    console.log(this.data);

    let object = {
        type: "line",
        data: {
          datasets: this.data.measurement.datasets()
        },
        options: TimelineChart.OPTIONS
    };
    console.log(object);
    let chart = new Chart(canvas, object);
  }
});
