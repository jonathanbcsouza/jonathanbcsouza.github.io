import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { MySocialLinks } from './SocialLinks'

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  path {
    transition: fill 0.4s ease;
  }

  svg:hover {
    fill: var(--text-orange);
    height: 30px;
  }
`

const StyledLink = styled.a.attrs(({ $link, $label }) => ({
  href: $link,
  target: '_blank',
  rel: 'noopener noreferrer',
  'aria-label': $label,
  title: $label,
}))`
  margin: 2px;
`

export const SocialMedia = () => {
  return (
    <StyledIcons>
      <IconContext.Provider value={{ size: '32' }}>
        <h3>Let&apos;s Connect!</h3>
        <br />
        <div>
          {MySocialLinks.map((item) => (
            <StyledLink key={item.link} $link={item.link} $label={item.label}>
              {item.component}
            </StyledLink>
          ))}
        </div>
      </IconContext.Provider>
    </StyledIcons>
  )
}
