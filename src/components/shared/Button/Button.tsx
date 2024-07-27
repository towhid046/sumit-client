import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  customClass: string;
};

const Button: React.FC<ButtonProps> = ({ children, customClass }) => {
  return <button className={`${customClass} transition duration-300 py-1.5 px-5 rounded`}>{children}</button>;
};

export default Button;
