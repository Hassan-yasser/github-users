"use client";
import React, { useState, useEffect } from "react";
import SearchInput from "../Search/SearchInput";
import { useDispatch } from "react-redux";
import { fetchUsers, resetUsers } from "@/redux/slices/users/UsersList";
import { DispatchType } from "@/redux/PersistStore";
import { FaHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useRouter } from "next/navigation";

const ReusebleHeader = ({
  setSearchQuery,
  isFevPage,
  placeholder,
  buttonFN,
}: {
  setSearchQuery: (e: string) => void;
  buttonFN: () => void;
  isFevPage: boolean;
  placeholder: string;
}) => {
  return (
    <div className="flex items-center gap-3 ">
      <div className="flex-1">
        <SearchInput onChange={setSearchQuery} placeholder={placeholder} />
      </div>
      {isFevPage ? (
        <div
          onClick={buttonFN}
          className="bg-white dark:bg-gray-800 transition-colors duration-300 cursor-pointer rounded-full flex items-center justify-center size-[35px] shadow"
        >
          <IoIosArrowBack className="text-[#ff7701] text-2xl dark:text-white" />
        </div>
      ) : (
        <div
          onClick={buttonFN}
          className=" bg-white cursor-pointer rounded-full flex items-center justify-center size-[35px]"
        >
          <FaHeart className="text-[#ff7701]" />
        </div>
      )}
    </div>
  );
};

export default ReusebleHeader;
