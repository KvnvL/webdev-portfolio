import React, { useState, useEffect } from "react";
import Footer from "components/footer/footer.component";
import Navbar from "components/menubar/menubar.component";
import Pages from "config/pages.json";

import HomeHeader from "components/sections/home-header/home-header.component";
import AboutMe from "components/sections/about-me/about-me.component";
import Portfolio from "components/sections/portfolio/portfolio.component";
import Contact from "components/sections/contact/contact.component";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Body = () => {
  const [active, setActive] = useState(Pages.map((item) => item.linkTo)[0]);

  const handleNavigation = (item) => {
      document
        .getElementById(item)
        .scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
  };

  useEffect(() => {
    AOS.init({});
  });

  return (
    <div>
      <Navbar active={active} clickNavigation={handleNavigation} />
        <HomeHeader handleNavigation={(item) => setActive(item)} />
      <div className="innerPage">
        <AboutMe handleNavigation={(item) => setActive(item)} />
        <Portfolio handleNavigation={(item) => setActive(item)} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
