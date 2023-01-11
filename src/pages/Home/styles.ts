import styled from 'styled-components'
import { defaultContainer } from '../../layouts/DefaultLayout/styles'

export const HomeContainer = styled.div``

export const PostCardListContainer = styled(defaultContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  column-gap: 2rem;
  margin-bottom: 14rem;
`
