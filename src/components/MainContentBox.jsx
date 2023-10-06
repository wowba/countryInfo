import React from 'react'
import styled from 'styled-components';

import { Country } from './Country';

export const MainContentBox = ({data}) => {

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
