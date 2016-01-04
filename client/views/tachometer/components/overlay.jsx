TachometerOverlay = React.createClass({
  render(){
    return (
      <div className="mdl-grid overlay" style={{width: "calc(100% - 0.85em)", height: "calc(100% - 49px - 64px - 1.25em)", padding: "0", position: "absolute"}}>
        <div className="mdl-cell mdl-cell--3-col">
          <div className="overlay__surface" style={{backgroundColor: "white", height: "10em"}}/>
        </div>
        <div className="mdl-cell mdl-cell--6-col" />
        <div className="mdl-cell mdl-cell--3-col" >
            <TachometerStatusCard/>
            <div style={{float: "right"}}>
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect overlay__surface"
                style={{backgroundColor: "rgb(216, 216, 216)", minWidth: "3em", minHeight: "3em", paddingLeft: "0", paddingRight: "0", margin: "0.5em"}}>
                  <i className="material-icons">remove</i>
              </button>
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect overlay__surface"
                style={{backgroundColor: "rgb(216, 216, 216)",  minWidth: "3em", minHeight: "3em", paddingLeft: "0", paddingRight: "0"}}>
                  <i className="material-icons">add</i>
              </button>
            </div>
        </div>
        <div className="mdl-cell mdl-cell--9-col mdl-cell--hide-phone" />
        <div className="mdl-cell mdl-cell--3-col mdl-cell--bottom">
          <TachometerNoteBox />
        </div>
      </div>
    );
  }
});
