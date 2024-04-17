import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import IntroSection from './IntroSection';
import MainContent from './MainContent';
import CallToAction from './CallToAction';
import Footer from './Footer';
import {  styled, createGlobalStyle }  from 'styled-components';


// Defina um componente global para os estilos importados do arquivo framework.css
const GlobalStyle = createGlobalStyle`
  @import url("layout/styles/layout.css");
`;

// Definindo os estilos com o Styled Components
const Wrapper = styled.div`
`;

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div id="top">
          <Header />
          <Navigation />
          <IntroSection />
          <MainContent />
          <CallToAction />
          <Footer />
          <a id="backtotop" href="#top"><i className="fa fa-chevron-up"></i></a>
        </div>
      </Wrapper>
    </>

  );
}

export default Home;
