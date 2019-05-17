import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './MediaList.scss';
import MediaItem from './MediaItem';

interface IProps {
    items: any[]
}

class MediaList extends Component<IProps> {

    render() {
        const {items} = this.props;

        return (
            <TransitionGroup className="card-group">
                {items.map((item) =>
                    <CSSTransition classNames='scaleFade'
                                   in={true}
                                   appear={true}
                                   timeout={1000}
                                   key={item.id}
                    >
                        <MediaItem item={item} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        );
    }
}

export default MediaList;