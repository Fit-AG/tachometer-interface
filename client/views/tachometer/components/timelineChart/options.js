TimelineChart.OPTIONS = {
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
