import React from "react";

type TestTypes = {
  name: string;
  age?: number;
  subName: string;
}

const Test = ({ name, subName }: TestTypes) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{subName}</h2>
    </div>
  );
};

export default Test;
