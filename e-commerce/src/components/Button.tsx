import React from "react";
interface ButtonProps {
  text: string; 
}
const Button = (props:ButtonProps) => {
  return <div className="py-[8px] px-[22px] bg-[#000000]  rounded-[400px] text-white">{props.text}</div>;
};

export default Button;
