"use client";
import { User } from "@/redux/slices/users/UsersList";
import { AnimatePresence } from "framer-motion";
import CardUser from "../userCard/CardUser";
import LoaderSimple from "../Loader-Errors/LoaderSimple";
import LoaderPage from "../Loader-Errors/LoaderPage";
import ErrorText from "../Loader-Errors/ErrorText";
import NoDataFound from "../Loader-Errors/NoDataFound";

const Usersbody = ({
  loaderPage,
  uniqueUsers,
  favorites,
  handleAddToFavorite,
  handleRemoveFromFavorite,
  isLoading,
  hasMore,
}: {
  loaderPage: boolean;
  uniqueUsers: User[];
  favorites: User[];
  handleAddToFavorite?: (user: User) => void;
  handleRemoveFromFavorite?: (userID: number) => void;
  isLoading: boolean;
  hasMore: boolean;
}) => {
  if (loaderPage) return <LoaderPage />;
  return (
    <>
      {" "}
      {/* display users with responsive UI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-40">
        <AnimatePresence mode="wait">
          {uniqueUsers?.length > 0 ? (
            uniqueUsers.map((user: User) => (
              // each user have a card
              <CardUser
                key={user?.id}
                favorite={favorites.some((fav: User) => fav.id === user.id)}
                user={user}
                handleAddToFavorite={handleAddToFavorite}
                removeFromFavorite={handleRemoveFromFavorite}
                showProfile={false}
              />
            ))
          ) : (
            // handle error
            <div className="w-full col-span-full">
              <NoDataFound message={`There is no users with this name`} />
            </div>
          )}
        </AnimatePresence>
      </div>
      {/* loading while get new users */}
      {isLoading && <LoaderSimple />}
      {/* is arrive to last user ? */}
      {!hasMore && <ErrorText message="all users have been displayeds" />}
    </>
  );
};

export default Usersbody;
