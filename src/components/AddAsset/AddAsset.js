import React from "react";
import { StyledButton } from "./AddAsset.styles";

const AddAsset = (props) => {
  return (
    <StyledButton onClick={props.handleVisibility}>Add Asset</StyledButton>
  );
};

export default AddAsset;
