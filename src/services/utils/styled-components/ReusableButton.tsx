import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  as?: keyof JSX.IntrinsicElements;
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void; // Adicionando onClick como uma propriedade opcional
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => (props.primary ? 'blue' : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};
  padding: 10px 20px;
  border: 2px solid blue;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.primary ? 'darkblue' : '#f0f0f0')};
  }
`;

const ReusableButton: React.FC<ButtonProps> = ({ children, primary, onClick, ...rest }) => {
  return <StyledButton primary={primary} onClick={onClick} {...rest}>{children}</StyledButton>;
};

export default ReusableButton;
