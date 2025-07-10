import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";


export interface IInputForm extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {
    label?: string;
    value: string;
    error?: string;
}