import React from 'react';
import { StyledFooter } from "./styles";

const currentDate = new Date().getFullYear();


const MakeFooter = () => {
  return (
    <div>

      <br></br>
      <hr></hr>

      <StyledFooter>

        <p>Copyright {currentDate}</p>

      </StyledFooter>

    </div>
  )
}



export default MakeFooter;