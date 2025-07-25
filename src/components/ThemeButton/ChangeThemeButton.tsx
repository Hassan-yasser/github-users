import { SelectorState } from "@/redux/PersistStore";
import { setDarkMode, toggleDarkMode } from "@/redux/slices/Theme/ThemeSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: SelectorState) => state.ThemeSlice.isDark);

  useEffect(() => {
    const darkValue = localStorage.getItem("dark");
    if (darkValue === "1") {
      dispatch(setDarkMode(true));
    }
  }, [dispatch]);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className={`
        cursor-pointer w-16 h-8 rounded-full flex items-center px-1 transition-all  duration-300
        ${isDark ? "bg-gray-800  ps-10" : "bg-[#ff7701] ps-1"}
      `}
    >
      {isDark ? (
        <FiMoon className="text-white w-5 h-5" />
      ) : (
        <FiSun className="text-white w-5 h-5" />
      )}
    </button>
  );
};
