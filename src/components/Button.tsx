import { ButtonProps } from "@/types/types";

export const Button = ({ name }: ButtonProps) => {
  return <button className={``}>{name}</button>;
};
