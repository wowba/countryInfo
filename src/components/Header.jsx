import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { ReactComponent as DarkModeIcon } from '../asset/dark_mode.svg'
import themeState from '../atom/themeState'

export const Header = () => {

  const [themeValue, setThemeState] = useRecoilState(themeState)

  return (
    <HeaderLayout>
      <div>
        <HeaderTitle>
          Where in the world?
        </HeaderTitle>
        <DarkModeBox onClick={() => setThemeState(!themeValue)}>
          <DarkModeImg />
          <p>Dark Mode</p>
        </DarkModeBox>
      </div>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 3px solid ${({ theme }) => theme.mode.borderColor};
  background-color: ${({ theme }) => theme.mode.elementColor};

  & > div {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;

    width: auto;
    height: 5rem;

    max-width: 1440px;
    padding: 0 3rem 0 3rem;
  }
`

const DarkModeImg = styled(DarkModeIcon)`
  fill: hsl(200, 15%, 40%);
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

  &:hover {
    cursor: pointer;
  }
`
