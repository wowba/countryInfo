import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { getSearch } from '../api/api'
import { MainContentBox } from '../components/MainContentBox'
import { ReactComponent as LogoIcon } from '../asset/search.svg'

export const Main = () => {

  const [searchKeyword, setSearchKeyword] = useState("")

  const { data, isLoading, error, refetch } = useQuery('useGetData', () => getSearch(searchKeyword))

  const handleInput = (e) => {
    setSearchKeyword(e.target.value)
  }

  const handleSearch = (e) => {
    if (e.code === "Enter") {
      console.log(e.target.value)
      refetch()
    }
  }

  return (
    <MainLayout>
      <div>
        <MainFilter>
          <SearchInputBox>
            {/* <SearchInputImg src={searchImg} alt="" /> */}
            <SearchImg />
            <SearchInput placeholder='Search for a country...' value={searchKeyword} onChange={e => handleInput(e)} onKeyUp={e => handleSearch(e)}/>
          </SearchInputBox>
          <SelectRegion>
            <option value="" hidden defaultValue>Filter by Region</option>
            <option value="Africa">Africa</option>
          </SelectRegion>
        </MainFilter>
        {!isLoading && !error ? <MainContentBox data={data} /> : null}
      </div>
    </MainLayout>
  )
}

const MainLayout = styled.div`
  display: flex;
  justify-content: center;

  height: auto;
  background-color: ${({ theme }) => theme.mode.backgroundColor};

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
  box-shadow: 0 0 8px rgba(33,33,33,.2);
  background-color: ${({ theme }) => theme.mode.elementColor};
  padding-left: 5rem;
`

const SelectRegion = styled.select`
  width: 14rem;
  height: 3rem;
  padding-left: 1rem;

  border: none;
  border-radius: 0.5rem;
  border-right: 16px solid transparent;
  box-shadow: 0 0 8px rgba(33,33,33,.2);
  background-color: ${({ theme }) => theme.mode.elementColor};
`