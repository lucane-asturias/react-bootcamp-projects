import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },
  logo: {
    marginRight: "1.5rem",
    padding: "0 1rem",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    [sizes.down("sm")]: {
      display: "none"
    }
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    [sizes.down("md")]: {
      width: "260px"
    },
    [sizes.down("xs")]: {
      width: "200px"
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
}