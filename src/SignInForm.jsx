import React from "react";
import { Field, reduxForm } from "redux-form";
import LoginField from "./components/LoginField"

let SignInForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="offset-md-4 col-md-4 mt-5">
                        <h2 className="mt-5">Login</h2>
                        <Field
                            name="username"
                            type="text"
                            component={LoginField}
                            label="Username"
                        />
                        <Field
                            name="Password"
                            type="password"
                            component={LoginField}
                            label="Password"
                        />
                        <div>
                            <button className="btn btn-primary" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'signIn',
})(SignInForm);