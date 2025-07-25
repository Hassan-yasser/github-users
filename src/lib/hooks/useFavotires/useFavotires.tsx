import ToasterSoonerSuccess from "@/components/Toaster/ToasterSoonerSuccess";
import { removeFromFavorite } from "@/redux/PersistSlices/favorites-users/favoritesuUsers";
import { DispatchType, SelectorState } from "@/redux/PersistStore";
import { User } from "@/redux/slices/users/UsersList";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const useFavotires = () => {
  const dispatch = useDispatch<DispatchType>();
  const Router = useRouter();
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
  const backFN = useCallback(() => {
    Router.back();
  }, []);
  return {
    handleRemoveFromFavorite,
    filteredFavorites,
    setSearchQuery,
    searchQuery,
    backFN,
  };
};

export default useFavotires;
