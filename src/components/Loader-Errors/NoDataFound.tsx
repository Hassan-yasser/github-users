import React, { ReactNode } from "react";
import { RiMenuSearchLine } from "react-icons/ri";

interface NoDataFoundProps {
  message: string;
  searchIcon?: ReactNode;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({ message }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center py-10">
      <RiMenuSearchLine className="text-[#ff7701] dark:text-white text-[200px] sm:text-[250px] lg:text-[400px]" />

      <p className="text-[#ff7701] dark:text-white text-lg">{message}</p>
    </div>
  );
};

export default NoDataFound;
