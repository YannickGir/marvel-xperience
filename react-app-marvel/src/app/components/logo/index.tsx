import React from 'react'
import MarvelLogo from "../../../assets/images/marvel-logo-personnages.jpg"
import tw from 'twin.macro'
import styled from 'styled-components'

const LogoContainer = styled.div`
${tw`
flex
items-center
`};
`;

const LogoText = styled.div `
    ${tw `
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `};
`;

const Image = styled.div`

    width: auto;
    ${ tw`h-6 md:h-9`};

    img {
        width: auto;
        height: 100%;
    }

`;
export default function Logo() {
  return (
    <LogoContainer>
        <Image>
            <img src={MarvelLogo} alt="MarvelLogo"/>
        </Image>
    </LogoContainer>
  )
}
