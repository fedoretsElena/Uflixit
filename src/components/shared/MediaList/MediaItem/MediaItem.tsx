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
        const {id, image, title} = this.props.item;

        return (
            <>
                <Link className="card mr-3 mb-3 border-0 rounded"
                      to={`/${this.props.type}s/${id}`}
                >
                    <div className="card__img-wrapper overflow-hidden">
                        <img src={image}
                             className="card__img card-img-top"
                             alt="poster"
                        />
                    </div>

                    <div className="card-body">
                        <h6 className="card-title text-dark text-center">{title}</h6>
                    </div>
                </Link>
            </>
        );
    }
}

export default MediaItem;