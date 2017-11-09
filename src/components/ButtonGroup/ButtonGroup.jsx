import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ButtonGroup.css';

class ButtonGroup extends PureComponent {
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
            React.createElement('section', {
                children,
                className: cx({
                    'ui98-btn-group': true,
                    [className]: className,
                }),
                ...otherProps,
            })
        );
    }
}

export default ButtonGroup;