const validData = (data, type) => {
    const errors = {};

    if (!data.email) {
        errors.email = " Email requared";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = " Email address is invalid";
    } else {
        delete errors.email;
    }

    if (!data.password) {
        errors.password = " Password is requared";
    } else if (data.password.length < 6) {
        errors.password = " Password needs to be 6 character or more";
    } else {
        delete errors.password;
    }

    if (type === "signUp") {
        if (!data.name.trim()) {
            errors.name = " Username requared";
        } else {
            delete errors.name;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = " Confirmed the password";
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = " Password do not match";
        } else {
            delete errors.confirmPassword;
        }

        if (data.acceptTAS) {
            delete errors.acceptTAS;
        } else {
            errors.acceptTAS = " Accept our regulations";
        }
    }

    return errors;
};

export default validData;
