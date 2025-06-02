import { JSX } from "react"
import { IInputForm } from "./formInput.prop"
import styles from './formInput.module.scss'
import cn from 'classnames'
export const FormInput = ({label , ...props}: IInputForm): JSX.Element =>{
    return (
        <div className={styles.group}>
            <input className={styles.formInput} {...props}/>
            { label &&
                <label
                    className={cn(styles.formInputLabel , {
                        [styles.shrink]: props.value.length > 0
                    } )}
                >{label}</label>
            }
            
        </div>
    )
}