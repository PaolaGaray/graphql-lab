import React, { useContext } from 'react';
import { Redirect } from 'react-router';

import Login from "../components/Auth/Login";
import Context from '../context'

export default function Splash() {
    const { state } = useContext(Context)
    return state.isAuth ? <Redirect to="/" /> : <Login />
}
