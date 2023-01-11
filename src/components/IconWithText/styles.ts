import styled from 'styled-components'

export const IconWithTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    color: ${({ theme }) => theme.color['base-subtitle']};
    line-height: 1.625rem;
  }
`

interface IconsProps {
  iconColor: string
}

export const Icon = styled.div<IconsProps>`
  width: 1.125rem;
  height: 1.125rem;

  color: iconColor;
`
