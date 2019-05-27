import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

interface IProps {
    listenUntil: boolean;
    endMessage?: any;
    endPageHappend: () => void;
    distanceToEndOfPage?: number;
}

class InfinityScroll extends Component<IProps> {
    state = {
        isTheEndOfPage: false
    };

    render() {
        const endMessage = this.props.endMessage;
        const { isTheEndOfPage } = this.state;

        return <>{isTheEndOfPage && endMessage}</>;
    }

    componentDidMount(): void {
        this.listenScroll();
    }

    listenScroll(): void {
        const { body } = document;
        const { endPageHappend } = this.props;
        const distanceToEndOfPage = this.props.distanceToEndOfPage || 300;

        window.addEventListener("scroll", () => {
            const { listenUntil } = this.props;

            if (
                window.innerHeight + window.scrollY + distanceToEndOfPage >=
                    body.offsetHeight &&
                listenUntil
            ) {
                endPageHappend();
            } else if (!listenUntil) {
                this.setState({ isTheEndOfPage: true });
            }
        });
    }
}

export default InfinityScroll;
