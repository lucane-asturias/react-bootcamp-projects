import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    // backgroundColor: "blue",
    minHeight: "100vh",
    overflow: "auto", //to only show scrollbars if palettes don't fit on one screen.
    overflowX: "hidden",
    display: "flex",
    backgroundSize: "cover",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: '1.5rem', //gives some space on the bottom
    // marginBottom: "50px",
    backgroundColor: "#1e8feb",
    // background by SVGbackgrounds.com
    backgroundImage: `url(${bg})`

  },
  heading: {
    fontSize: '2rem',
    padding: '0.5rem',
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff3932+0,f2fc2f+25,30ff6a+50,28acff+75,ff00ff+100 */
    background: 'rgb(255,57,50)',
    background:
      '-moz-linear-gradient(left, rgba(255,57,50,1) 0%, rgba(242,252,47,1) 25%, rgba(48,255,106,1) 50%, rgba(40,172,255,1) 75%, rgba(255,0,255,1) 100%)',
    background:
      '-webkit-linear-gradient(left, rgba(255,57,50,1) 0%,rgba(242,252,47,1) 25%,rgba(48,255,106,1) 50%,rgba(40,172,255,1) 75%,rgba(255,0,255,1) 100%)',
    background:
      'linear-gradient(to right, rgba(255,57,50,1) 0%,rgba(242,252,47,1) 25%,rgba(48,255,106,1) 50%,rgba(40,172,255,1) 75%,rgba(255,0,255,1) 100%)',
    filter:
      'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ff3932", endColorstr="#ff00ae",GradientType=1 )',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [sizes.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  container: {
    width: "50%",
    display: "grid",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "60%"
    },
    [sizes.down("md")]: {
      width: "70%"
    },
    [sizes.down("xs")]: {
      width: "85%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    height: '3.5rem',
    margin: '2rem 0',
    borderRadius: '2px',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    alignItems: "center",
    [sizes.down('xl')]: {
      margin: '0.5rem 0',
    },
    [sizes.down('xs')]: {
      height: '4.5rem',
    },
  },
  linktag: {
    display: 'flex',
    height: "50%",
    '& a': {
      color: '#eee',
      textDecoration: "none",
      border: "none",
      padding: '0 3px',
      marginLeft: '2px',
      fontSize: '1.4rem',
      transition: "all 0.3s ease-in-out",
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        background:
      '-webkit-linear-gradient(left, rgba(255,57,50,.70) 0%,rgba(242,252,47,.70) 25%,rgba(48,255,106,.70) 50%,rgba(40,172,255,.70) 75%,rgba(255,0,255,.70) 100%)',
      // transition: "all 0.4s ease-in-out",
      },
      [sizes.down('sm')]: {
        marginTop: ".20rem",
        fontSize: '1.2rem',
      },

    },
  },
  palettes: {
    marginTop: ".65rem",
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  }
};