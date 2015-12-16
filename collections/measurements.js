Measurements = new Mongo.Collection("measurements");

if(Meteor.isServer){
  Meteor.publish("measurements", function () {
    return Measurements.find({}, {sort: {DateTime: -1, limit: 1}});
  })
}

//keep in mind: objects despite of declared as const are immutable
//const makes references not values constant
const dataSetsDefaults = {
  speed: {
    label: "Geschwindigkeit",
    yAxisID: "speed",
    borderColor: "#F44336",
    fill: false
  },
  frequency: {
    label: "Frequenz",
    yAxisID: "frequency",
    borderColor: "#2196F3",
    fill: false
  }
};

MeasurementSegment = Astro.Class({
  name: "MeasurementSegment",
  fields: {
    timeStamp: "date",
    data: {
      type: "object",
      default: () => {}
    }
  }
});

Measurement = Astro.Class({
  name: "Measurement",
  collection: Measurements,
  fields: {
    description: "string",
    startTime: "date",
    endTime: {
      type: "date",
      default: -1
    },
    segments: {
      type: 'array',
      nested: 'MeasurementSegment',
      default: () => []
    }
  },
  methods: {
    duration() {
      let {startTime, endTime} = this;
      //return only positive or zero durations
      /* if(startTime <= 0 || endTime < 0)
            return moment.duration(0); */
      return moment.duration(endTime - startTime);
    },
    isRunning() {
      return this.endTime < 0;
    },
    datasets() {
      //dataSets labeled with keys
      let prefixedDataSets = {};
      //iterate each segment in the measurement
      for(let {timeStamp, data} of this.segments){
        for(let dataKey in data){
          //only iterate through own properties (possibly prototypes?)
          if(!data.hasOwnProperty(dataKey))
            break;
          //create empty dataSet if it does not exist
          if(prefixedDataSets[dataKey] === undefined)
            prefixedDataSets[dataKey] = {data: []};
          //map properties from database schema to dataSet schema
          console.log(data[key]);
          prefixedDataSets[dataKey].data.push({x: timeStamp, y: data[dataKey]});
        }
      }
      let dataSets = [];
      for(let dataSetKey in prefixedDataSets){
        //only iterate through own properties (possibly prototypes?)
        if(!prefixedDataSets.hasOwnProperty(dataSetKey))
          break;
        let dataSetDefaults = dataSetsDefaults[dataSetKey];
        if(dataSetDefaults === undefined)
          dataSetDefaults = {};
        //assign default properties
        Object.assign(prefixedDataSets[dataSetKey], dataSetDefaults);
        //push the prefixed dataSet to the unprefixed dataSets
        dataSets.push(prefixedDataSets[dataSetKey]);
      }
      return dataSets;
    }
  }
});
