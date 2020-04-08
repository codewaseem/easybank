import React from "react";
import styled from "@emotion/styled";

interface InviteButtonProps extends React.ButtonHTMLAttributes<any> {}

const StyledButton = styled.button`
  background: linear-gradient(90deg, var(--lime-green), var(--bright-cyan));
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: 1px solid transparent;
  border-radius: 20px;
  outline: 0;
  width: fit-content;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px var(--lime-green);
  }
  &:focus {
    border: 1px solid var(--dark-blue);
  }
`;

const InviteButton: React.FC<InviteButtonProps> = ({ ...props }) => {
  return <StyledButton {...props}>Request Invite</StyledButton>;
};

export default InviteButton;
