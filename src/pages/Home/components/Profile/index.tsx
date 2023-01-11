import { IconWithText } from '../../../../components/IconWithText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconsContainer, ProfileContainer, ProfileContent } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img
          src="https://avatars.githubusercontent.com/u/54558132?v=4"
          alt="profile picture"
        />
        <div>
          <header>
            <h1>Cameron Williamson</h1>
            <a
              href="https://github.com/yurimarcolino"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <main>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </main>

          <footer>
            <IconsContainer>
              <IconWithText
                iconColor="#C4D4E3"
                icon={<FontAwesomeIcon icon={faGithub} />}
                text="yurimarcolino"
              />
              <IconWithText
                iconColor="#C4D4E3"
                icon={<FontAwesomeIcon icon={faBuilding} />}
                text="Rocketseat"
              />
              <IconWithText
                iconColor="#C4D4E3"
                icon={<FontAwesomeIcon icon={faUserGroup} />}
                text="32 seguidores"
              />
            </IconsContainer>
          </footer>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
