import ToasterSoonerSuccess from "@/components/Toaster/ToasterSoonerSuccess";
import {
  addToFavorite,
  removeFromFavorite,
} from "@/redux/PersistSlices/favorites-users/favoritesuUsers";
import { DispatchType, SelectorState } from "@/redux/PersistStore";
import { fetchUsers, resetUsers, User } from "@/redux/slices/users/UsersList";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const useUsers = () => {
  const dispatch = useDispatch<DispatchType>();
  const Router = useRouter();
  const [loaderPage, setLoaderPage] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { users, searchResults, isLoading, page, hasMore, isSearching } =
    useSelector((state: SelectorState) => state.usersSlice);
  const favorites = useSelector(
    (state: SelectorState) => state.favoritesSlice?.favorites
  );

  useEffect(() => {
    dispatch(fetchUsers({ page: 1 })).finally(() => {
      setLoaderPage(false);
    });
  }, [dispatch]);
  useEffect(() => {
    if (isSearching) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (
        scrollTop + clientHeight >= scrollHeight - 200 &&
        !isLoading &&
        hasMore
      ) {
        dispatch(fetchUsers({ page }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, isLoading, page, hasMore, isSearching]);
  const handleAddToFavorite = (user: User) => {
    dispatch(addToFavorite(user));
    ToasterSoonerSuccess("Added to favourite");
  };
  const handleRemoveFromFavorite = (userID: number) => {
    dispatch(removeFromFavorite(userID));
    ToasterSoonerSuccess("Removed to favourite");
  };
  const seen = new Set();
  const uniqueUsers = (isSearching ? searchResults : users).filter((user) => {
    if (seen.has(user.id)) return false;
    seen.add(user.id);
    return true;
  });
  useEffect(() => {
    if (searchQuery.trim()) {
      dispatch(fetchUsers({ page: 1, search: searchQuery }));
    } else {
      dispatch(resetUsers());
    }
  }, [searchQuery, dispatch]);
  const goFavorite = useCallback(() => {
    Router.push("/favorites-users");
  }, []);
  return {
    favorites,
    uniqueUsers,
    handleAddToFavorite,
    handleRemoveFromFavorite,
    isLoading,
    hasMore,
    loaderPage,
    setSearchQuery,
    searchQuery,
    goFavorite,
  };
};

export default useUsers;
