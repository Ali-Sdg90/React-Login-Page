import React from "react";
import { Link } from "react-router-dom";
import Styles from "./FirstPage.module.css";

const FirstPage = () => {
    return (
        <div className={Styles.container}>
            <h1>SignUp or Login</h1>
            <div>
                <Link to="/React-Login-Page/signup">
                    <button>SignUp</button>
                </Link>
                <Link to="/React-Login-Page/login">
                    <button>Login</button>
                </Link>
            </div>
            <span>
                <p>1402/03/17 - 2023/06/07</p>
            </span>
        </div>
    );
};

export default FirstPage;
