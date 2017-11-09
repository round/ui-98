import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Input.css';

class Input extends PureComponent {
    static defaultProps = {
        className: null,
    }
    static propTypes = {
        className: PropTypes.string,
    }
    render() {
        const { className, ...otherProps } = this.props;
        return (
            React.createElement('input', {
                className: cx({
                    'ui98-input': true,
                    [className]: className,
                }),
                ...otherProps,
            })
        );
    }
}

export default Input;