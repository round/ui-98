import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _Textarea from "react-textarea-autosize";
import cx from 'classnames';

import './Textarea.css';

class Textarea extends PureComponent {
    static defaultProps = {
        className: null,
        autoSize: false,
    }
    static propTypes = {
        className: PropTypes.string,
        autoSize: PropTypes.bool,
    }
    render() {
        const { className, autoSize, ...otherProps } = this.props;
        const Element = autoSize ? _Textarea : 'textarea';
        return (
            React.createElement(Element, {
                className: cx({
                    'ui98-textarea': true,
                    [className]: className,
                }),
                ...otherProps,
            })
        );
    }
}

export default Textarea;