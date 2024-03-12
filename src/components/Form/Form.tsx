import React from "react";
import { IFrom } from "../../models/IForms";

const Form: React.FC<IFrom> = ({ action, children }) => {
  return <form onSubmit={action}>{children}</form>;
};

export default Form;
