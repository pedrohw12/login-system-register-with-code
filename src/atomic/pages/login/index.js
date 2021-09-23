import React, { useState } from "react";
import * as Yup from "yup";

//Material ui components
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// Utils
import getValidationErrors from "../../../utils/getValidationErrors";

// Context
import { useAuth } from "../../../contexts/authContext";

//Styles
import { useStyles } from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("E-mail obrigatório"),
  password: Yup.string()
    .required("Senha obrigatória")
    .min(6, "Digite uma senha de no mínimo 6 caracteres"),
});

const Login = () => {
  const classes = useStyles();
  const [errors, setErrors] = useState({ email: null, password: null });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors({ email: null, password: null });

    schema
      .validate(
        {
          email,
          password,
        },
        { abortEarly: false }
      )
      .then(() => {
        context.login(email, password);
      })
      .catch((err) => {
        setErrors(getValidationErrors(err));
      });
  }

  return (
    <Container maxWidth="sm">
      <Grid container className={classes.root} spacing={2}>
        <Grid item className={classes.gridItem}>
          <form method="POST" onSubmit={handleSubmit} className={classes.form}>
            <TextField
              fullWidth
              size="medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              className={classes.textField}
              label="E-mail"
              variant="outlined"
              type="email"
            />
            <span className={classes.errorMessage}>{errors.email}</span>
            <TextField
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              className={classes.textField}
              label="Senha"
              variant="outlined"
              type="password"
            />
            <span className={classes.errorMessage}>{errors.password}</span>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {context.loading ? "Carregando..." : "Login"}
            </Button>
          </form>
          <div className={classes.forgotPassword}>
            <a href="/signup">Cadastrar</a>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
