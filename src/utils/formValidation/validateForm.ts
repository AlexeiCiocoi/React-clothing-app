


export type ValidationRules<T> = {
    [K in keyof T]: {
        required?: boolean;
        pattern?:{
            value: RegExp;
            message: string;
        },
        minLength?: {
            value: number;
            message: string;
        },
        match?:{
            field: keyof T;
            message: string;
        },
        custom?: (value: T[K],values: T) => string | null;
       
    }
}

export function validateForm<T extends Record<string, string>>(
  values: Partial<T>,
  rules: ValidationRules<T>,
  fieldName?: keyof T       // only one field validation 
): Partial<Record<keyof T, string>> {
  const errors: Partial<Record<keyof T, string>> = {};

  const fieldsToValidate = fieldName ? [fieldName] : (Object.keys(rules) as Array<keyof T>);

  for (const key of fieldsToValidate) {
    const rule = rules[key];
    const value = values[key];

    if (rule.required && !value) {
      errors[key] = `${String(key)} is required`;
      continue;
    }

    if (
      rule.pattern &&
      (typeof value !== 'string' || !rule.pattern.value.test(value))
    ) {
      errors[key] = rule.pattern.message;
      continue;
    }

    if (
      rule.minLength &&
      typeof value === 'string' &&
      value.length < rule.minLength.value
    ) {
      errors[key] = rule.minLength.message;
      continue;
    }

    if (rule.match && value !== values[rule.match.field]) {
      errors[key] = rule.match.message;
      continue;
    }

    if (rule.custom && value !== undefined) {
      const customError = rule.custom(value as T[typeof key], values as T);
      if (customError) {
        errors[key] = customError;
        continue;
      }
    }
  }

  return errors;
}