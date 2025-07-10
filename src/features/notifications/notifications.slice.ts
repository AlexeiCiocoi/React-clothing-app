import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type NotificationType = "success" | "error" | "info";

export interface INotification {
  id: string;
  message: string;
  type: NotificationType;
}

interface NotificationState {
  notifications: INotification[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
name:'norification',
initialState,
reducers: {
    addNotification: (state, action: PayloadAction<INotification>)=>{
            state.notifications.push(action.payload)
    },
    removeNotification: (state , action: PayloadAction<string>) =>{
        state.notifications = state.notifications.filter((n) => n.id !== action.payload)
    }
}
})

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;