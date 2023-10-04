import React from 'react'
import styled from 'styled-components'

import { MainContentBox } from '../components/MainContentBox'
import { ReactComponent as LogoIcon } from '../asset/search.svg'

export const Main = () => {
  return (
    <MainLayout>
      <div>
        <MainFilter>
          <SearchInputBox>
            {/* <SearchInputImg src={searchImg} alt="" /> */}
            <SearchImg />
            <SearchInput placeholder='Search for a country...' />
          </SearchInputBox>
          <SelectRegion>
            <option value="" hidden defaultValue>Filter by Region</option>
            <option value="Africa">Africa</option>
          </SelectRegion>
        </MainFilter>
        <MainContentBox />
      </div>
    </MainLayout>
  )
}

const MainLayout = styled.div`
  display: flex;
  justify-content: center;

  height: auto;
  background-color: hsl(0, 0%, 96%);

  padding: 3rem 0 3rem 0;

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    max-width: 1440px;
    padding: 0 3rem 0 3rem;
  }
`

const MainFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: auto;
`

const SearchInputBox = styled.div`
  display: flex;

  position: relative;
`

const SearchImg = styled(LogoIcon)`
  fill: hsl(0, 0%, 70%);

  position: absolute;

  top: 0.75rem;
  left: 2rem;
`

const SearchInput = styled.input`
  width: 32rem;
  height: 3rem;

  border: none;
  border-radius: 0.5rem;

  padding-left: 5rem;
`

const SelectRegion = styled.select`
  width: 14rem;
  height: 3rem;
  padding-left: 1rem;

  border: none;
  border-radius: 0.5rem;
  border-right: 16px solid transparent;
`