import React from "react";

const Heading = () => {
  return (
    <>
      <h4 className="text-2xl underline mb-4">Lorem</h4>
      <h1 className="text-5xl text-red-800">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labor?
      </h1>
      <hr className="w-1/12 border-2 my-3 border-red-200" />
      <div className="flex w-full justify-between items-center">
        <p className="text-lg">Lorem ipsum dolor sit.</p>
        <p className="text-slate-400 text-sm mt-2">
          Published: 11 Jun 2023, 10: 45
        </p>
      </div>
      <hr className="mt-5" />
    </>
  );
};

export default Heading;
