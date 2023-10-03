import React from 'react'
import styled from 'styled-components'

import darkMode from '../asset/dark_mode.svg'

export const Header = () => {
  return (
    <HeaderLayout>
      <div>
        <HeaderTitle>
          Where in the world?
        </HeaderTitle>
        <DarkModeBox>
          <img src={darkMode} alt="" />
          <p>Dark Mode</p>
        </DarkModeBox>
      </div>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 3px solid hsl(0, 0%, 90%);
  background-color: hsl(0, 0%, 100%);

  & > div {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;

    width: auto;
    height: 5rem;

    max-width: 1440px;
  }
`

const HeaderTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 800;
  color: hsl(200, 15%, 8%);
`

const DarkModeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 600;
  color: hsl(200, 15%, 40%);
`
