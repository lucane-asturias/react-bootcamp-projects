//move logic into styles object
import chroma from "chroma-js";
import sizes from "./sizes";

// const styles = {
export default {
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
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => (props.showingFullPalette ? "20%" : "50%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => (props.showingFullPalette ? "10%" : "50%")
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => (props.showingFullPalette ? "5%" : "10%"),
    },
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