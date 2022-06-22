import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { data } from '../utils/data';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const ItemsWrapper = styled.main`
  display: flex;
  margin: 24px 80px 67px 80px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 880px) {
    justify-content: space-between;
  }
  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-family: 'Exo2.0';
  font-size: 3.6rem;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 1px 1px #000000;
  font-weight: 300;
  font-style: normal;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;



const Main = () => {
  return (
    <Container>
      <Title>Ты сегодня покормил кота?</Title>
      <ItemsWrapper>
        {data.map(item => <Card info={item} key={item.type}/>)}
      </ItemsWrapper>
    </Container>
  );
};

export default Main;
