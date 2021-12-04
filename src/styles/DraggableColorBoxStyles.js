import sizes from "./sizes";

const styles = {
  root: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5.8px", //this fix the little whit'e space in the intersection of boxes
    // "&:hover svg": { //when you hover the svg of deleteIcon (this is bad!! bc is considering all svg's)
    "&:hover $deleteIcon": { //easiest way to style while hovering is selecting the class with $ sign
      color: "white",
      transform: "scale(1.5)"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "8"
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width:"100%",
    left: "0px",
    bottom: "0px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
}

export default styles;