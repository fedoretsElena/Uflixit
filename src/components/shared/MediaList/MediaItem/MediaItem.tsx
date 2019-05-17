import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MediaItem.scss';
import BaseMedia from '../../../../models/BaseMedia';

interface IProps {
    item: BaseMedia;
}

class MediaItem extends Component<IProps> {

    render() {
        const {id, image, title, type} = this.props.item;

        return (
            <Link className="card mr-3 mb-3 border-0 rounded"
                  to={`/${type}s/${id}`}
            >
                <div className="card__img-wrapper overflow-hidden">
                    <img src={image}
                         className="card__img card-img-top"
                         alt="poster"
                    />
                </div>

                {title &&
                    <div className="card-body">
                        <h6 className="card-title text-dark text-center">{title}</h6>
                    </div>
                }
            </Link>
        );
    }
}

export default MediaItem;