"use client";
import React from "react";
import ReusebleHeader from "../header/ReusebleHeader";
import Usersbody from "./Usersbody";
import useUsers from "@/lib/hooks/useUsers/useUsers";

const UserContanier = () => {
  const {
    favorites,
    uniqueUsers,
    handleAddToFavorite,
    handleRemoveFromFavorite,
    isLoading,
    hasMore,
    loaderPage,
    setSearchQuery,
    goFavorite,
  } = useUsers();
  return (
    <div className="bg-[#f4f4f4] dark:bg-[#111827] min-h-screen p-6 space-y-5 transition-colors duration-300">
      <ReusebleHeader
        isFevPage={false}
        placeholder="search in users by name..."
        buttonFN={goFavorite}
        setSearchQuery={setSearchQuery}
      />
      <Usersbody
        favorites={favorites}
        loaderPage={loaderPage}
        hasMore={hasMore}
        isLoading={isLoading}
        uniqueUsers={uniqueUsers}
        handleAddToFavorite={handleAddToFavorite}
        handleRemoveFromFavorite={handleRemoveFromFavorite}
      />
    </div>
  );
};

export default UserContanier;
