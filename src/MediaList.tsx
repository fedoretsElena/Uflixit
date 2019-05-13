import React, { Component } from 'react';

import MediaItem from './MediaItem';

interface IProps {
    items: any[],
    type: 'movies' | 'tv-shows'
}

class MediaList extends Component<IProps> {

    render() {
        const { items, type } = this.props;

        return (
            <div className="card-group">
                { items.map((item) => (
                    <MediaItem key={item.id}
                               item={item}
                               type={type}/>
                    ))}
            </div>
        );
    }
}

export default MediaList;