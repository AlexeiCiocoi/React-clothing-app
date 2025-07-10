export const createBaseError = (
  code: string,
  message: string
) => ({
  error: { code, message },
});