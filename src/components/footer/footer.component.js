import React from "react";
import Container from "components/ui/container/container.component";
import Section from "components/ui/section/section.component";

import styles from "./footer.module.scss";

import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Section top="medium" bottom="medium">
        <Container className={styles.container}>
          <div className={styles.leftSide}>
            <img src="./images/logo-large.png" alt="" />
            <p>
              &copy; {new Date().getFullYear()} kevinvloon.nl | All rights
              reserved
            </p>
          </div>
          <div className={styles.socials}>
            <h4>Socials.</h4>
            <div className={styles.icons}>
              <a href="https://instagram.com/kvn.vl/" target="_blank">
                <FaInstagramSquare className={styles.icon} />
              </a>
              <a href="https://linkedin.com/in/kevin-vloon/" target="_blank">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
          <p className={styles.copyrightBottom}>
            &copy; {new Date().getFullYear()} kevinvloon.nl | All rights
            reserved
          </p>
        </Container>
      </Section>
    </div>
  );
};

export default Footer;
