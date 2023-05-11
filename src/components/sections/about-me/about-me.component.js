import Container from "components/ui/container/container.component";
import Section from "components/ui/section/section.component";
import React, { useRef, useEffect } from "react";
import classNames from "classnames";

import useScrollPosition from "hooks/useScrollPosition";

import styles from "./about-me.module.scss";

const AboutMe = ({handleNavigation}) => {
  const skills = [
    {
      name: "HTML",
      icon: "./images/skills/html.png",
    },
    {
      name: "CSS",
      icon: "./images/skills/css.png",
    },
    {
      name: "ReactJS",
      icon: "./images/skills/react.png",
    },
    {
      name: "Git",
      icon: "./images/skills/git.png",
    },
    {
      name: "Node.js",
      icon: "./images/skills/node.png",
    },
    {
      name: "Figma",
      icon: "./images/skills/figma.png",
    },
    {
      name: "Adobe XD",
      icon: "./images/skills/xd.png",
    },
    {
      name: "Photoshop",
      icon: "./images/skills/photoshop.png",
    },
  ];

  const renderLogos = () => {
    return skills.map((skill) => (
      <img key={skill.name} src={skill.icon} alt={skill.name} />
    ));
  };

  const ref = useRef(null);
  const { top } = useScrollPosition(ref);

  useEffect(() => {
    if (top <= (window.innerHeight / 2) && top > 0) {
      handleNavigation('aboutComp')
    }
  })

  return (
    <div className={styles.aboutMe} id='aboutComp' ref={ref}>
      <Section top="large" bottom="large">
        <Container className={styles.container}>
          <h2>About me.</h2>
          <div className={styles.innerContainer} data-aos="fade-right" data-aos-duration="750">
            <div className={classNames(styles.side, styles.leftSide)}>
              <div>
                <h3>Hi, I'm Kevin. Nice to meet you!</h3>
                <p>
                  I'm a 19 year old student front-end developer from the
                  Netherlands. About 3 years ago I started my IT journey as a
                  ICT & Media Design student at Fontys Hogeschool in Tilburg. I
                  was really interested in front-end development since the start
                  of this journey and I'm still learning more and more.
                </p>
              </div>
              <div className={styles.slider}>
                <div className={styles.skills}>{renderLogos()}</div>
                <div className={styles.skills}>{renderLogos()}</div>
              </div>
            </div>
            <img
              src="./images/kevin.jpg"
              alt="Photo Kevin"
              className={styles.rightSide}
            />
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutMe;
