import React from 'react';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';

interface IProps {
    curr: number,
    length: number,
    uploadPage: Function
}

function generateArr(length: number): number[] {
    const arr: number[] = [];

    for (let i = 1; i <= length; i++) {
        arr.push(i);
    }

    return arr;
}

const MediaNav = ({length, curr, uploadPage}: IProps) => (
    <div className="btn-group btn-group-sm mr-2 pr-1">
        {curr - 1 >=1 && <button type="button"
                key='back'
                className='btn btn-secondary mr-1'
                onClick={() => uploadPage(--curr)}
        >
            <FaStepBackward />
        </button>
        }

        {generateArr(length).map((step: number) => (
            <button type="button"
                    key={step}
                    className={`btn ${ step === curr ? 'btn-primary' : 'btn-secondary' }`}
                    onClick={() => step !== curr ? uploadPage(step) : console.log('This page is already opened')}
            >
                { step }
            </button>
        ))}

        {curr + 1 <= length && <button type="button"
                                key='forward'
                                className='btn btn-secondary ml-1'
                                onClick={() => uploadPage(++curr)}
        >
            <FaStepForward/>
        </button>
        }
    </div>
);

export default MediaNav;