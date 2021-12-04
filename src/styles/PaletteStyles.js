import sizes from "./sizes";
export default {
  Palette: {
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%",
    display: "flex",
    flexWrap: "wrap"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "black",
    "& a": { //archor tag inside of goBack
      color: "white", //rember is dark box
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
    },
    [sizes.down("lg")]: {
      height: "33.3333%",
      width: "25%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
     [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    },
  }
};