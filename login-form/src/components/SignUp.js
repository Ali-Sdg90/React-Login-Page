import React, { useState } from "react";

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTAS: false,
    });

    const changeHandeler = (event) => {
        if (event.target.name === "acceptTAS") {
            setData({
                ...data,
                [event.target.name]: event.target.checked,
            });
            console.log(data);
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value,
            });
            console.log(data);
        }
    };

    return (
        <div>
            <h1>SignUp</h1>
            <form>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={data.name}
                    onChange={changeHandeler}
                ></input>
                <br></br>

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={data.email}
                    onChange={changeHandeler}
                ></input>
                <br></br>

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={data.password}
                    onChange={changeHandeler}
                ></input>
                <br></br>

                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    autoComplete="off"
                    value={data.confirmPassword}
                    onChange={changeHandeler}
                ></input>
                <br></br>

                <label>I agree to the terms and services</label>
                <input
                    type="checkbox"
                    name="acceptTAS"
                    autoComplete="off"
                    value={data.acceptTAS}
                    onChange={changeHandeler}
                ></input>
                <br></br>
            </form>
            <div>
                <a href="#">Sing in</a>
                <button>Login</button>
            </div>
        </div>
    );
};

export default SignUp;
