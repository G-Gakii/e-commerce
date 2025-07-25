import React, { useState } from "react";
import styles from "./Login.module.css";
import registerImg from "../../assets/dl.beatsnoop 1.png";
import { Field, Form, Formik } from "formik";
import { registerValidator } from "../../Validators/register";
import AuthBtn from "../AuthBtn/AuthBtn";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { loginValidator } from "../../Validators/Login";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            alert("invalid credential");
            break;
        }
      } else {
        console.error(error);
      }
    }
  };
  const [visibleInputs, setVisibleInputs] = useState({
    email: false,
    password: false,
  });

  const ShowInput = (field) => {
    setVisibleInputs((prev) => ({ ...prev, [field]: true }));
  };
  return (
    <div className={styles.register__container}>
      <div>
        <img
          className={styles.register__container__img}
          src={registerImg}
          alt="a cart bags and a phone on sky blue background"
        />
      </div>
      <div className={styles.register__container__details}>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidator}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form>
              <label onClick={() => ShowInput("email")}>
                Email
                <Field
                  type="email"
                  className={
                    visibleInputs.email ? styles.visible : styles.hidden
                  }
                  name="email"
                ></Field>
              </label>
              {errors.email && <small>{errors.email}</small>}
              <label onClick={() => ShowInput("password")}>
                Password
                <Field
                  type="password"
                  className={
                    visibleInputs.password ? styles.visible : styles.hidden
                  }
                  name="password"
                ></Field>
              </label>
              {errors.password && <small>{errors.password}</small>}
              <div className={styles.login__container__btn}>
                <div>
                  <AuthBtn role={"Log in"} />
                </div>

                <p>
                  <a href="">Forgot Password</a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
