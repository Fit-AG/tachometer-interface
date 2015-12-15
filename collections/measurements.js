Measurements = new Mongo.Collection("measurements");

//keep in mind: objects despite of declared as const are immutable
//const makes references not values constant
const dataSetsDefaults = {};

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
    duration: {
      //returns a moment.duration()
      type: "object",
      transient: true
    },
    running: {
      //returns true when endTime is not set or less than 0
      type: "boolean",
      transient: true
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
      for(let {timeStamp, data} of segments){
        for(let dataKey in data){
          //only iterate through own properties (possibly prototypes?)
          if(!data.hasOwnProperty(dataKey))
            break;
          //create empty dataSet if it does not exist
          if(prefixedDataSets[dataKey] === undefined)
            prefixedDataSets[dataKey] = {data: []};
          //map properties from database schema to dataSet schema
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
