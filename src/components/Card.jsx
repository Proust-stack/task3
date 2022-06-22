import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import catImage from '../assets/cat.png';

const ItemQuantity = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 1.6rem;
  right: 1.6rem;
  flex: 1 1 auto;
  background-color: ${({ isChecked, isDisabled, isHovered }) =>
    isDisabled
      ? `#B3B3B3`
      : isChecked
      ? isHovered
        ? `#E52E7A`
        : `#D91667`
      : isHovered
      ? `#1698D9`
      : `#2EA8E6`};
  z-index: 2;
  font-weight: 400;
  font-size: 4.2rem;
  line-height: 60%;
  color: ${({ theme }) => theme.colors.white};
  & span {
    margin-bottom: -1.3rem;
    font-size: 2.1rem;
  }
`;

const CardItem = styled.div`
  color: hsla(0,0%,70%,.5);
  width: 320px;
  height: 509px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  @media (max-width: 880px) {
    margin-right: 0;
  }
  margin-top: 24px;
  flex: 0 1 auto;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const CardImage = styled.img`
  position: absolute;
  left: 0%;
  bottom: 0%;
  object-fit: none;
  z-index: 1;
`;

const CardTop = styled.div`
  height: 94%;
  width: 100%;
  position: relative;
  border: ${({ isChecked, isDisabled, isHovered }) =>
    isDisabled
      ? `4px solid #B3B3B3`
      : isChecked
      ? isHovered
        ? `4px solid #E52E7A`
        : `4px solid #D91667`
      : isHovered
      ? `4px solid #1698D9`
      : `4px solid #2EA8E6`};
  border-radius: 0 0 12px 12px;
  background: ${({ theme }) => theme.colors.bg};
  overflow: hidden;
  border-top: none;
`;
const CardHeader = styled.div`
  display: flex;
  height: 44px;
  position: relative;
`;
const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.5);
  z-index: 5;
  width: 100%;
  height: 100%;
`;

const LeftSquare = styled.div`
  width: 42px;
  background: linear-gradient(
    -44deg,
    #f2f2f2,
    #f2f2f2 28px,
    ${({ isChecked, isDisabled, isHovered }) =>
        isDisabled
          ? `#B3B3B3`
          : isChecked
          ? isHovered
            ? `#E52E7A`
            : `#D91667`
          : isHovered
          ? `#1698D9`
          : `#2EA8E6`}
      0,
    ${({ isChecked, isDisabled, isHovered }) =>
        isDisabled
          ? `#B3B3B3`
          : isChecked
          ? isHovered
            ? `#E52E7A`
            : `#D91667`
          : isHovered
          ? `#1698D9`
          : `#2EA8E6`}
      32px,
    transparent 0
  );
  margin-bottom: -2.5px;
  filter: ${({ isDisabled }) => (isDisabled ? 'brightness(1.03)' : 'none')};
`;
const RightRectangle = styled.div`
position: relative;
  flex-grow: 1;
  padding: 15px 0 0 0;
  border: ${({ isChecked, isDisabled, isHovered }) =>
    isDisabled
      ? `4px solid #B3B3B3`
      : isChecked
      ? isHovered
        ? `4px solid #E52E7A`
        : `4px solid #D91667`
      : isHovered
      ? `4px solid #1698D9`
      : `4px solid #2EA8E6`};
  border-bottom: none;
  border-left: none;
  border-radius: 0 12px 0 0;
  background: ${({ theme }) => theme.colors.bg};
  font-weight: 400;
  font-size: 1.6rem;
  & span {
    color: ${({ isChecked, isHovered }) =>
      isChecked && isHovered ? '#E62E7A' : '#666666'};
    margin-left: 1.5rem;
    font-family: 'Trebuchet MS';
    font-weight: 400;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const CardFooter = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: end;
  color: ${({ isDisabled }) => (isDisabled ? '#FFFF66' : '#ffffff')};
  background: transparent;
  height: 6%;
  & span {
    
  }
  & span a {
    color: ${({ theme }) => theme.colors.default};
    font-weight: 700;
    margin-left: 0.5rem;
    text-decoration: none;
    border-bottom: 2px dashed ${({ theme }) => theme.colors.default};
  }
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 48px;
  width: 100%;
  height: 15rem;
  color: ${({ theme }) => theme.colors.baseText};
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 4.8rem;
  color: #000000;
  margin-top: 0.5rem;
  filter: ${({ isDisabled }) => (isDisabled ? 'opacity(25%) grayscale(100%)' : 'none')};
`;
const Type = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  color: #000000;
  margin-top: 0.5rem;
  filter: ${({ isDisabled }) => (isDisabled ? 'opacity(25%) grayscale(100%)' : 'none')};
`;
const Info = styled.div`
  font-weight: 700;
  width: 50%;
  height: 4.8rem;
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 1.4rem;
  
`;

function Card(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { info } = props;
  const { isDisabled, type, promo, footerTitle, weight } = info;

  const onClickHandler = () => {
    if (isDisabled) return;
    setIsChecked(!isChecked);
  };
  const onMouseLeaveHandler = () => {
    if (isDisabled) return;
    setIsHovered(!isHovered);
  };
  return (
    <CardItem
      isChecked={isChecked}
      isHovered={isHovered}
      isDisabled={isDisabled}
    >
      <CardHeader>
        
        <LeftSquare
          isChecked={isChecked}
          isHovered={isHovered}
          isDisabled={isDisabled}
        ></LeftSquare>
        <RightRectangle
          isChecked={isChecked}
          isHovered={isHovered}
          isDisabled={isDisabled}
        >
          {isDisabled ? <Filter/> : null}
          {isChecked && isHovered ? (
            <span>Котэ не одобряет?</span>
          ) : (
            <span>Сказочное заморское яство</span>
          )}
        </RightRectangle>
      </CardHeader>
      <CardTop
        onClick={onClickHandler}
        onMouseLeave={onMouseLeaveHandler}
        isChecked={isChecked}
        isHovered={isHovered}
        isDisabled={isDisabled}
      >
        {isDisabled ? <Filter/> : null}
        <CardInfo>
          <Name isDisabled={isDisabled}>Нямушка</Name>
          <Type isDisabled={isDisabled}>{type}</Type>
          <Info>{promo}</Info>
        </CardInfo>
        <ItemQuantity
          isChecked={isChecked}
          isHovered={isHovered}
          isDisabled={isDisabled}
        >
          {weight} 
          <span>кг</span>
        </ItemQuantity>
        <CardImage src={catImage} />
      </CardTop>
      <CardFooter isDisabled={isDisabled}>
        {isDisabled && <span>Печалька, {type} закончился.</span>}
        {!isChecked && !isDisabled && (
          <span>
            Чего сидишь? Порадуй котэ,{' '}
            <Link to="/" onClick={onClickHandler}>
              купи.
            </Link>
          </span>
        )}
        {isChecked && <span>{footerTitle}</span>}
      </CardFooter>
    </CardItem>
  );
}

export default Card;
