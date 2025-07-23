import React from "react";
import styles from "./Footer.module.css";
import send from "../../assets/icon-send.png";
import qrCode from "../../assets/Qrcode 1.png";
import googleplay from "../../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import applestore from "../../assets/download-appstore.png";
import facebook from "../../assets/Vector-4.png";
import twitter from "../../assets/Vector-5.png";
import instagram from "./../../assets/Group.png";
import linkedin from "./../../assets/Vector-6.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footer__container}>
        <section>
          <h1>Exclusive</h1>
          <p className={styles.footer__container_fPara}>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className={styles.footer__container__email}>
            <input type="text" name="" id="" placeholder="Enter your email" />{" "}
            <img src={send} alt="send icon" />
          </div>
        </section>
        <section>
          <h2>Support</h2>
          <p>
            111 Bijoy sarani, Dhaka, DH 1515, <br /> Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </section>
        <section>
          <h2>Account</h2>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </section>
        <section>
          <h2>Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </section>
        <section>
          <h2>Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className={styles.footer__images}>
            <div>
              <img src={qrCode} alt="qrcode" />
            </div>
            <div className={styles.app}>
              <img src={googleplay} alt="google store" />
              <img src={applestore} alt="apple store" />
            </div>
          </div>
          <div className={styles.socials}>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </section>
      </div>
      <hr />
      <section className={styles.copyright}>
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </section>
    </>
  );
};

export default Footer;
