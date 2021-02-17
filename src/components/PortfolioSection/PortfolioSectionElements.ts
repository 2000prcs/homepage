import styled from 'styled-components';
import { BlockProps } from './ElementsProps';
import GithubIcon from '../../icons/github.svg';
import PlayIcon from '../../icons/play.svg';

export const Block = styled.div<BlockProps>`
  background-image: ${({ gif, image, isGifPlaying }) => (isGifPlaying ? `url(${gif})` : `url(${image})`)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10%;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3), 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  height: 550px;
  margin-right: 10px;
  width: 280px;

  @media screen and (max-width: 1024px) {
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 380px;
    width: 180px;
  }
`

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Container = styled.section`
  color: #ffffff;
  padding-top: 50px;
  width: 40%;

  @media screen and (max-width: 1440px) {
    width: 60%;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.div`
  font-size: clamp(13px,2vw,22px);
  margin-bottom: 10px;
`

export const Name = styled.h1`
  font-size: clamp(25px,3vw,35px);
  margin-right: 10px;
`

export const Link = styled.a`
  display: flex;
`

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  border-radius: 10%;
  display: flex;
  justify-content: center;
  width: 100%;

  ${Block}:hover & {
    background-color: transparent;
  }
`

export const StyledPlayIcon = styled(PlayIcon)`
  width: 25%;
  height: 25%;

  ${Block}:hover & {
    fill: #eaa9be;
    stroke: #bdbcbc;
  }
`

export const StyledGithubIcon = styled(GithubIcon)`
  height: 40px;
  width: 40px;

  &:hover {
    fill: #eaa9be;
  }
  
  @media screen and (max-width: 768px) {
    height: 25px;
    width: 25px;
  }
`

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  width: 60%;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
`

export const Technologies = styled.div`
  font-size: clamp(13px,2vw,22px);
  font-style: italic;
  margin: 20px 0;
`

export const Title = styled.h1`
  font-size: clamp(25px,3vw,40px);
  margin-bottom: 20px;
  width: 100%;
`

