import { SearchInputContainer, SearchInputContent } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <SearchInputContent>
        <header>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </header>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchInputContent>
    </SearchInputContainer>
  )
}
