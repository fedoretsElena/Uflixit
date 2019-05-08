import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    item: any;
}

class MediaItem extends Component<IProps> {

    render() {
        const { id, poster } = this.props.item;

        return (
            <Link className="card mr-3 mb-3"
                  to={`/${id}`}
            >
                <img src={poster}
                     className="card-img-top"
                     alt="poster"
                />
            </Link>
        );
    }
}

export default MediaItem;