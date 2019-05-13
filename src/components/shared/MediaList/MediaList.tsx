import React, { Component } from 'react';

import MediaItem from './MediaItem';
import { MediaType } from '../../../models/MediaFactory';

interface IProps {
    items: any[],
    type: MediaType
}

class MediaList extends Component<IProps> {

    render() {
        const { items, type } = this.props;

        return (
            <div className="card-group">
                { items.map((item) => (
                    <MediaItem key={item.id}
                               item={item}
                               type={type} />
                    ))}
            </div>
        );
    }
}

export default MediaList;