import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";


import Context from "../../context";

export default function Signout() {

  const { dispatch } = useContext(Context);

  const onSignout = () => {
    dispatch({ type: "SIGNOUT_USER" });
    console.log("Signed out user");
  };

  return (
    <GoogleLogout
      onLogoutSuccess={onSignout}
      render={({ onClick }) => (
        <span  onClick={onClick}>
            onSignout
        </span>
      )}
    />
  );
};



