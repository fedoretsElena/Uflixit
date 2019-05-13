import React, { Component } from 'react';
import axios from 'axios';

import ApiConfig from '../../core/ApiConfig';
import { MediaType } from '../../models/MediaFactory';

interface IProps {
    location: any
}

class SearchResults extends Component<IProps> {

    render() {

        return (
            <section>tesst</section>
        )
    }

    componentDidMount(): void {
        const { location } = this.props;
        const params = new URLSearchParams(location.search);

        this.search(params);
    }

    private search(params: any, // URLSearchParams
                   type: MediaType = MediaType.TVShow): void {

        axios.get(ApiConfig.getMediaSearchPath.replace('{type}', `${type}s`), { params })
            .then((res: any) => console.log(res));
    }
}

export default SearchResults;