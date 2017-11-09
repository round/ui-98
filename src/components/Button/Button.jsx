import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.css';

class Button extends PureComponent {
    static defaultProps = {
        className: null,
        children: null,
    }
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
    }
    render() {
        const { className, children, ...otherProps } = this.props;
        return (
            React.createElement('button', {
                children,
                className: cx({
                    'ui98-btn': true,
                    [className]: className,
                }),
                ...otherProps,
            })
        );
    }
}

export default Button;