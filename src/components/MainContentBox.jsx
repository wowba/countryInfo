import React from 'react'
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { getData } from '../api/api'
import { Country } from './Country';

export const MainContentBox = () => {

  const { data, isLoading, error } = useQuery('useGetData', getData)
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <MainContentBoxLayout>
      {data.map((item) => {
        return <Country props={item} key={item.name} />
      })}  
    </MainContentBoxLayout>
  )
}

const MainContentBoxLayout = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 4rem;
  grid-column-gap: 4rem;
`
