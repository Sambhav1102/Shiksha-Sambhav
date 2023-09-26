import React from "react";

const sizeClasses = {
  txtRudaRegular24: "font-normal font-ruda",
  txtRudaRegular14: "font-normal font-ruda",
  txtRudaBold50: "font-bold font-ruda",
  txtRudaBold45: "font-bold font-ruda",
  txtRudaMedium14Bluegray400: "font-medium font-ruda",
  txtRudaRegular10: "font-normal font-ruda",
  txtRudaRegular16Bluegray300: "font-normal font-ruda",
  txtRudaBold50TealA400: "font-bold font-ruda",
  txtRudaBold14: "font-bold font-ruda",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtRudaMedium14Gray900: "font-medium font-ruda",
  txtRudaMedium18: "font-medium font-ruda",
  txtRudaMedium14Black900: "font-medium font-ruda",
  txtRudaMedium16: "font-medium font-ruda",
  txtRudaMedium14: "font-medium font-ruda",
  txtRudaMedium24: "font-medium font-ruda",
  txtRudaRegular16Black90001: "font-normal font-ruda",
  txtRudaRegular16Black90003: "font-normal font-ruda",
  txtRudaMedium20: "font-medium font-ruda",
  txtRudaRegular16: "font-normal font-ruda",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
