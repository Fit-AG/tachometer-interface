TachometerView = React.createClass({
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <TachometerHeader/>
        <main className="mdl-layout__content" style={{backgroundColor: "#fafafa"}}>
            <TachometerStatusCard/>
          	<TachometerTimeline/>
        </main>
        <TachometerFooter/>
      </div>
      )
  }
});

ReactLayout.render(TachometerView, {technology: "react.js"});
