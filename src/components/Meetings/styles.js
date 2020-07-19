const styles = (theme) => ({
  datePicker: {
    textAlign: "center",
    width: "133px",
    height: "36px",
    display: "block",
    marginTop: "20px",
    border: "none",
  },
  list: {
    boxShadow: "5px",
    width: "80%",
    backgroundColor: "white",
    margin: "2px auto",
  },
  listItem: {
    padding: "10px",
  },
  time: {
    marginRight: "10px",
    float: "left",
  },

  submit: {
    width: "100px",
    marginTop: theme.spacing.unit * 3,
  },

  errorText: {
    color: "red",
    textAlign: "center",
  },
});

export default styles;
