import moment from "moment";

class DemoComponent extends React.Component {
	render() {
		const date = moment().format("LLLL");
		return (
			<div>
				<h1>Hello world!</h1>
				<p>Current date: {date}</p>
			</div>
		);
	}
}

ReactLayout.render(DemoComponent);
