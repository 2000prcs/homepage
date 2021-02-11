import styled from 'styled-components';
import GithubIcon from '../../icons/github.svg';

export const Block = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
  border-radius: 10%;
  cursor: pointer;
  display: flex;
  width: 250px;
  height: 500px;
  margin: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3), 0 2px 3px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background-image: ${({ gif }) => `url(${gif})`};
    width: 280px;

    @media screen and (max-width: 425px) {
      width: 180px;
    }
  }

  @media screen and (max-width: 425px) {
    width: 150px;
    height: 300px;
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
  padding-top: 80px;
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
`

export const StyledGithubIcon = styled(GithubIcon)`
  width: 40px;
  
  @media screen and (max-width: 768px) {
    width: 30px;
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

