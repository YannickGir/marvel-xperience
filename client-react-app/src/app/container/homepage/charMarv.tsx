import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

const CharMarvContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
    bg-indigo-500
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

export function CharMarv() {

  return (
    <CharMarvContainer>
      <Title>Explore Our Top Deals</Title>
        <CarsContainer>test
        </CarsContainer>
    </CharMarvContainer>
  );
}
