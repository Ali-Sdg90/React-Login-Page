import React from "react";
import { Link } from "react-router-dom";

import Styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={Styles.container}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/React-Login-Page">Home Page</Link>
        </div>
    );
};

export default NotFound;
