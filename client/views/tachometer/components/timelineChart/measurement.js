Measurement.extend({
    methods: {
      datasets() {
        //dataSets labeled with keys
        let prefixedDataSets = {};
        //iterate each segment in the measurement
        for(let {timeStamp, data} of this.segments){
          for(var dataKey in data){
            //only iterate through own properties (possibly prototypes?)
            if(!data.hasOwnProperty(dataKey))
              break;
            //create empty dataSet if it does not exist
            if(prefixedDataSets[dataKey] === undefined)
              prefixedDataSets[dataKey] = {data: []};
            //map properties from database schema to dataSet schema
            prefixedDataSets[dataKey].data.push({x: timeStamp.getTime(), y: data[dataKey]});
          }
        }
        let dataSets = [];
        for(let dataSetKey in prefixedDataSets){
          //only iterate through own properties (possibly prototypes?)
          if(!prefixedDataSets.hasOwnProperty(dataSetKey))
            break;
          let dataSetDefaults = TimelineChart.DATASETS_DEFAULTS[dataSetKey];
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
