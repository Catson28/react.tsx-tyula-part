import React, { useState } from 'react';
import styled from 'styled-components';

interface TabProps {
  active?: boolean;
}

const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const Tabs = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

const Tab = styled.div<TabProps>`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: none;
  border-bottom: ${props => props.active ? '2px solid #007bff' : '2px solid transparent'};
  color: ${props => props.active ? '#007bff' : '#6c757d'};
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const Content = styled.div`
  margin-top: 1rem;
`;

const StyledComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <p>Conteúdo da primeira aba.</p>;
      case 1:
        return <p>Conteúdo da segunda aba.</p>;
      case 2:
        return <p>Conteúdo da terceira aba.</p>;
      default:
        return <p>Conteúdo padrão.</p>;
    }
  };

  return (
    <ContainerFluid>
      <Container>
        <Tabs role="tablist">
          <Tab active={activeTab === 0} onClick={() => handleTabClick(0)} role="tab" aria-selected={activeTab === 0} tabIndex={0}>Aba 1</Tab>
          <Tab active={activeTab === 1} onClick={() => handleTabClick(1)} role="tab" aria-selected={activeTab === 1} tabIndex={1}>Aba 2</Tab>
          <Tab active={activeTab === 2} onClick={() => handleTabClick(2)} role="tab" aria-selected={activeTab === 2} tabIndex={2}>Aba 3</Tab>
        </Tabs>
        <Content role="tabpanel">
          {renderContent()}
        </Content>
      </Container>
    </ContainerFluid>
  );
};

export default StyledComponent;
