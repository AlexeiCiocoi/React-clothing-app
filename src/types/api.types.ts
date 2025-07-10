
export type BaseResponse<T> = {
  data?: T;
  error?: BaseError;
  success?: boolean;
}

export type BaseError ={
  code: string;
  message: string;
}