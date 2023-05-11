import Container from "components/ui/container/container.component";
import Section from "components/ui/section/section.component";
import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import portfolioItems from "config/portfolio-items.json";

import PortfolioItem from "components/ui/portfolio-item/portfolio-item.component";

import useScrollPosition from "hooks/useScrollPosition";
import styles from "./portfolio.module.scss";

const Portfolio = ({handleNavigation}) => {

  const ref = useRef(null);
  const { top } = useScrollPosition(ref);

  useEffect(() => {
    if (top <= (window.innerHeight / 2)) {
      handleNavigation('portfolioComp')
    }
  })

  return (
    <div className={styles.portfolio} id='portfolioComp' ref={ref}>
      <Section top="large" bottom="large">
        <Container className={styles.container}>
          <h2>Portfolio.</h2>
          <div className={styles.innerContainer}>
            {portfolioItems.map((item) => (
              <PortfolioItem item={item} key={item.project} className={styles.item} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Portfolio;
