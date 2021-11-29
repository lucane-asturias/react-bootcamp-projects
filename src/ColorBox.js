import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

const styles = { //move logic into styles object
  ColorBox: {
    width: "20%",
    //dynamically deciing on the height of each color box, depending on certain props that's passed in
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    /*margin-top: -3.8px;  this was for wh'ite space. */
    // "&:hover button": { em vez de estilizar todos os botões usando classe dinâmica
    "&:hover $copyButton": {
      opacity: 1
      // transition: 'all 0.3s ease-in'
    }
  },
  copyText: {
    color: props => 
      chroma(props.background).luminance() >= 0.5 ? "black" : "white"
  },
  colorName: {
    color: props => 
      chroma(props.background).luminance() <= 0.17 ? "white" : "black"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.6)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.6)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0
  },
  boxContent: {
    "position": "absolute",
    "padding": "10px",
    "width":"100%",
    "left": "0px",
    "bottom": "0px",
    "color": "black",
    "letterSpacing": "1px",
    "textTransform": "uppercase",
    "fontSize": "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%", /* so it has something to scale */
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0,1)"
  },
  showOverLay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "20",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
  	"& h1": {
  		fontWeight: "400",
  		textShadow: "1px 2px black",
  		background: "rgba(255, 255, 255, 0.2)",
  		width: "100%",
  		textAlign: "center",
  		marginBottom: "0",
  		padding: "1rem",
  		textTransform: "uppercase"
  	},
  	"& p": {
  		fontSize: "2rem",
  		fontWeight: "100"
  	}
  },
   showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
};


class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true}, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, moreUrl, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    // console.log(chroma(background).luminance())
    //dark color will be set to true or false based off ofbackground luminance
    // const isDarkColor = chroma(background).luminance() <= 0.17;
    // const isLightColor = chroma(background).luminance() >= 0.5;
    // console.log(chroma(background).luminance())
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className={classes.ColorBox}>
          <div 
            style={{ background: background }} 
            className={`${classes.copyOverlay} ${copied && classes.showOverLay}`} />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
             <h1>copied!</h1>
             <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            {/*<button className={isLightColor ? "copy-button dark-text" : "copy-button"}>Copy</button>*/}
            <button className={classes.copyButton}>Copy</button>
          </div>
          {/* stopPropagation to not also fire the event from the parent!!! */}
          {showingFullPalette && ( //showLink will show only if it is true
          <Link 
            to={moreUrl} 
            onClick={e => e.stopPropagation()}
          >
            <span className={classes.seeMore}>More</span>
            {/*<span className={isLightColor ? "see-more dark-text" : "see-more"}>More</span>*/}
          </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
