Meteor.publish("measurements", function () {
  return Measurements.find({}, {sort: {DateTime: -1, limit: 1}});
});
