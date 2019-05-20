import React from "react";

interface IProps {
    value: number;
}

function getBgValue(value: number): string {
    if (value > 8) {
        return "success";
    } else if (value > 6) {
        return "warning";
    } else {
        return "secondary";
    }
}

const Rating = ({ value }: IProps) => (
    <span className={"badge badge-" + getBgValue(value)}>{value}</span>
);

export default Rating;
