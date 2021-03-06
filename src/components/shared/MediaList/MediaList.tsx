import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import MediaItem from "./MediaItem";
import MediaNav from "./MediaNav";
import "./MediaList.scss";

interface IProps {
    items: any[];
    pages?: {
        length: number;
        curr: number;
    };
    uploadMediaForStep?: any;
}

class MediaList extends Component<IProps> {
    render() {
        const { items, pages, uploadMediaForStep } = this.props;

        return (
            <div className="card-wrapper">
                <TransitionGroup className="card-group">
                    {items.map(item => (
                        <CSSTransition
                            classNames="scaleFade"
                            in={true}
                            appear={true}
                            timeout={1000}
                            key={item.id}
                        >
                            <MediaItem item={item} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>

                {pages && pages.length > 1 && (
                    <MediaNav
                        curr={pages.curr}
                        length={pages.length}
                        uploadPage={(step: number) =>
                            uploadMediaForStep && uploadMediaForStep(step)
                        }
                    />
                )}
            </div>
        );
    }
}

export default MediaList;
