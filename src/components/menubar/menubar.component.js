import React, { useEffect, useState } from "react";
import Container from "components/ui/container/container.component";
import Pages from "config/pages.json";
import classNames from "classnames";

import styles from "./menubar.module.scss";
import Section from "components/ui/section/section.component";

const Navbar = ({ active, clickNavigation }) => {
  const [menuToggleState, setMenuToggleState] = useState(false);
  const [orientation, setOrientation] = useState();

  const burgerToggle = () => {
    setMenuToggleState(!menuToggleState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > window.innerHeight) {
        setOrientation(true);
      } else {
        setOrientation(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navClicked = (link) => {
    setMenuToggleState(false);
    clickNavigation(link);
  };

  return (
    <Section className={styles.menubar} top="small" bottom="small">
      <Container className={styles.container}>
        <img src="./images/logo.svg" alt="Logo" onClick={scrollTop} />
        <ul className={styles.menuList}>
          {Pages.map((item) => (
            <li key={item.link} onClick={() => clickNavigation(item.linkTo)}>
              <a
                className={classNames(active === item.linkTo && styles.active)}
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={classNames(
            styles.hamburger,
            menuToggleState ? styles.open : ""
          )}
          onClick={burgerToggle}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
      {!orientation && (
        <Container
          className={classNames(
            styles.phoneNav,
            menuToggleState && styles.open
          )}
        >
          <ul className={styles.menuList}>
            {Pages.map((item) => (
              <li key={item.link} onClick={() => navClicked(item.linkTo)}>
                <a
                  className={classNames(
                    active === item.linkTo && styles.active
                  )}
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </Section>
  );
};

export default Navbar;
