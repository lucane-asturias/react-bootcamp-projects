export default {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    overflow: "auto", //to only show scrollbars if palettes don't fit on one screen.
    overflowX: "hidden",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
    // marginBottom: "50px"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
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
    gridGap: "5%"
  }
};