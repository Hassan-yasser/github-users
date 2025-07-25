"use client";
import React from "react";
import SearchInput from "../Search/SearchInput";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface FavoritesHeaderProps {
  setSearchQuery: (value: string) => void;
}

const FavoritesHeader = ({ setSearchQuery }: FavoritesHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3 ">
      <div className="flex-1">
        <SearchInput onChange={setSearchQuery} />
      </div>
      <div
        onClick={() => router.back()}
        className="bg-white cursor-pointer rounded-full flex items-center justify-center size-[35px]"
      >
        <IoIosArrowBack className="text-[#ff7701] text-2xl" />
      </div>
    </div>
  );
};

export default FavoritesHeader;
