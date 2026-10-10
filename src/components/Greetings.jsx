import styled from 'styled-components'

const StyledGreetings = styled.p`
  color: hsl(35, 100%, ${(props) => props.$lightness + '%'});
`

export const Greetings = ({ greeting, hsl }) => {
  return <StyledGreetings $lightness={hsl}>{greeting}</StyledGreetings>
}
