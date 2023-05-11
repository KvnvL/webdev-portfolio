import Container from "components/ui/container/container.component";
import React, { useRef, useEffect, useState, useCallback } from "react";
import useScrollPosition from "hooks/useScrollPosition";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "config/particles.json";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import styles from "./home-header.module.scss";

const HomeHeader = ({ handleNavigation }) => {
  const [spanText, setSpanText] = useState("Kevin van Loon");
  const ref = useRef(null);
  const { top } = useScrollPosition(ref);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight > window.innerWidth && window.innerWidth < 600) {
        setSpanText("Kevin");
      } else {
        setSpanText("Kevin van Loon");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if ((top <= window.innerHeight / 2 && top > 0) || !top) {
      handleNavigation("homeComp");
    }
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.homeHeader} id="homeComp" ref={ref} style={{height: window.innerHeight}}>
      <Particles
        className={styles.particles}
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      <Container className={styles.container}>
        <div className={styles.textWrapper}>
          <h1 data-aos="fade-right" data-aos-duration="750">
            Hi, I'm <span>{spanText}</span>, <br />
            web developer
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="400"
          >
            Your website is my passion!
          </h2>
        </div>
        <div
          className={styles.socialsWrapper}
          data-aos="fade-down"
          data-aos-duration="750"
          data-aos-delay="900"
          data-aos-offset="0"
        >
          <a href="https://instagram.com/kvn.vl/" target="_blank">
            <BsInstagram className={styles.icon} />
          </a>
          <a href="https://linkedin.com/in/kevin-vloon/" target="_blank">
            <FaLinkedinIn className={styles.icon} />
          </a>
          <span></span>
        </div>
      </Container>
    </div>
  );
};

export default HomeHeader;
