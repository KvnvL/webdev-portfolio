import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './container.module.scss';

const Container = ({ className, size, children }) => {
    return (
        <div
            className={classNames(
                styles.container,
                {
                    [styles.large]: size === 'large',
                    [styles.medium]: size === 'medium',
                    [styles.small]: size === 'small'
                },
                className
            )}
        >
            {children}
        </div>
    );
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.oneOf(['large', 'medium', 'small'])
};

Container.defaultProps = {
    size: 'large'
};

export default Container;
