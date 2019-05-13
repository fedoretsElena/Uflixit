import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MediaItem.scss';
import { MediaType } from '../../../../models/MediaFactory';

interface IProps {
    item: any;
    type: MediaType
}

class MediaItem extends Component<IProps> {

    render() {
        const { id, image } = this.props.item;

        return (
            <Link className="card mr-3 mb-3 overflow-hidden border-0 rounded"
                  to={`/${this.props.type}s/${id}`}
            >
                <img src={image}
                     className="card__img card-img-top"
                     alt="poster"
                />
            </Link>
        );
    }
}

export default MediaItem;