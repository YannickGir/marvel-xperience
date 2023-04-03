import React from 'react';
import styled from "styled-components";
import tw from 'twin.macro';
import NavBar from '../../components/navbar';
import { TopSection } from './topSection';
import { Footer } from "../../components/footer";
import { CharMarv } from "./charMarv";

const PageContainer = styled.div`
${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export default function HomePage() {
  return <PageContainer>
    <NavBar/>
    <TopSection/>
    <CharMarv />
    <Footer />
  </PageContainer>
}
