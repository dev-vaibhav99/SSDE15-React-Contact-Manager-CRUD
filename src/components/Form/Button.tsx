import React from "react";
import { IButton } from "../../models/IForms";

const Button: React.FC<IButton> = ({ title, type }) => {
  return <button type={type}>{title}</button>;
};

export default Button;
