import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles"
import { withStyles } from "@material-ui/styles";

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
