"use client";
import { SelectorState } from "@/redux/PersistStore";
import { setDarkMode } from "@/redux/slices/Theme/ThemeSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: SelectorState) => state.ThemeSlice.isDark);

  useEffect(() => {
    const stored = localStorage.getItem("dark");
    if (stored === "1") {
      dispatch(setDarkMode(true));
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("dark", isDark ? "1" : "0");
  }, [isDark]);

  return <>{children}</>;
};

export default ThemeInitializer;
