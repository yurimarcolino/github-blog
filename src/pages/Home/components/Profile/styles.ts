import styled from 'styled-components'
import { defaultContainer } from '../../../../layouts/DefaultLayout/styles'

export const ProfileContainer = styled(defaultContainer)`
  background-color: ${({ theme }) => theme.color['base-profile']};
  width: 54rem;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  box-shadow: 0px 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  margin-top: -5.625rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }

  > div {
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: ${({ theme }) => theme.textSize['title-xl']};
        line-height: 1.9375rem;
        color: ${({ theme }) => theme.color['base-title']};
      }

      a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.color.blue};
        text-decoration: none;

        span {
          font-size: ${({ theme }) => theme.textSize['text-s']};
          margin-right: 0.523125rem;
        }

        svg {
          width: 0.703125rem;
          height: 0.703125rem;
          border-style: bold;
        }
      }

      a:hover {
        opacity: 0.7;
        transition: 0.2s;
      }
    }

    main {
      margin-top: 0.5rem;
      line-height: 1.625rem;
      color: ${({ theme }) => theme.color['base-text']};
    }

    footer {
      margin-top: 1.5rem;
    }
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.675625rem;
`
