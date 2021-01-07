import React from 'react';
//import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Header = () => {
  //const history = useHistory();
  return (
      <div>
        <Link to="/">home</Link>
        <div> |</div>
        <Link to="/login">login</Link>
      </div>
  );
};

export default Header;
