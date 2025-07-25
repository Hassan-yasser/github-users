import React from "react";

const ErrorText = ({ message }: { message: string }) => {
  return (
    <div className="text-[10px] sm:text-sm lg:text-lg xl:text-2xl text-[#ff7701] font-bold">
      {message}
    </div>
  );
};

export default ErrorText;
