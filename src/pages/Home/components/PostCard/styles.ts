import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardContainer = styled(Link)`
  margin-top: 3rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`

export const PostCardContent = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2.3125rem 2rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.color['base-post']};

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      max-width: 13.75rem;
      font-weight: bold;
      line-height: 2rem;
      font-size: ${({ theme }) => theme.textSize['title-m']};
      color: ${({ theme }) => theme.color['base-title']};
    }

    p {
      margin-top: 6px;
      font-size: ${({ theme }) => theme.textSize['text-m']};
      line-height: 1.375rem;
      color: ${({ theme }) => theme.color['base-span']};
    }
  }

  main {
    margin-top: 1.25rem;
    line-height: 1.625rem;
    color: ${({ theme }) => theme.color['base-title']};
  }
`
