import React from "react";
import Icon from "./Icon";

function Button({
  value,
  type,
  action,
  variant,
  loading = false,
  fullWidth,
  icon,
}) {
  let variantClass;

  switch (variant) {
    case "primary":
      variantClass = "bg-star text-white hover:bg-supporta focus:ring-supporta";
      break;
    case "secondary":
      variantClass =
        "bg-supporta text-white hover:bg-ssupportb focus:ring-ssupportb";
      break;
    case "frame":
      variantClass =
        "bg-white text-star border border-primary hover:bg-gray-100 focus:ring-primary";
      break;
    case "green":
      variantClass =
        "bg-green-100 text-green-600 hover:bg-green-200 focus:ring-bg-green-200";
      break;
    case "red":
      variantClass =
        "bg-red-100 text-red-600 hover:bg-red-200 focus:ring-bg-green-200";
      break;
    default:
      variantClass =
        "bg-gray-100 text-star hover:bg-gray-300 focus:ring-gray-300";
      break;
  }

  return (
    <button
      type={type}
      className={`${variantClass} ${fullWidth && "w-full"} ${
        icon ? "justify-between" : "justify-center"
      } p-3 flex items-center whitespace-nowrap space-x-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all`}
      onClick={action && action}
    >
      {value && <div>{loading ? <Icon type="loading" /> : value}</div>}
      {icon && <Icon type={icon} />}
    </button>
  );
}

export default Button;
