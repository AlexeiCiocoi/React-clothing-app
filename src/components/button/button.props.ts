import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";


export const BUTTON_TYPE_APPERENCE = {
  google: 'google-sign-in',
  inverted: 'inverted',
  default: ''
}

type ButtonType = keyof typeof BUTTON_TYPE_APPERENCE;



export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
    children: ReactNode;
    appearence: ButtonType;
}