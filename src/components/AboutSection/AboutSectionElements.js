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

export const Intro = styled.div`
  margin-bottom: 20px;
  width: 100%;
`

export const Paragraph = styled.p``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: clamp(25px,3vw,40px);
  margin-bottom: 20px;
  width: 100%;
`

export const Block = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  margin-right: 5px;
`

export const Technologies = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Interests = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Text = styled.div`
  position: relative;
  right: 0%;
  top: 100%;
`