import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"
import { useEffect } from "react";
import { removeNotification } from "../notifications.slice";

import styles from './notifications.module.scss'

 const GlobalNotification = () => {
    const { notifications } = useAppSelector((state: RootState) => state.notification );
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(notifications.length !== 0 ){
            const timer = setTimeout(()=>{
                dispatch(removeNotification(notifications[0].id))
            },2000);
            return () => clearTimeout(timer)
        }
       

    },[notifications,dispatch])
    return (
        <div className={styles.notificationWrapper}>
            {notifications.map((n) => (
                <div key={n.id} className={`${styles.toast} ${styles[n.type]}`}>
                {n.message}
                </div>
            ))}
    </div>
    )
}

export default GlobalNotification;