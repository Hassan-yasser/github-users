import React from "react";

const LoaderPage = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-800">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#ff7701] dark:border-white"></div>
    </div>
  );
};

export default LoaderPage;
