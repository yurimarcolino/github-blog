import styled from "styled-components";
import coverImg from '../../assets/cover.png';

export const HeaderContainer = styled.div`
  background: url(${coverImg}) no-repeat center;

  background-size: cover;
  padding: 4rem 0 8.375rem;
`

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 2.81rem;
    height: 2.5rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.textSize["title-xl"]};
    color: ${({ theme }) => theme.color.blue};
    font-weight: 400;
  }
`
