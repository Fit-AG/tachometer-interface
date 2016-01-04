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
