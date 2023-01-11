import styled from 'styled-components'
import { defaultContainer } from '../../../../layouts/DefaultLayout/styles'

export const PostInfoContainer = styled(defaultContainer)`
  background-color: ${({ theme }) => theme.color['base-profile']};
  width: 54rem;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  box-shadow: 0px 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  margin-top: -5.625rem;
`
export const PostInfoContent = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.color.blue};
      text-decoration: none;

      > span {
        font-size: ${({ theme }) => theme.textSize['text-s']};
        margin-right: 0.684375rem;
        font-weight: bold;
      }

      span {
        font-size: ${({ theme }) => theme.textSize['text-s']};
        margin-left: 0.684375rem;
        font-weight: bold;
      }

      svg {
        width: 0.703125rem;
        height: 0.703125rem;
        border-style: bold;
      }
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.textSize['title-xl']};
    line-height: 1.9375rem;
    color: ${({ theme }) => theme.color['base-title']};
    margin-top: 0.5rem;
    margin-bottom: 1.25rem;
  }
`
