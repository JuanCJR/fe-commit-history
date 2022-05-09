import React from "react";
import { Navbar } from "./Navbar";

type Props = {
  children?: JSX.Element;
};

export const Layaout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
