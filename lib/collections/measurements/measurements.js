Measurements = new Mongo.Collection("measurements");

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
    }
  }
});
