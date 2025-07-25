import ToasterSoonerSuccess from "@/components/Toaster/ToasterSoonerSuccess";
import { removeFromFavorite } from "@/redux/PersistSlices/favorites-users/favoritesuUsers";
import { DispatchType, SelectorState } from "@/redux/PersistStore";
import { User } from "@/redux/slices/users/UsersList";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFavotires = () => {
  const dispatch = useDispatch<DispatchType>();
  const favorites = useSelector(
    (state: SelectorState) => state.favoritesSlice.favorites
  );
  const [searchQuery, setSearchQuery] = useState("");
  const filteredFavorites = searchQuery.trim()
    ? favorites.filter((user: User) =>
        user.login.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : favorites;

  const handleRemoveFromFavorite = (userID: number) => {
    dispatch(removeFromFavorite(userID));
    ToasterSoonerSuccess("Removed from favourite");
  };
  return {
    handleRemoveFromFavorite,
    filteredFavorites,
    setSearchQuery,
    searchQuery,
  };
};

export default useFavotires;
