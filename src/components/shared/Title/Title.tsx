import React from 'react';

interface IProps {
    title: string;
    length: number;
}

const Title = (props : IProps) => {
  return (
      <h4 className="mt-5 mb-3">
          {props.title}
          <span className="ml-2 badge badge-primary">{ props.length }</span>
      </h4>
  );
};

export default Title;