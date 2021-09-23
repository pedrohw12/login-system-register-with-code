import { useState } from "react";
import * as Yup from "yup";

//Material ui components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Utils
import getValidationErrors from "../../../utils/getValidationErrors";

// Styles
import { useStyles } from "../../pages/signup/styles";

// Context
import { useAuth } from "../../../contexts/authContext";

const schema = Yup.object().shape({
  cpf: Yup.string().required(),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("E-mail obrigatório"),
  password: Yup.string()
    .required("Senha obrigatória")
    .min(6, "Digite uma senha de no mínimo 6 caracteres"),
});

const RegisterFlow = () => {
  const classes = useStyles();
  const [errors, setErrors] = useState({ email: null, password: null });
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const context = useAuth();

  function handleSubmitEmail(e) {
    e.preventDefault();
    setErrors({ email: null, password: null });
    setStep1(false);
    setStep2(true);

    // schema
    //   .validate(
    //     {
    //       email,
    //       password,
    //       cpf,
    //     },
    //     { abortEarly: false }
    //   )
    //   .then(() => {
    //     context.signUp(email, password);
    //   })
    //   .catch((err) => {
    //     setErrors(getValidationErrors(err));
    //   });
  }

  function handleSubmitCode(e) {
    e.preventDefault();
    setErrors({ email: null, password: null });
    setStep2(false);
    setStep3(true);

    // schema
    //   .validate(
    //     {
    //       email,
    //       password,
    //       cpf,
    //     },
    //     { abortEarly: false }
    //   )
    //   .then(() => {
    //     context.signUp(email, password);
    //   })
    //   .catch((err) => {
    //     setErrors(getValidationErrors(err));
    //   });
  }

  function handleRegister(e) {
    e.preventDefault();
    setErrors({ email: null, password: null });
    alert("Cadastro realizado com sucesso!");

    // schema
    //   .validate(
    //     {
    //       email,
    //       password,
    //       cpf,
    //     },
    //     { abortEarly: false }
    //   )
    //   .then(() => {
    //     context.signUp(email, password);
    //   })
    //   .catch((err) => {
    //     setErrors(getValidationErrors(err));
    //   });
  }
  return (
    <>
      {step1 && (
        <>
          <form
            method="POST"
            onSubmit={handleSubmitEmail}
            className={classes.form}
          >
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {context.loading ? "Carregando..." : "Enviar e-mail"}
            </Button>
          </form>
          <div className={classes.forgotPassword}>
            <a href="/">Já possuo uma conta</a>
          </div>
        </>
      )}
      {step2 && (
        <form
          method="POST"
          onSubmit={handleSubmitCode}
          className={classes.form}
        >
          <TextField
            fullWidth
            size="medium"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={classes.textField}
            label="Código"
            variant="outlined"
            type="text"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {context.loading ? "Carregando..." : "Enviar código"}
          </Button>
        </form>
      )}
      {step3 && (
        <form method="POST" onSubmit={handleRegister} className={classes.form}>
          <TextField
            fullWidth
            size="medium"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            error={errors.cpf}
            className={classes.textField}
            label="CPF"
            variant="outlined"
            type="text"
          />
          <span className={classes.errorMessage}>{errors.cpf}</span>

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
            {context.loading ? "Carregando..." : "Cadastrar"}
          </Button>
        </form>
      )}
    </>
  );
};

export default RegisterFlow;
