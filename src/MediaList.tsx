import React, { Component } from 'react';

import MediaItem from './MediaItem';

interface IProps {
    items: any[]
}

class MediaList extends Component<IProps> {

    render() {
        const { items } = this.props;

        return (
            <div className="card-group">
                { items.map((item) => (
                    <MediaItem key={item.id}
                               item={item} />
                    ))}
            </div>
        );
    }
}

export default MediaList;