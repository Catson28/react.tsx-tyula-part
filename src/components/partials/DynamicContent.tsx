import styled from 'styled-components';
import React, { useState } from 'react';
import Keyboard from './Keyboard';
import { FaKeyboard } from 'react-icons/fa';


interface ContentProps {
  sidebarWidth: string;
}

const ContentContainer = styled.div<ContentProps>`
  margin-left: ${({ sidebarWidth }) => sidebarWidth};
  transition: margin-left 0.5s;
`;

const Content = styled.div`
  padding: 60px 0;
  background-color: #fff;
`;

const FooterContainer = styled.div<ContentProps>`
  position: fixed;
  width: calc(100% - ${({ sidebarWidth }) => sidebarWidth});
  transition: margin-left 0.5s;
  bottom: 0;
  right: 0;
  // width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  // align-items: center;
  padding: 10px 20px;
`;

const CollapseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  // display: flex;
  // align-items: center;
  // justify-content: center;
  // padding: 10px;
  // background-color: #007bff;
  // color: white;
  // border: none;
  // border-radius: 5px;
  // cursor: pointer;
  // transition: background-color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

// const CollapsibleContent = styled.div<{ isOpen: boolean; sidebarWidth: string }>` /* Adicionando sidebarWidth ao tipo de props */
const CollapsibleContent = styled.div<{ isOpen: boolean }>` /* Adicionando sidebarWidth ao tipo de props */
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  transition: margin-left 0.5s;
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  background-color: #555;
  color: #fff;
  padding: 10px;
`;

const DynamicContent = ({ sidebarWidth, children }: React.PropsWithChildren<ContentProps>) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <ContentContainer sidebarWidth={sidebarWidth}>
      <Content>
        {children} {/* Renderizando o conteúdo dinâmico aqui */}


        <FooterContainer sidebarWidth={sidebarWidth}>
          <CollapseButton onClick={toggleCollapse}><FaKeyboard /></CollapseButton>
          <CollapsibleContent isOpen={isOpen}> {/* Passando sidebarWidth como propriedade */}
            <Keyboard/>
          </CollapsibleContent>
        </FooterContainer>
      </Content>
    </ContentContainer>
  );
};

export default DynamicContent;
