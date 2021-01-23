import styled from 'styled-components';

export const Container = styled.div`
  color: #ffffff;
  width: 80%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  margin-bottom: 20px;
  width: 100%;
`

export const Block = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
  border-radius: 10%;
  cursor: pointer;
  display: flex;
  width: 27em;
  height: 23em;
  margin: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3), 0 2px 3px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background-image: ${({ gif }) => `url(${gif})`};
  }

  @media screen and (min-width: 1440px) {
    width: 33%;
  }

  @media screen and (max-width: 768px) {
    height: 30%;
    width: auto;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 40px;
`

export const Text = styled.div`
  position: relative;
  right: 0%;
  top: 100%;
`