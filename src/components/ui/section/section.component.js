import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './section.module.scss';

const Section = ({ className, top, bottom, children }) => {
    return (
        <div
            className={classNames(
                styles.section,
                {
                    [styles.topLarge]: top === 'large',
                    [styles.topMedium]: top === 'medium',
                    [styles.topSmall]: top === 'small',
                    [styles.topNone]: top === 'none',
                    [styles.bottomLarge]: bottom === 'large',
                    [styles.bottomMedium]: bottom === 'medium',
                    [styles.bottomSmall]: bottom === 'small',
                    [styles.bottomNone]: bottom === 'none'
                },
                className
            )}
        >
            {children}
        </div>
    );
};

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    top: PropTypes.oneOf(['large', 'medium', 'small', 'none']),
    bottom: PropTypes.oneOf(['large', 'medium', 'small', 'none'])
};

Section.defaultProps = {
    top: 'large',
    bottom: 'large'
};

export default Section;
