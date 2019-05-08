import React from 'react';

interface IProps {
    msg: string;
}

const Error = (props: IProps) => (
    <div className="alert alert-warning" role="alert">
        { props.msg }
    </div>
);

export default Error;