const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit,
  },
  textField: {
    width: "200px",
  },
  submit: {
    width: "100px",
    marginTop: theme.spacing.unit * 3,
  },
  textArea: {
    width: "400px",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});

export default styles;
