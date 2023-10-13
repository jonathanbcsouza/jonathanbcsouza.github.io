import React, { useState } from 'react'
import styled from 'styled-components'
import { DropdownMenu } from './DropdownMenu'
import { NavLink } from 'react-router-dom'
import data from '../data/data.json'

const StyledNav = styled.nav`
  top: 0;
  width: 100%;
  padding-left: 5vw;
  z-index: 2;
  text-transform: uppercase;

  @media (max-width: 615px) {
    padding-left: 0vw;
    position: fixed;
  }

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    text-align: center;

    @media (max-width: 615px) {
      flex-direction: column;
      background: var(--background-colour);
    }

    * :hover {
      color: var(--text-hovers);
      border-bottom: 1px solid;
      border-color: var(--text-hovers);
    }
  }
`

const StyledLi = styled.div`
  a {
    display: block;
    padding: 30px;
    color: var(--text-white);
  }
  @media (max-width: 615px) {
    display: ${(props) => (props.isBtnClicked ? 'none' : '')};
    height: inherit;
  }
`

export const Navbar = () => {
  const [open, setOpen] = useState(true)
  const handleToggle = () => setOpen(!open)

  return (
    <StyledNav>
      <ul>
        <div onClick={handleToggle}>
          <DropdownMenu isBtnClicked={open} />
        </div>
        {data.navitems.map((item) => {
          return (
            <StyledLi isBtnClicked={open} key={item.id}>
              <NavLink
                onClick={handleToggle}
                activeStyle={{ background: '#121212' }}
                to={item.url}
              >
                {item.title}
              </NavLink>
            </StyledLi>
          )
        })}
      </ul>
    </StyledNav>
  )
}
