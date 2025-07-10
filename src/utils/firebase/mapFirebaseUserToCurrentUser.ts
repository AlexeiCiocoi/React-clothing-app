import { ICurrentUser } from "@/types/user.types";
import { User } from "firebase/auth";




export const mapFirebaseUserToCurrentUser = (user: User): ICurrentUser =>({
    uid: user.uid,
    displayName: user?.displayName ?? "",
    email: user.email?? "",

})


