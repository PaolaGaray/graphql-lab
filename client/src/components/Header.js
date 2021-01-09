import React, { useContext } from 'react';

import Context from '../context'

const Header = () => {
  const { state } = useContext(Context);
  const { currentUser } = state;

  return (
      <div>
        <h1>Cuidemonos Juntos</h1>
        { currentUser && (
          <div>
            <img
              src={currentUser.picture}
              alt={currentUser.name}
            />
            <h3>{currentUser.name}</h3>
          </div>
        )}
      </div>
  );
};

export default Header;
