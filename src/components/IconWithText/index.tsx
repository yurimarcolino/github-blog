import { ReactNode } from 'react'
import { Icon, IconWithTextContainer } from './styles'

interface IconWithTextProps {
  iconColor: string
  icon: ReactNode
  text: string | ReactNode
}

export function IconWithText({ iconColor, icon, text }: IconWithTextProps) {
  return (
    <IconWithTextContainer>
      <Icon iconColor={iconColor}>{icon}</Icon>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </IconWithTextContainer>
  )
}
