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

export const Block = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
`

export const Intro = styled.div`
  margin-bottom: 20px;
  width: 100%;
`

export const Image = styled.img`
  margin-right: 5px;
`
export const List = styled.div`
  display: flex;
  flex-direction: row;
  font-size: clamp(15px,2vw,22px);
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-size: clamp(25px,3vw,40px);
  margin-bottom: 20px;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    margin-right: 10px;
  }
`

export const Paragraph = styled.p`
  font-size: clamp(17px,2vw,22px);
`