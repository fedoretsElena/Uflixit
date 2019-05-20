import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class Login extends Component {
    render() {
        return (
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
        );
    }

    responseGoogle = (res: any) => {
        // console.log("Answer", res);
    };
}

export default Login;
