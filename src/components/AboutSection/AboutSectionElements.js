import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  /* height: 650px; */
  padding: 60px;
  border-radius: 10px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  box-shadow: 0 16px 24px 0 rgba(48, 49, 51, 0.1);
`

export const Intro = styled.div`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Block = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  border-radius: 10%;
  display: flex;
  width: 15em;
  height: 15em;
  margin: 10px;
  padding: 40px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3), 0 2px 3px 0 rgba(0, 0, 0, 0.1);
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`