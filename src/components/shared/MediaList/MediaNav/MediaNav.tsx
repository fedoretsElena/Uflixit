import React from "react";
import { FaStepBackward, FaStepForward } from "react-icons/fa";

interface IProps {
    curr: number;
    length: number;
    uploadPage: (arg: number) => number;
}

const MediaNav = ({ length, curr, uploadPage }: IProps) => (
    <div className="btn-group btn-group-sm mr-2 pr-1 ml-auto">
        {curr - 1 >= 1 && (
            <button
                type="button"
                key="back"
                className="btn btn-secondary mr-1"
                onClick={() => uploadPage(--curr)}
            >
                <FaStepBackward />
            </button>
        )}

        {generateArr(length, curr).map((step: number) => (
            <button
                type="button"
                key={step}
                className={`btn ${
                    step === curr ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => checkCurrPage(curr, step, uploadPage(step))}
            >
                {step}
            </button>
        ))}

        {curr + 1 <= length && (
            <button
                type="button"
                key="forward"
                className="btn btn-secondary ml-1"
                onClick={() => uploadPage(++curr)}
            >
                <FaStepForward />
            </button>
        )}
    </div>
);

export default MediaNav;

function generateArr(length: number, curr: number): number[] {
    const arr: number[] = [];

    for (let i = curr - 1; i <= curr + 1; i++) {
        if (i !== 0) {
            arr.push(i);
        }
    }

    return arr;
}

function checkCurrPage(curr: number, next: number, callback: any) {
    if (curr !== next) {
        callback();
    }
}
