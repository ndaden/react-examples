import React from 'react';
import {Formik} from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const ValidatedLoginForm = () => (
<Formik 
    initialValues={{email:"", password:""}}
    onSubmit = {(values, {setSubmitting}) => {
        setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
        }, 500)
    }}

    //manual way
    /* validate = {values => {
        let errors = {};
        if(!values.email){
            errors.email = "Required";
        }else if(!EmailValidator.validate(values.email)){
            errors.email = "Invalid email address";
        }

        const passwordRegex = /(?=.*[0-9])/;
        if(!values.password){
            errors.password = "Required";
        }else if(values.password.length < 8){
            errors.password = "Password must be 8 characters long.";
        }else if(!passwordRegex.test(values.password)){
            errors.password ="Invalid password. Must contain one number";
        }

        console.log(errors);
        return errors;
    }}*/

    validationSchema={Yup.object().shape({
        email: Yup.string()
            .email()
            .required("Required"),
        password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 shars minimum")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
>
    

    {
        props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input className={errors.email && touched.email && "error"} name="email" type="text" value={values.email} placeholder="Enter your email" onChange={handleChange} onBlur={handleBlur} />
                    { errors.email && touched.email &&  (<div className="input-feedback">{errors.email}</div>) }

                    
                    <label htmlFor="password">Password</label>
                    <input className={errors.password && touched.password && "error"} name ="password" type="password" value={values.password} placeholder="Enter your password" onChange={handleChange} onBlur={handleBlur} />
                    { errors.password && touched.password &&  (<div className="input-feedback">{errors.password}</div>)} 
                    <button type="submit" disabled={isSubmitting}>Login</button>
                </form>
            );
        }
    }
</Formik>
);

export default ValidatedLoginForm;