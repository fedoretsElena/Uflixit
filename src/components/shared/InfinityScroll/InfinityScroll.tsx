import React, { Component } from "react";

interface IProps {
    listenUntil: boolean;
    endPageHappend: () => void;
    distanceToEndOfPage?: number;
}

class InfinityScroll extends Component<IProps> {
    render() {
        return <></>;
    }

    componentDidMount(): void {
        this.listenScroll();
    }

    listenScroll(): void {
        const { body } = document;
        const { listenUntil, endPageHappend } = this.props;
        const distanceToEndOfPage = this.props.distanceToEndOfPage || 300;

        window.addEventListener("scroll", () => {
            if (
                window.innerHeight + window.scrollY + distanceToEndOfPage >=
                    body.offsetHeight &&
                listenUntil
            ) {
                endPageHappend();
            }
        });
    }
}

export default InfinityScroll;
