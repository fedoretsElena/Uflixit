import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Input.scss';

interface IProps {
    value: string,
    lostFocus: any,
    searchChanged: any,
    active: boolean,
    placeholder: string
}

class Input extends Component<IProps> {
    _inputRef: any;

    render() {
        const {placeholder, active} = this.props;

        return (
            <CSSTransition timeout={300}
                           in={active}
                           classNames='grow'
            >
                <div className='input'
                >
                    <input type="text"
                           className='input__el w-100'
                           value={this.props.value}
                           ref={input => this._inputRef = input}
                           placeholder={placeholder}
                           onBlur={this.props.lostFocus}
                           onChange={this.handleChange}
                    />
                </div>
            </CSSTransition>
        );
    }

    componentDidUpdate(): void {
        this._inputRef.focus();
    }

    handleChange = (e: any) => {
        this.props.searchChanged(e.target.value);
    }
}

export default Input;