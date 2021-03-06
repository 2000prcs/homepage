import styled from 'styled-components';
import GithubIcon from '../../assets/icons/github.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import EmailIcon from '../../assets/icons/email.svg';

export const Block = styled.div`
  display: flex;
  margin-right: 5px;
  text-align: center;

  @media screen and (max-width: 425px) {
    margin-right: 0px;
  }
`

export const Container = styled.section`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: clamp(25px,4vw,40px);
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`

const StyledIcon = `
  width: 90%;

  &:hover {
    fill: #eaa9be;
  }

  @media screen and (max-width: 425px) {
    width: 65%;
  }
`

export const StyledGithubIcon = styled(GithubIcon)`
  ${StyledIcon}
`

export const StyledLinkedinIcon = styled(LinkedinIcon)`
  ${StyledIcon}
`

export const StyledInstagramIcon = styled(InstagramIcon)`
  ${StyledIcon}
`

export const StyledEmailIcon = styled(EmailIcon)`
  ${StyledIcon}

  &:hover {
    fill: none;
    stroke: #eaa9be;
  }
`