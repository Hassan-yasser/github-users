"use client";
import React, { useState, useEffect } from "react";
import SearchInput from "../Search/SearchInput";
import { useDispatch } from "react-redux";
import { fetchUsers, resetUsers } from "@/redux/slices/users/UsersList";
import { DispatchType } from "@/redux/PersistStore";
import { FaHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useRouter } from "next/navigation";

const ListUsersHeader = () => {
  const dispatch = useDispatch<DispatchType>();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (searchQuery.trim()) {
      dispatch(fetchUsers({ page: 1, search: searchQuery }));
    } else {
      dispatch(resetUsers());
    }
  }, [searchQuery, dispatch]);
  const routeFN = async () => {
    await router.prefetch(`/favorites-users`);
    await router.push(`/favorites-users`);
  };
  return (
    <div className="flex items-center gap-3 ">
      <div className="flex-1">
        <SearchInput onChange={setSearchQuery} />
      </div>
      <div
        onClick={routeFN}
        className=" bg-white cursor-pointer rounded-full flex items-center justify-center size-[35px]"
      >
        <FaHeart className="text-[#ff7701]" />
      </div>
    </div>
  );
};

export default ListUsersHeader;
