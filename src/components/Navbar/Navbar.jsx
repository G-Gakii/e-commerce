import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import search from "../../assets/Vector.png";
import wishlist from "../../assets/Vector-2.png";
import cart from "../../assets/Cart1.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const showLinkFunction = () => {
    console.log(showLinks);

    setShowLinks((prev) => !prev);
  };

  return (
    <>
      <div className={styles.navbar__container}>
        <section className={styles.navbar__title}>
          <h1>Exclusive</h1>
        </section>
        <section
          className={`${styles.navbar__links} ${
            showLinks ? styles.showLink : styles.hideLinks
          } `}
        >
          <svg
            onClick={showLinkFunction}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className={`bi bi-list ${styles.navbar__links__menu}`}
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <ul className={`${showLinks ? styles.show : styles.hide}`}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                to={"/register"}
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </section>
        <section className={styles.navbar__search}>
          <span>
            <p>what are you looking for ?</p>
            <img src={search} alt="search icon" width={12} height={12} />{" "}
          </span>

          <img src={wishlist} alt="wishlist icon" />
          <img src={cart} alt="cart icon" />
        </section>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
