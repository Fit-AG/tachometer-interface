const FONT_FAMILY = "'Roboto','Helvetica','Arial',sans-serif";

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
          unit: 'second',
          // displayFormat: "HH:mm:ss:SSS"
        },
        ticks: {
          fontFamily: FONT_FAMILY,
          fontSize: 14
        }
      }],
      yAxes: [{
        type: "linear",
        id:"speed",
        scaleLabel: {
          display: true,
          labelString: 'Geschwindigkeit',
          id:"speed",
          fontFamily: FONT_FAMILY
        },
        ticks: {
          fontFamily: FONT_FAMILY
        }
      },
      {
        type: "linear",
        id:"frequency",
        scaleLabel: {
          display: true,
          labelString: 'Frequenz',
          id:"frequency",
          fontFamily: FONT_FAMILY
        },
        ticks: {
          fontFamily: FONT_FAMILY
        }
      }]
    },
};
