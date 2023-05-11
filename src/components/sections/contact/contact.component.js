import Container from "components/ui/container/container.component";
import Section from "components/ui/section/section.component";
import React from "react";

import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Section top="large" bottom="large">
        <Container className={styles.container}>
          <div data-aos="fade-right" data-aos-duration="750">
            <h2>Interested in working together?</h2>
            <a className={styles.button} href="mailto:contact@kevinvloon.nl">
              <h2>Contact Me</h2>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
