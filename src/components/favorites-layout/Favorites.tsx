"use client";
import { AnimatePresence } from "framer-motion";
import CardUser from "../userCard/CardUser";
import { User } from "@/redux/slices/users/UsersList";
import useFavotires from "@/lib/hooks/useFavotires/useFavotires";
import NoDataFound from "../Loader-Errors/NoDataFound";
import ReusebleHeader from "../header/ReusebleHeader";

const Favorites = () => {
  const {
    filteredFavorites,
    handleRemoveFromFavorite,
    setSearchQuery,
    backFN,
  } = useFavotires();
  return (
    <>
      <ReusebleHeader
        buttonFN={backFN}
        placeholder="Search In Favorite Users"
        isFevPage
        setSearchQuery={setSearchQuery}
      />

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
            <div className="w-full col-span-full  ">
              <NoDataFound message={`There No Users In Favorite`} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Favorites;
