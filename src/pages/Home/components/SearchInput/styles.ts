import styled from 'styled-components'
import { defaultContainer } from '../../../../layouts/DefaultLayout/styles'

export const SearchInputContainer = styled(defaultContainer)`
  margin-top: 4.5rem;
`

export const SearchInputContent = styled.div`
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: ${({ theme }) => theme.textSize['title-m']};
      line-height: 1.8125rem;
    }

    span {
      font-size: ${({ theme }) => theme.textSize['text-m']};
      line-height: 1.375rem;
    }
  }

  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;
    margin-top: 0.75rem;
    border-radius: 0.375rem;
    background-color: ${({ theme }) => theme.color['base-input']};
    border: 1px solid ${({ theme }) => theme.color['base-border']};
    color: ${({ theme }) => theme.color['base-text']};

    &:focus {
      border-color: ${({ theme }) => theme.color.blue};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.color['base-label']};
      line-height: 1.625rem;
    }
  }
`
