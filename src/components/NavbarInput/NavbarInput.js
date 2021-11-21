import React from 'react';
import {withRouter} from 'react-router-dom';
import {StyledInput} from './NavbbarInput.styles';

class NavbarInput extends React.Component {
  render(){
    return(
      <div>
        <StyledInput type='text' placeholder='Search...' />
      </div>
    )}
}

export default withRouter(NavbarInput)