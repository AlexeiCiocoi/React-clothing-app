import { addNotification, NotificationType } from "@/features/notifications/notifications.slice";
import { useAppDispatch } from "@/store/hooks"
import { v4 as uuidv4 } from 'uuid';


const useNotifier = () =>{
    const dispatch = useAppDispatch();

    return {
        notify: (message: string , type : NotificationType) => {
            dispatch(addNotification({id: uuidv4(), message , type}))
        }
    }
}

export default useNotifier;