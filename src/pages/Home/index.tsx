import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { HomeContainer, PostCardListContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchInput />
      <PostCardListContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardListContainer>
    </HomeContainer>
  )
}
