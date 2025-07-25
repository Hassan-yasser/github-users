import React, { ReactNode } from "react";
import { RiMenuSearchLine } from "react-icons/ri";

interface NoDataFoundProps {
  message: string;
  searchIcon?: ReactNode;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({
  message,
  searchIcon = <RiMenuSearchLine />,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      {searchIcon}
      <p className="text-gray-500 text-lg">{message}</p>
    </div>
  );
};

export default NoDataFound;
