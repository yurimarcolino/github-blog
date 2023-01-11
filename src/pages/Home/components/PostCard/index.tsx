import { PostCardContainer, PostCardContent } from './styles'

export function PostCard() {
  return (
    <PostCardContainer to="/post">
      <PostCardContent>
        <header>
          <h2>JavaScript data types and data structures</h2>
          <p>Há 1 dia</p>
        </header>
        <main>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in...
        </main>
      </PostCardContent>
    </PostCardContainer>
  )
}
