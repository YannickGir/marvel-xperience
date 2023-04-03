import React from 'react'
import MarvelLogo from "../../../assets/images/marvel-logo-personnages.jpg"
import tw from 'twin.macro'
import styled from 'styled-components'

interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
  }

const LogoContainer = styled.div`
${tw`
flex
items-center
`};
`;


const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`

    width: auto;
    ${ tw`h-6 md:h-9`};

    img {
        width: auto;
        height: 500%;
    }

`;
export default function Logo(props: ILogoProps) {
    const { color, bgColor } = props;
  return (
    <LogoContainer>
        <Image>
            <img src={bgColor === "dark" ? MarvelLogo : MarvelLogo} alt="MarvelLogo"/>
        </Image>
    </LogoContainer>
  )
}
