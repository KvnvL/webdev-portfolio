import classNames from "classnames";
import React from "react";

import styles from "./portfolio-item.module.scss";

const PortfolioItem = ({ item, className }) => {
  return (
    <a className={classNames(styles.portfolioItem, className)} href={item.link} target="_blank" data-aos="fade-right" data-aos-duration="750">
      <div className={styles.leftSide}>
        <div className={styles.text}>
          <h3>{item.project}</h3>
          <p>{item.description}</p>
          <p href={item.link} className={styles.fakeLink}>Check the website</p>
        </div>
        <div className={styles.tools}>
          {item.tools.map((tool) => (
            <p key={tool}>{tool}</p>
          ))}
        </div>
      </div>
      <img src={item.image} alt={item.project} />
    </a>
  );
};

export default PortfolioItem;
