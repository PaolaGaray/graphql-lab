import React, { useContext } from 'react';
import { GraphQLClient } from "graphql-request";
import { GoogleLogin } from "react-google-login";

import Context from '../../context';

const ME_QUERY = `
    {
        me {
        _id
        name
        email
        picture
        }
    }
  `

export default function Login() {

    const { dispatch } = useContext(Context);

    const onSuccess = async googleUser => {
        const tokenId = googleUser.getAuthResponse().id_token;
        const client = new GraphQLClient('http://localhost:4000/graphql', {
            headers: { authorization: tokenId }
        })
        const data = await client.request(ME_QUERY);
        //console.log({ data });
        dispatch({ type: "LOGIN_USER", payload: data.me })
      };


    return (
        <GoogleLogin
            clientId="199645287050-2eq6u7n8us9088gn79glhqsmnrjoftkn.apps.googleusercontent.com"
            onSuccess={onSuccess}
            isSignedIn={true}
        />
    )
}
