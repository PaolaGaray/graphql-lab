import React, { useContext } from 'react';
import { GraphQLClient } from "graphql-request";
import { GoogleLogin } from "react-google-login";

import Context from '../../context';
import { ME_QUERY } from '../../graphql/queries';

export default function Login() {

    const { dispatch } = useContext(Context);

    const onSuccess = async googleUser => {
        try {
            const tokenId = googleUser.getAuthResponse().id_token;
            const client = new GraphQLClient('http://localhost:4000/graphql', {
                headers: { authorization: tokenId }
            });
            const { me } = await client.request(ME_QUERY);
            dispatch({ type: "LOGIN_USER", payload: me });
            dispatch({ type: "IS_LOGGED_IN", payload: googleUser.isSignedIn() });
        } catch (err) {
            onFailure(err);
        }
    }

    const onFailure = err => {
        console.error("Error logging in", err)
    }


    return (
        <div>
        <h1>Welcome</h1>
             <GoogleLogin
                clientId="199645287050-2eq6u7n8us9088gn79glhqsmnrjoftkn.apps.googleusercontent.com"
                onSuccess={onSuccess}
                onFailure={onFailure}
                isSignedIn={true}
                buttonText="Login with Google"
                theme="dark"
            />
        </div>

    )
}
