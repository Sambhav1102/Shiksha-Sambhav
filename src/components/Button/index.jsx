import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
  fill: {
    blue_50_cc: "bg-blue-50_cc",
    black_900_04: "bg-black-900_04 text-white-A700",
    black_900_05: "bg-black-900_05 shadow-bs",
    teal_A400: "bg-teal-A400",
    gray_900: "bg-gray-900 text-white-A700",
  },
};
const sizes = {
  xs: "p-3",
  sm: "p-[15px]",
  md: "p-[18px]",
  lg: "p-[21px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_50_cc",
    "black_900_04",
    "black_900_05",
    "teal_A400",
    "gray_900",
  ]),
};

export { Button };
