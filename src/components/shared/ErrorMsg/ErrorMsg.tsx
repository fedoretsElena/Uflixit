import React from "react";

interface IProps {
    msg: string | null;
}

const ErrorMsg = (props: IProps) => (
    <div className="alert alert-secondary" role="alert">
        {props.msg}
    </div>
);

export default ErrorMsg;
