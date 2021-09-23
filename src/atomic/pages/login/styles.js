import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginBottom: theme.spacing(1),
    display: "block",
    marginTop: theme.spacing(3),
    width: "100%",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: theme.spacing(3),
    maxWidth: "100%",
  },
  errorMessage: {
    color: "#f33",
    maxWidth: "70%",
  },
  forgotPassword: {
    marginTop: 15,
  },
}));
