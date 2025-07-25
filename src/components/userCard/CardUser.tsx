import React from "react";
import { motion } from "framer-motion";
import { User } from "@/redux/slices/users/UsersList";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

interface CardUserProps {
  user: User;
  handleAddToFavorite?: (user: User) => void;
  removeFromFavorite?: (userID: number) => void;
  favorite: boolean;
  showProfile: boolean;
}

const CardUser: React.FC<CardUserProps> = ({
  user,
  handleAddToFavorite,
  removeFromFavorite,
  favorite,
  showProfile,
}) => {
  return (
    <motion.div className="bg-[#ff7701] text-white dark:bg-gray-800 dark:text-white p-4 rounded-2xl shadow-lg relative group overflow-hidden">
      <div className="relative">
        {showProfile ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 block overflow-hidden rounded-full mx-auto border-4 border-white transition duration-300"
            href={user.html_url}
          >
            <img src={user.avatar_url} alt={user.login} className="w-full" />
          </a>
        ) : (
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 block overflow-hidden rounded-full mx-auto border-4 border-white transition duration-300"
          />
        )}

        <motion.div
          className="absolute -top-2 right-0 bg-white dark:bg-gray-700 cursor-pointer rounded-full flex items-center justify-center size-[35px]"
          onClick={() => {
            if (favorite) {
              if (removeFromFavorite) removeFromFavorite(user?.id);
            } else {
              if (handleAddToFavorite) handleAddToFavorite(user);
            }
          }}
          whileTap={{ scale: 0.8 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.3 }}
        >
          {favorite ? (
            <FaHeart className="text-[#ff7701]" />
          ) : (
            <IoMdHeartEmpty className="text-[#ff7701]" />
          )}
        </motion.div>
      </div>
      <p className="text-center text-lg mt-4">{user.login}</p>
    </motion.div>
  );
};

export default CardUser;
