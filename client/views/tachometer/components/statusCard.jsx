TachometerStatusCard = React.createClass({
  render(){
    return (
      <div className="mdl-card overlay__surface" style={{width: "100%", height: "100%"}}>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">
            Status
          </h2>
        </div>
        <div className="mdl-card__supporting-text" style={{fontSize: "0.95em"}}>
          <b>NXT </b>
          <span style={{color: "#4CAF50", textTransform: "uppercase"}}>Connected</span>
          <br/>
          <b>Backend </b>
          <span style={{color: "#4CAF50", textTransform: "uppercase"}}>Connected</span>
        </div>
        <div className="mdl-card__actions">
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
            Button
          </button>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" style={{marginLeft: "0.5em"}}>
            Button
          </button>
        </div>
      </div>
    );
  }
});
