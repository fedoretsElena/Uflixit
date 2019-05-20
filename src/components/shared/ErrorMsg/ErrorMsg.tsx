import React from "react";

interface IProps {
    msg: string | null;
}

const ErrorMsg = (props: IProps) => (
    <div className="alert alert-warning" role="alert">
        {props.msg}
    </div>
);

export default ErrorMsg;
