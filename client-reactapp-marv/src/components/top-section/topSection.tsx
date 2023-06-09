import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import MarvelPng from "../../assets/images/pngwing.com.png";
// import BlobImg from "../../assets/images/blob.svg";
import { SCREENS } from '../../components/responsive';

const TopSectionContainer = styled.div`
min-height:100px;
${tw`
        w-full
        flex
        justify-between
        pl-3
        pr-3
        lg:pr-24
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
    mr-72
    
  `};
`;

const BlobContainer = styled.div`
  width: 5em;
  position: absolute;
  right: -5em;
  top: -7em;
  z-index: 1;
 

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 20em;
    max-height: 10em;
    right: -18em;
    top: -12em;
  }

  @media (min-width: ${SCREENS.md}) {
    width: 30em;
    max-height: 30em;
    right: -40em;
    top: -15em;
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 30em;
    max-height: 30em;
    right: -24em;
    top: -15em;
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 40em;
    max-height: 30em;
    left: 60em;
    top: -15em;
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
    right: -18em;
    top: -8em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -24em;
    top: -8em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 28em;
    right: -24em;
    top: -8em;
  }
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer/>
      <RightContainer>
            {/* <BlobContainer>
                <img src={BlobImg} alt='blob.svg'/>
            </BlobContainer> */}
            <StandaloneMarv>
                <img src={MarvelPng} alt='Marvel.png' />
            </StandaloneMarv>
      </RightContainer>
    </TopSectionContainer>
  );
}

