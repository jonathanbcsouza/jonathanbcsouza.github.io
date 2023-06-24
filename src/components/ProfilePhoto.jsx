import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  margin: 16px;
  border: 2px solid #000;
  border-radius: 2%;
  background-size: cover;
  background-image: url('https://avatars0.githubusercontent.com/u/25882133?v=4');
`

export const ProfilePhoto = () => <StyledAvatar />
