import React from "react";
import SmallLoader from "../loadings/SmallLoader";
// import BtnHelper from "../loadings/SmallLoader";

export default function BtnMain({
  icon,
  text,
  onClick,
  className,
  disabled,
  addLoading=false,
  fullWidth = false,
}) {
    const BtnHelper = (icon, text) => {
        return (
          <div className="flex gap-x-2">
            {icon && icon} {text}
          </div>
        );
      }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative mr-3 disabled:bg-green-400 cursor-pointer hover:text-gray-100 rounded-md flex items-center justify-center gap-x-1 text-center border border-green-500 py-2 px-8 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white ${
        fullWidth && "w-full"
      } ${className}`}
    >
      {addLoading == true ? (
        <SmallLoader text={text} />
      ) : (
        BtnHelper(icon, text)
      )}
    </button>
  );
}