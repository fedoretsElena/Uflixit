import React, { Component } from "react";

interface IProps {
    title: string;
    length: number;
}

class Title extends Component<IProps> {
    render() {
        const { title, length } = this.props;

        return (
            <h4 className="mt-5 mb-3">
                {title}
                <span className="ml-2 badge badge-primary">{length}</span>
            </h4>
        );
    }

    shouldComponentUpdate(
        nextProps: Readonly<IProps>,
        nextState: Readonly<{}>,
        nextContext: any
    ): boolean {
        const { title, length } = this.props;

        if (title !== nextProps.title || length !== nextProps.length) {
            return true;
        }

        return false;
    }
}

export default Title;
