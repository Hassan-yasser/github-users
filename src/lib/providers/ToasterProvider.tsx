"use client";

import { SelectorState } from "@/redux/PersistStore";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const ToasterProvider = () => {
  const isDark = useSelector((state: SelectorState) => state.ThemeSlice.isDark);
  console.log("lsfnkfd-321", isDark);

  return (
    <>
      {" "}
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              backgroundColor: isDark ? "#1e2939" : "#ff7701",
              color: "white",
              borderWidth: "4px",
              borderStyle: "solid",
              borderColor: "white",
            },
          },
        }}
      />
    </>
  );
};

export default ToasterProvider;
