import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MediaItem.scss';

interface IProps {
    item: any;
    type: 'movies' | 'tv-shows'
}

class MediaItem extends Component<IProps> {

    render() {
        const { id, poster } = this.props.item;

        return (
            <Link className="card mr-3 mb-3 overflow-hidden border-0 rounded"
                  to={`/${this.props.type}/${id}`}
            >
                <img src={poster}
                     className="card__img card-img-top"
                     alt="poster"
                />
            </Link>
        );
    }
}

export default MediaItem;