import React from "react";

type Params = {
  variant: string;
  children: React.ReactNode;
};

const Button = ({ variant = "", children, ...props }: Params) => {
  let className = "py-2 px-4 text-color text-slate-100 rounded-md";

  // Ajoutez une classe en fonction de la variante
  if (variant === "primary") {
    className += ` bg-blue-600 hover:bg-blue-700`;
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
