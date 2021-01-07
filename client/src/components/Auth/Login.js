import React from 'react';
import { GoogleLogin } from "react-google-login";

export default function Login() {

    const onSuccess = googleUser => {
        console.log({ googleUser });
      };


    return (
        <GoogleLogin
            clientId="199645287050-2eq6u7n8us9088gn79glhqsmnrjoftkn.apps.googleusercontent.com"
            onSuccess={onSuccess}
        />
    )
}
