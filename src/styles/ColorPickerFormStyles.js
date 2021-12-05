import sizes from "./sizes";

const styles = {
  picker: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100% !important",
    marginTop: '2rem',
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    marginBottom: "2rem",
    fontSize: "2rem",
    [sizes.down('lg')]: {
      padding: '1.3rem',
      fontSize: '1.6rem',
    },
    [sizes.down('sm')]: {
      padding: '0.25rem',
      fontSize: '1rem',
    },
  },
  colorNameInput: {
    marginTop: '1.50rem',
    width: "100%",
    height: "70px"
  }
}

export default styles;