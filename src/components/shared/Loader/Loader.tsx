import React from 'react';

import './Loader.scss';

const Loader = () => (
    <div className='whirlpool-wrapper d-flex align-items-center'>
        <div className="whirlpool">
            <div className="ring ring1"></div>
            <div className="ring ring2"></div>
            <div className="ring ring3"></div>
            <div className="ring ring4"></div>
            <div className="ring ring5"></div>
            <div className="ring ring6"></div>
            <div className="ring ring7"></div>
            <div className="ring ring8"></div>
            <div className="ring ring9"></div>
        </div>
    </div>
);

export default Loader;