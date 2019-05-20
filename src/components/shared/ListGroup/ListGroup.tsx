import React, { Component } from "react";

interface IProps {
    list: string[];
    title: string;
}

class ListGroup extends Component<IProps> {
    render() {
        const { title, list } = this.props;

        return (
            <>
                <h5>{title}</h5>
                <ul className="list-group list-group-flush">
                    {list.map((item: string, i: number) => (
                        <li key={i} className="list-group-item bg-transparent">
                            {item}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default ListGroup;
