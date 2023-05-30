import React, { useEffect, useState } from "react";
import validData from "./validData";

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
        // console.log(data);
    };

    const focusHandler = (event) => {
        setIsFocused({ ...isFocused, [event.target.name]: true });
    };

    const submitHandler = (event) => {
        event.preventDefault();
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

    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    ></input>
                    {errors.name && isFocused.name && (
                        <span>{errors.name}</span>
                    )}
                </div>

                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    ></input>
                    {errors.email && isFocused.email && (
                        <span>{errors.email}</span>
                    )}
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    ></input>
                    {errors.password && isFocused.password && (
                        <span>{errors.password}</span>
                    )}
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        autoComplete="off"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    ></input>
                    {errors.confirmPassword && isFocused.confirmPassword && (
                        <span>{errors.confirmPassword}</span>
                    )}
                </div>

                <div>
                    <label>I agree to the terms and services </label>
                    <input
                        type="checkbox"
                        name="acceptTAS"
                        autoComplete="off"
                        value={data.acceptTAS}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    ></input>
                    {errors.acceptTAS && isFocused.acceptTAS && (
                        <span>{errors.acceptTAS}</span>
                    )}
                </div>

                <div>
                    <a href="#">Sing in</a>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
