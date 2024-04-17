import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Navbar from "../../partials/Navbar";
import IndexNavbarComponent from "../../partials/IndexNavbarComponent";
import Carousel from "../../partials/Carousel";
import Caroutusel from "../../partials/carrocel/Caroutusel";

import TelaDoNavegador from '../../partials/HelperResposnve/TelaDoNavegador';

import styled from 'styled-components';

const ContainerFluid = styled.div`
  width: 100%;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Col = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 20%;
    max-width: 20%;
  }
`;

const LinkStyled = styled(Link)`
  display: block;
  padding: 1rem;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
  color: #212529;
  text-decoration: none;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: block;
  padding: 1rem;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
  text-align: center;
`;

const HomePage: React.FC = () => {
  const slides = [
    { title: 'Slide 1', text: 'Lorem ipsum dolor sit amet.', image: 'http://localhost:8000/media/images/8515cd56b16ebe3b2f41af8091762ec3.JPEG' },
    { title: 'Slide 2', text: 'Consectetur adipiscing elit.', image: 'http://localhost:8000/media/images/277254782_5015332358560493_7370300353602031270_n_4hogsk4.jpg' },
    { title: 'Slide 3', text: 'Sed do eiusmod tempor incididunt ut labore.', image: 'http://localhost:8000/media/images/8515cd56b16ebe3b2f41af8091762ec3.JPEG' },
    { title: 'Slide 4', text: 'Ut enim ad minim veniam.', image: 'http://localhost:8000/media/images/1668952320921.JPEG' },
    { title: 'Slide 5', text: 'Quis nostrud exercitation ullamco.', image: 'http://localhost:8000/media/images/332490476_6243701845719046_700218137012171250_n_PyqohqP.JPEG' },
  ];
  return (
    <>
      <IndexNavbarComponent />
      <Carousel />
      <Navbar />

      <ContainerFluid>
        <Container>
          <Row>
            <Col>
              <LinkStyled to="/AllBeauty">CRUDS</LinkStyled>
            </Col>
            <Col>
              <LinkStyled to="/beauty">CARREGAR IMAGEM</LinkStyled>
            </Col>
            <Col>
              <LinkStyled to="/items">CRUDS CONTEXT API</LinkStyled>
            </Col>
            <Col>
              <LinkStyled to="/services">CRUDS Test</LinkStyled>
            </Col>
            <Col>
              <LinkStyled to="/estilo">estilos</LinkStyled>
              <StyledDiv>Row column</StyledDiv>
            </Col>
            <Col>
              <LinkStyled to="/palavras">palavras</LinkStyled>
              <StyledDiv>Row column</StyledDiv>
            </Col>
            {/* Repita conforme necessário */}
          </Row>
        </Container>
      </ContainerFluid> 

      <TelaDoNavegador />

    </>

  );
};

export default HomePage;
