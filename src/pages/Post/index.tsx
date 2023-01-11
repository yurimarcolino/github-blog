import { markdown, PostBody } from './components/PostBody'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <PostBody content={markdown} />
    </PostContainer>
  )
}
