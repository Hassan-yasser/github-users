"use client";
import { AnimatePresence } from "framer-motion";
import CardUser from "../userCard/CardUser";
import { User } from "@/redux/slices/users/UsersList";
import FavoritesHeader from "./FavoritesHeader";
import useFavotires from "@/lib/hooks/useFavotires/useFavotires";
import NoDataFound from "../Loader-Errors/NoDataFound";

const Favorites = () => {
  const {
    filteredFavorites,
    handleRemoveFromFavorite,
    setSearchQuery,
    searchQuery,
  } = useFavotires();
  return (
    <>
      <FavoritesHeader setSearchQuery={setSearchQuery} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-40 mt-6">
        <AnimatePresence mode="wait">
          {filteredFavorites?.length > 0 ? (
            filteredFavorites.map((user: User) => (
              <CardUser
                key={user.id}
                showProfile
                user={user}
                favorite={true}
                removeFromFavorite={handleRemoveFromFavorite}
              />
            ))
          ) : (
            <NoDataFound message={`There is no user with this name`} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Favorites;
