import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';


import MarvelPng from "../../assets/images/pngwing.com.png";
import BlobImg from "../../assets/images/blob.svg";
import { SCREENS } from '../../components/responsive';

const TopSectionContainer = styled.div`
min-height:100px;
${tw`
        
        w-full
        flex
        justify-between
        pl-3
        pr-3
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    ml-5
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mr-36
  `};
`;

const BlobContainer = styled.div`
  width: 20em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: 1;
  transform: rotate(-30deg);

  img {
    width: 60%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -20em;
    top: -12em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -28em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 60em;
    max-height: 30em;
    right: -30em;
    top: -17em;
    transform: rotate(-20deg);
  }
`;

const StandaloneMarv = styled.div`
  z-index: 2;
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 60%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -10em;
    top: -8em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -12em;
    top: -8em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 28em;
    right: -13em;
    top: -8em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
       
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} />
        </BlobContainer>
        <StandaloneMarv>
          <img src={MarvelPng} />
        </StandaloneMarv>
      </RightContainer>
    </TopSectionContainer>
  );
}

