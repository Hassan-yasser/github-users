import React from "react";
import toast from "react-hot-toast";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ToasterSoonerSuccess = (message: string) => {
  toast.dismiss();
  toast.success(message, {
    duration: 4000,
    icon: (
      <IoIosCheckmarkCircleOutline
        color="#ffffff"
        className="text-white text-2xl"
      />
    ),
  });
};

export default ToasterSoonerSuccess;
