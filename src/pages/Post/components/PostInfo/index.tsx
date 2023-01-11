import { PostInfoContainer, PostInfoContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconsContainer } from '../../../Home/components/Profile/styles'
import { IconWithText } from '../../../../components/IconWithText'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoContent>
        <header>
          <a>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </a>
          <a>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <h1>JavaScript data types and data structures</h1>

        <IconsContainer>
          <IconWithText
            iconColor="#C4D4E3"
            icon={<FontAwesomeIcon icon={faGithub} />}
            text="yurimarcolino"
          />
          <IconWithText
            iconColor="#C4D4E3"
            icon={<FontAwesomeIcon icon={faCalendarDay} />}
            text="Rocketseat"
          />
          <IconWithText
            iconColor="#C4D4E3"
            icon={<FontAwesomeIcon icon={faComment} />}
            text="32 seguidores"
          />
        </IconsContainer>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
