EditorCard = React.createClass({
  render(){
    return (
      <div className="overlay__surface" style={{backgroundColor: "white", height: "10em"}}>
        <span style={{
            display: "inline-block",
            margin: "1rem 1rem 0rem 1rem",
            fontSize: "1.5rem",
            color: "rgba(0,0,0,.26)",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            textTransform: "uppercase"
          }}>{this.props.title}</span>
        <textarea style={{
            margin: "0 1rem 1rem 1rem",
            width: "calc(100% - 1.75em)",
            height: "calc(100% - 2.9em)",
            resize: "none",
            border: "none",
            outline: "none",
            color: "rgba(0,0,0,.87)",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: "1.25rem",
            overflowY: "hidden"
          }} placeholder={this.props.placeholder} onKeyDown={this.props.onKeyDown} defaultValue={this.props.text}/>
      </div>
    );
  }
});
