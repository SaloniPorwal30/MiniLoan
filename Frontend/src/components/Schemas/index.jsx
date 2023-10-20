import * as Yup from "yup";

//Login
export const loginSchema = Yup.object({
    firstname: Yup.string().min(2).required("Please enter your first name!"),
    lastname: Yup.string().min(3).required("Please enter your last name!"),
    password: Yup.string()
        .min(8)
        .required("Please enter the password!")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
});

//Create Loan 
export const createLoanSchema = Yup.object({
    name: Yup.string().min(2).required("Please enter your full name!"),
    amount: Yup.number().min(3).required("Please enter amount for create loan!"),
    term: Yup.number().min(1).required("Please enter the term!")
});

//Repay Loan 
export const repayLoanSchema = Yup.object({
    amount: Yup.number().min(3).required("Please enter amount for repay loan!"),
});

