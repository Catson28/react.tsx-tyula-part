import React from "react";
import styled from "styled-components";

type ArrowProps = {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const CustomButton = styled.button`
  position: fixed; /* Alterado para 'fixed' para que o botão fique fixo na tela */
  top: 50%;
  left: 10px; /* Posicionado à esquerda da tela */
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  z-index: 1000; /* Certifique-se de que o botão apareça sobre outros elementos */
`;


const CustomNextArrow: React.FC<ArrowProps> = ({ style, className, onClick }) => (
  <CustomButton style={style} className={className} onClick={onClick}>
    Next
  </CustomButton>
);

const CustomPrevArrow: React.FC<ArrowProps> = ({ style, className, onClick }) => (
  <CustomButton style={style} className={className} onClick={onClick} >
    Prev
  </CustomButton>
);

export { CustomNextArrow, CustomPrevArrow };
