import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import BannerOne from "../../components/Banner/BannerOne/BannerOne";
import styles from "./Home.module.css";
import FlashSale from "../../components/FlashSale/FlashSale";
import Category from "../../components/Category/Category";
import BestSelling from "../../components/BestSelling/BestSelling";
import OurProducts from "../../components/OurProducts/OurProducts";
import BannerTwo from "../../components/Banner/BannerTwo/BannerTwo";
import Arrival from "../../components/Arrival/Arrival";
import HowItWork from "../../components/HowItWork/HowItWork";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <Sidebar />
        <hr className={styles.hero__hr} />
        <BannerOne />
      </div>
      <FlashSale />
      <Category />
      <BestSelling />
      <BannerTwo />
      <OurProducts />
      <Arrival />
      <HowItWork />
      <Footer />
    </>
  );
};

export default Home;
