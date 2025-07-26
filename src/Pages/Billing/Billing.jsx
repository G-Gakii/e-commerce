import React from "react";
import styles from "./Billing.module.css";
import Navbar from "../../components/Navbar/Navbar";
import BillingForm from "../../components/BillingForm/BillingForm";
import Footer from "../../components/Footer/Footer";

const Billing = () => {
  return (
    <div className={styles.billing__container}>
      <Navbar />
      <p className={styles.billing__page}>
        Account / My Account / Product /View Cart / <span>CheckOut</span>{" "}
      </p>
      <BillingForm />
      <Footer />
    </div>
  );
};

export default Billing;
