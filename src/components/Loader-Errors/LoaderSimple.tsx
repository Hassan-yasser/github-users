import React from "react";
import { ImSpinner9 } from "react-icons/im";

const LoaderSimple = () => {
  return (
    <div className="col-span-full w-full flex items-center justify-center">
      <ImSpinner9 className="animate-spin text-[#ff7701] text-3xl" />
    </div>
  );
};

export default LoaderSimple;
