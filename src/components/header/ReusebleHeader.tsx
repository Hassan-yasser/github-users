"use client";
import { useState } from "react";
import SearchInput from "../Search/SearchInput";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { ThemeToggleButton } from "../ThemeButton/ChangeThemeButton";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";

const ReusebleHeader = ({
  setSearchQuery,
  isFevPage,
  placeholder,
  buttonFN,
}: {
  setSearchQuery: (e: string) => void;
  buttonFN: () => void;
  isFevPage: boolean;
  placeholder: string;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex  items-center gap-3 relative w-full">
      <motion.div
        className="sm:grow"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SearchInput onChange={setSearchQuery} placeholder={placeholder} />
      </motion.div>

      {/* Desktop buttons */}
      <div className="hidden sm:flex items-center gap-2">
        <div
          onClick={buttonFN}
          className="bg-white dark:bg-gray-800 cursor-pointer rounded-full flex items-center justify-center size-[35px] shadow"
        >
          {isFevPage ? (
            <IoIosArrowBack className="text-[#ff7701] text-2xl dark:text-white" />
          ) : (
            <FaHeart className="text-[#ff7701] dark:text-white" />
          )}
        </div>
        <ThemeToggleButton />
      </div>

      <div className="flex sm:hidden relative z-50">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-white dark:bg-gray-800 cursor-pointer rounded-full flex items-center justify-center size-[30px] shadow"
        >
          <HiMenu className="text-[#ff7701] text-xl dark:text-white" />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-9 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col gap-3 sm:hidden"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={() => {
                setMenuOpen(false);
                buttonFN();
              }}
              className="cursor-pointer bg-gray-100 dark:bg-gray-700 rounded-full p-2 flex justify-center items-center"
            >
              {isFevPage ? (
                <IoIosArrowBack className="text-[#ff7701] text-xl dark:text-white" />
              ) : (
                <FaHeart className="text-[#ff7701] text-xl dark:text-white" />
              )}
            </div>
            <ThemeToggleButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReusebleHeader;
