import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Button } from "rsuite";

import "rsuite/dist/rsuite.min.css";
import * as yup from "yup";
import "./styles.css";
import axios from "axios";
import { history } from "../../history";

export function Register() {
  const handleSubmit = (values) => {
    axios.post("http://localhost:8080/v1/api/user", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("app-token", data);
        history.push("/login");
      }
    });
  };
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Container className="container">
        <h1>Register</h1>
          <Form className="login">
            <div className="login-form-group">
              <Field name="firstName" className="form-field" placeholder="Nome" />
              <ErrorMessage
                component="span"
                name="firstName"
                className="form-error"
              />
            </div>
            <div className="login-form-group">
              <Field name="lastName" className="form-field" placeholder="Sobrenome" />
              <ErrorMessage
                component="span"
                name="lastName"
                className="form-error"
              />
            </div>
            <div className="login-form-group">
              <Field name="email" className="form-field" placeholder="Email" />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>
            <div className="login-form-group">
              <Field
                name="password"
                className="form-field"
                placeholder="password"
                type="password"
              />
              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>
            <Button
              size="lg"
              appearance="primary"
              type="submit"
              className="btn"
            >
              Registrar
            </Button>
          </Form>
        </Container>
      </Formik>
    </>
  );
}
