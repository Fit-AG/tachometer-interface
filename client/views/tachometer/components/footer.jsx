TachometerFooter = React.createClass({
  render() {
    return (
      <footer className="mdl-mini-footer" style={{padding: "0.75em"}}>
        <div className="mdl-mini-footer__left-section" style={{alignSelf: "center"}}>
          <div className="mdl-logo" style={{marginBottom: "0"}}>
            Fit-AG © 2015 Calvin Reibenspieß
          </div>
        </div>
        <div className="mdl-mini-footer__right-section" style={{display: "flex"}}>
          <button className="mdl-button mdl-js-button mdl-button--primary" style={{color: "rgb(158,158,158)", alignSelf: "center"}}>
            See the full stack »
          </button>
          <div className="mdl-layout--large-screen-only">
            <TachometerFooterStackIcon src="lejos-logo.svg"/>
            <TachometerFooterStackIcon src="react-logo.svg"/>
            <TachometerFooterStackIcon src="meteor-logo.svg"/>
          </div>
        </div>
      </footer>
    );
  }
});
