import styled from 'styled-components';

export const Container = styled.section`
  color: #ffffff;
  width: 40%;

  @media screen and (max-width: 1440px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 75%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: clamp(25px,3vw,40px);
  margin-bottom: 20px;
  width: 100%;
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
  }
`

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`

export const Name = styled.h1``

export const Technologies = styled.div`
  margin: 20px 0;
`

export const Description = styled.div`
  margin-bottom: 20px;
`
