import { JSX } from "react";
import styles from './button.module.scss'
import cn from 'classnames'
import { BUTTON_TYPE_APPERENCE, ButtonProps } from "./button.props";



export const Button = ({appearence , children, className, ...props}: ButtonProps): JSX.Element =>{
 return(
    <button className={cn(styles.buttonContainer,className,styles[BUTTON_TYPE_APPERENCE[appearence]])}
        {...props}
    >
        {children}
     
    </button>
 )
}