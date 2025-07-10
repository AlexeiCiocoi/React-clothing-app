import { FirebaseError } from "firebase/app";
import { firebaseErrorMessages } from  './errorMessages'
import { BaseError } from "@/types/api.types";

export const handleFirebaseError = (error: unknown): {error: BaseError } => {
  if (error instanceof FirebaseError) {
    const knownMessage = firebaseErrorMessages[error.code];

    return {
      error: {
        code: error.code,
        message: knownMessage ?? error.message, // если мы знаем ошибку — переводим, если нет — отдаем как есть
      },
    };
  }

  if (error instanceof Error) {
    return {
      error: {
        code: "generic-error",
        message: error.message,
      },
    };
  }

  if (typeof error === "string") {
    return {
      error: {
        code: "string-error",
        message: error,
      },
    };
  }

  return {
    error: {
      code: "unknown",
      message: "Произошла неизвестная ошибка. Попробуйте позже.",
    },
  };
};