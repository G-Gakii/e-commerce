import React from "react";
import { Field, Form, Formik } from "formik";
import styles from "./BillingForm.module.css";
import { billingDetailsValidator } from "../../Validators/Billing";
import { useSelector } from "react-redux";
import ProductBtn from "../ProductBtn/ProductBtn";
import WhiteButton from "../WhiteButton/WhiteButton";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase";

const BillingForm = () => {
  const initialValues = {
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
  };
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart?.cartItem);
  const totalCost = cartItem.reduce((acc, item) => {
    return acc + item.price.substring(1) * item.quantity;
  }, 0);
  const saveBillingDetails = async (values) => {
    const user = getAuth().currentUser;
    if (!user) {
      alert("kindly login to access");
      navigate("/login");
      return;
    } else {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { billingInfo: values }, { merge: true });
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={billingDetailsValidator}
        onSubmit={saveBillingDetails}
      >
        {({ errors }) => (
          <Form className={styles.billing__form__container}>
            <div className={styles.billingform__container}>
              <h1>Billing details</h1>
              <label htmlFor="">
                <span>
                  {" "}
                  First Name <small>*</small>
                </span>
                <Field name="firstName"></Field>
              </label>
              {errors.firstName && <small>{errors.firstName}</small>}
              <label htmlFor="">
                <span>
                  {" "}
                  Company Name <small>*</small>
                </span>
                <Field name="companyName"></Field>
              </label>
              {errors.companyName && <small>{errors.companyName}</small>}
              <label htmlFor="">
                <span>
                  {" "}
                  Street Address <small>*</small>
                </span>
                <Field name="streetAddress"></Field>
              </label>
              {errors.streetAddress && <small>{errors.streetAddress}</small>}
              <label htmlFor="">
                <span> Apartment,floor etc(optional)</span>
                <Field name="apartment"></Field>
              </label>
              {errors.apartment && <small>{errors.apartment}</small>}
              <label htmlFor="">
                <span>
                  {" "}
                  Town/City <small>*</small>
                </span>
                <Field name="city"></Field>
              </label>
              {errors.city && <small>{errors.city}</small>}
              <label htmlFor="">
                <span>
                  {" "}
                  Phone Number <small>*</small>
                </span>
                <Field name="phoneNumber"></Field>
              </label>
              {errors.phoneNumber && <small>{errors.phoneNumber}</small>}

              <label htmlFor="">
                <span>
                  {" "}
                  Email Address <small>*</small>
                </span>
                <Field name="emailAddress"></Field>
              </label>
              {errors.emailAddress && <small>{errors.emailAddress}</small>}
              <label className={styles.input__checkbox}>
                <input type="checkbox" name="" id="" checked />
                Save this information for faster check-out next time
              </label>
            </div>
            <div className={styles.billing__form__payment__method}>
              {cartItem.map((item, index) => (
                <div className={styles.billing__item}>
                  <p className={styles.billing__item__para}>
                    {" "}
                    <img src={item.image} alt="" width={32} height={32} />{" "}
                    {item.name}
                  </p>
                  <p>${item.quantity * item.price.substring(1)}</p>
                </div>
              ))}
              <div
                className={`${styles.billing__item} ${styles.billing__item__undeline}`}
              >
                <span>Subtotal:</span>
                <span>${totalCost}</span>
              </div>
              <div
                className={`${styles.billing__item} ${styles.billing__item__undeline}`}
              >
                <span>Shipping free:</span>
                <span>Free</span>
              </div>
              <div className={styles.billing__item}>
                <span>Total:</span>
                <span>${totalCost}</span>
              </div>
              <div className="billing__item">
                <label htmlFor="bank">
                  <input type="radio" name="payment" id="" />
                  Bank
                </label>
              </div>
              <div className="billing__item">
                <label htmlFor="cash">
                  <input type="radio" name="payment" checked id="" />
                  Cash on delivery
                </label>
              </div>
              <div className={styles.billing__item}>
                <WhiteButton ftn={"Coupon Code"} />
                <div className={styles.billing__btn}>
                  <ProductBtn btnFunc={"Apply Coupon"} />
                </div>
              </div>
              <div className={styles.billing__item}>
                <div className={styles.billing__btn}>
                  <ProductBtn btnFunc={"Place order"} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BillingForm;
