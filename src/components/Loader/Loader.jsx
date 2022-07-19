import React from 'react';
import { StyledLoader } from './Styled';

function Loader() {
  return (
    <StyledLoader>
      <div className="lds-dual-ring"></div>
    </StyledLoader>
  );
}

export default Loader;
