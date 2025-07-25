"use client";
import { User } from "@/redux/slices/users/UsersList";
import { AnimatePresence } from "framer-motion";
import CardUser from "../userCard/CardUser";
import useUsers from "@/lib/hooks/useUsers/useUsers";
import LoaderSimple from "../Loader-Errors/LoaderSimple";
import LoaderPage from "../Loader-Errors/LoaderPage";
import ErrorText from "../Loader-Errors/ErrorText";
import NoDataFound from "../Loader-Errors/NoDataFound";

const Usersbody = () => {
  const {
    favorites,
    uniqueUsers,
    handleAddToFavorite,
    handleRemoveFromFavorite,
    isLoading,
    hasMore,
    loaderPage,
  } = useUsers();
  if (loaderPage) return <LoaderPage />;
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-40">
        <AnimatePresence mode="wait">
          {uniqueUsers?.length > 0 ? (
            uniqueUsers.map((user: User) => (
              <CardUser
                key={user?.id}
                favorite={favorites.some((fav) => fav.id === user.id)}
                user={user}
                handleAddToFavorite={handleAddToFavorite}
                removeFromFavorite={handleRemoveFromFavorite}
                showProfile={false}
              />
            ))
          ) : (
            <NoDataFound message={`There is no users with this name`} />
          )}
        </AnimatePresence>
      </div>
      {isLoading && <LoaderSimple />}
      {!hasMore && <ErrorText message="all users have been displayeds" />}
    </>
  );
};

export default Usersbody;
