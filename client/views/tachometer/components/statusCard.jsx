TachometerStatusCard = React.createClass({
  render(){
    return (
      <div className="mdl-card" style={{position: "absolute", margin: "1em", right: "1em"}}>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">
            Status
          </h2>
        </div>
        <div className="mdl-card__supporting-text">
          This text might describe the photo and provide further information, such as where and
          when it was taken.
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
