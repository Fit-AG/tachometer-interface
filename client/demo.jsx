import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Color from "color";

class DemoComponent extends React.Component {

	render() {
		return (
			<div className="container">
				<span className="title">Title</span>
				<button style={{fontSize: "5rem"}} onClick={this.onClick}>Click me</button>
			</div>
			);
	}

	onClick() {
			alert("clicked!");
	}
}

// You can create your style objects dynamically or share them for
// every instance of the component.
const styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: Color('#0074d9').lighten(0.2).hexString()
    }
  }
};

DemoComponent = Radium(DemoComponent);

Meteor.startup(function () {
	ReactDOM.render(<DemoComponent />, document.getElementById("render-target"));
});
