import React from "react";

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, style, children }) => (
  <div
    className={`shadow-md bg-white ${className} rounded-custom`}
    style={style}
  >
    {children}
  </div>
);
