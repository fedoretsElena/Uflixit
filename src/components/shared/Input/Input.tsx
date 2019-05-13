import React, { Component } from 'react';

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
        const { placeholder, active } = this.props;

        return (
            <div className={'input ' + (active ? 'input--active' : '')}
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
        );
    }

    componentDidUpdate(): void {
        this._inputRef.focus();
    }

    handleChange = (e: any) => {
        // const { value } = this._input;

        this.props.searchChanged(e.target.value);
    }
}

export default Input;