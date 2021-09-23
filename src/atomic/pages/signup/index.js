//Material ui components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//Styles
import { useStyles } from "./styles";
import RegisterFlow from "../../organisms/register-flow";

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container className={classes.root} spacing={2}>
        <Grid item className={classes.gridItem}>
          <RegisterFlow />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
