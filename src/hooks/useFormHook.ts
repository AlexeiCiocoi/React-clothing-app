import { ValidationRules, validateForm } from "@/utils/formValidation/validateForm";
import { useState } from "react";



export default function useFormHook<T extends Record<string , string>>(initialValues: T , rules: ValidationRules<T>){

const [values , setValues] = useState<T>(initialValues);
const [errors , setErrors] = useState<Partial<Record<keyof T , string>>>({});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const { value , name} = e.target;
    setValues((prevValues)=> ({
        ...prevValues,
        [name]: value
    }
        )
    );    
}

const handleSubmit = (calback: (values: T) => void) => (e : React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    calback(values);
}

const handleBlur  = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const { name , value} = e.target;
    const key = name as keyof T;

    const fieldErrors = validateForm({[name]:value}as T , rules , name);

    setErrors((prev) =>{
        const newErrors = {...prev};
        if(fieldErrors[key]){
            newErrors[key] = fieldErrors[key]!;
        } 
        else {
            delete newErrors[key];
        }
        return newErrors;
    })
}

const validate = (): boolean =>{
    const validationErrors = validateForm(values , rules)
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
    
}


const resetForm = () =>{
    setValues(initialValues);
    setErrors({});
}

    return {
        values,
        errors,
        validate,
        handleChange,
        handleSubmit,
        setErrors,
        resetForm,
        handleBlur
    };
}
