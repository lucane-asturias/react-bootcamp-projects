import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  root: {
    // backgroundColor: "blue",
    minHeight: "100vh",
    overflow: "auto", //to only show scrollbars if palettes don't fit on one screen.
    overflowX: "hidden",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: '1rem', //gives some space on the bottom
    // marginBottom: "50px",
    backgroundColor: "#1e8feb",
    // background by SVGbackgrounds.com
    backgroundImage: `url(${bg})`

  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "65%"
    },
    [sizes.down("md")]: {
      width: "85%"
    },
    [sizes.down("xs")]: {
      width: "90%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white"
    } 
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  }
};