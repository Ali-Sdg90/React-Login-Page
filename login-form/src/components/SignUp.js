import React, { useEffect, useState } from "react";
import validData from "./validData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Styles from "./SingUp.module.css";

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTAS: false,
    });

    const [errors, setErrors] = useState({});
    const [isFocused, setIsFocused] = useState({});

    useEffect(() => {
        setErrors(validData(data));
        console.log(errors);
    }, [data, isFocused]);

    const changeHandler = (event) => {
        if (event.target.name === "acceptTAS") {
            setData({
                ...data,
                [event.target.name]: event.target.checked,
            });
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value,
            });
        }
    };

    const focusHandler = (event) => {
        setIsFocused({ ...isFocused, [event.target.name]: true });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        notify();
        if (!Object.keys(errors).length) {
            console.log(data);
        } else {
            setIsFocused({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                acceptTAS: true,
            });
        }
    };

    const notify = () => toast("Wow so easy!");

    return (
        <div className={Styles.container}>
            <form onSubmit={submitHandler} className={Styles.formContainer}>
                <h1 className={Styles.header}>SignUp</h1>
                <div className={Styles.formField}>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={
                            errors.name && isFocused.name
                                ? Styles.uncompleted
                                : Styles.formInput
                        }
                    ></input>
                    {errors.name && isFocused.name && (
                        <span>{errors.name}</span>
                    )}
                </div>

                <div className={Styles.formField}>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={
                            errors.email && isFocused.email
                                ? Styles.uncompleted
                                : Styles.formInput
                        }
                    ></input>
                    {errors.email && isFocused.email && (
                        <span>{errors.email}</span>
                    )}
                </div>

                <div className={Styles.formField}>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={
                            errors.password && isFocused.password
                                ? Styles.uncompleted
                                : Styles.formInput
                        }
                    ></input>
                    {errors.password && isFocused.password && (
                        <span>{errors.password}</span>
                    )}
                </div>

                <div className={Styles.formField}>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        autoComplete="off"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={
                            errors.confirmPassword && isFocused.confirmPassword
                                ? Styles.uncompleted
                                : Styles.formInput
                        }
                    ></input>
                    {errors.confirmPassword && isFocused.confirmPassword && (
                        <span>{errors.confirmPassword}</span>
                    )}
                </div>

                <div className={Styles.formField}>
                    <div className={Styles.checkBoxContainer}>
                        <label>I agree to the terms and services </label>
                        <input
                            type="checkbox"
                            name="acceptTAS"
                            autoComplete="off"
                            value={data.acceptTAS}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        ></input>
                    </div>
                    {errors.acceptTAS && isFocused.acceptTAS && (
                        <span>{errors.acceptTAS}</span>
                    )}
                </div>

                <div className={Styles.formButtones}>
                    <a href="#">Sing in</a>
                    <button type="submit">Login</button>
                </div>
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default SignUp;
