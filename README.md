# tachometer-interface
We are currently developing a modern web interface based on meteor, react and redux for our tachometer.
Visit the [*prototype* branch](https://github.com/Fit-AG/tachometer-interface/tree/prototype) to view our previous version.

## Project structure
The project will consist of three branches:

branch | description
------ | -----------
**master** | Will contain the last stable version - i.e. *works without side-effects or unfinished features*
**devel** | Contains the current, active development
**prototype** | Contains the abandoned prototype of this project

## The stack
- meteor.js 1.3 with es6 and npm modules
- [react](https://facebook.github.io/react/)
- [radium](http://stack.formidable.com/radium/) to manage the react inline styles
- [redux](http://redux.js.org/) for managing UI state, domain state will be handled *the meteor way*
- [mocha](http://mochajs.org/) for testing
- [react-mdl](https://github.com/tleunen/react-mdl) as a wrapper for material-design-lite, due the orginal library has some issues with react
- a charting library
We are currently in the decision between:
 - [chart.js](http://www.chartjs.org/) 2.0
 - [chartist.js](https://gionkunz.github.io/chartist-js/index.html)
 and
 - [plottable.js](http://plottablejs.org/)

## How it (*will*) work
A java backend will control the tachometer. The measurements will be inserted into our meteor mongodb collection. Meteor detects the changes via oplog tailing and updates the ui reactively.

Maybe we will use a socket (no websocket!) between meteor on the server side and the java backend to pass the data and other actions (such as commands from the web interface) between each other. Then meteor inserts the measurements into the collection. That would make the java backend much more independent and enables a clean way how the data would be handled.

## License
The project will be released under MIT.
