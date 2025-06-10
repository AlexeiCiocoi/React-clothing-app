export interface ICurrentUser{
    displayName: string;
    email: string;
    isLoggedIn: boolean;
}


export interface IUserContext {
  currentUser: ICurrentUser | null;
  setCurrentUser: (user: ICurrentUser | null) => void;
}