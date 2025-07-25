import registerImg from "../../assets/dl.beatsnoop 1.png";
import React, { useState } from "react";
import ProductBtn from "../ProductBtn/ProductBtn";
import styles from "./Register.module.css";
import AuthBtn from "../AuthBtn/AuthBtn";
import googleIcon from "../../assets/Icon-Google.png";
import { Field, Form, Formik } from "formik";
import { registerValidator } from "../../Validators/register";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth, GoogleProvider } from "../../Config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [visibleInputs, setVisibleInputs] = useState({
    name: false,
    email: false,
    password: false,
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const ShowInput = (field) => {
    setVisibleInputs((prev) => ({ ...prev, [field]: true }));
  };
  const handleSubmit = async (values) => {
    const { name, email, password } = values;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      navigate("/login");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("This email is already registered. Try logging in instead.");
            navigate("/login");
            break;
        }
      } else {
        console.log(error);
      }
    }
  };
  const handleLoginwithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
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
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidator}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form>
              <label onClick={() => ShowInput("name")}>
                Name
                <Field
                  type="text"
                  className={
                    visibleInputs.name ? styles.visible : styles.hidden
                  }
                  name="name"
                ></Field>
              </label>{" "}
              {errors.name && <small>{errors.name}</small>}
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
              <AuthBtn role={"Create Account"} />
            </Form>
          )}
        </Formik>

        <button
          className={styles.register__container_googleBtn}
          onClick={handleLoginwithGoogle}
        >
          {" "}
          <img src={googleIcon} alt="google icon" width={16} height={16} />
          Sign up with Google
        </button>
        <p className={styles.register__container_para}>
          Already have account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
