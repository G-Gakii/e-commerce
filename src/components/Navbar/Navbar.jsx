import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import search from "../../assets/Vector.png";
import wishlist from "../../assets/Vector-2.png";
import cart from "../../assets/Cart1.png";
import currentUser from "../../assets/user-2.png";
import { getAuth } from "firebase/auth";
import AccountDropdown from "../AccountDropdown/AccountDropdown";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const user = getAuth().currentUser;
  const navigate = useNavigate();

  const showLinkFunction = () => {
    console.log(showLinks);

    setShowLinks((prev) => !prev);
  };
  const ShowDropdownfn = () => {
    setShowDropDown((prev) => !prev);
  };
  const wishItemCount = useSelector(
    (state) => state.wishlist?.item?.length || 0
  );
  const cartItemCount = useSelector(
    (state) => state.cart?.cartItem?.length || 0
  );

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

          <div
            className={styles.navbar__container__wishlist}
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            <img src={wishlist} alt="wishlist icon" />
            <small className={styles.navbar__container__wishlist__span}>
              {wishItemCount}
            </small>
          </div>
          <div
            className={styles.navbar__container__wishlist}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <img src={cart} alt="cart icon" />
            <small className={styles.navbar__container__wishlist__span}>
              {cartItemCount}
            </small>
          </div>

          <img
            onClick={ShowDropdownfn}
            className={`${user ? styles.displayUser : styles.hideUser} ${
              showDropDown ? styles.showDropDownMenu : ""
            }`}
            src={currentUser}
            alt="user icon"
          />
        </section>
        <AccountDropdown show={showDropDown} />
      </div>
      <hr />
    </>
  );
};

export default Navbar;
