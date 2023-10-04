import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const Country = ({ props }) => {

  const { name, population, region, capital, flag} = props

  const navigate = useNavigate()

  return (
    <CountryLayout onClick={() => navigate(`/${name}`)}>
      <CountryImg src={flag} alt="" />
      <CountryInfoBox>
        <CountryName>{name}</CountryName>
        <div>
          <CountryInfoKey>Population: </CountryInfoKey>
          <CountryInfoValue>{population}</CountryInfoValue>
        </div>
        <div>
          <CountryInfoKey>Region: </CountryInfoKey>
          <CountryInfoValue>{region}</CountryInfoValue>
        </div>
        <div>
          <CountryInfoKey>Capital: </CountryInfoKey>
          <CountryInfoValue>{capital}</CountryInfoValue>
        </div>
      </CountryInfoBox>
    </CountryLayout>
  )
}

const CountryLayout = styled.div`
  background-color: hsl(0, 0%, 100%);

  border-radius: 0.5rem;
  box-shadow: 0 0 8px rgba(33,33,33,.2); 

  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 0 10px rgba(0.5, 0.5, 0.5, 0.5); 
    cursor: pointer;
  }
`

const CountryImg = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  object-fit: cover;
  height: 13rem;
`

const CountryInfoBox = styled.div`
  padding: 1.5rem 1.5rem 2.5rem 1.5rem;
`

const CountryName = styled.h2`
  margin-bottom: 0.625rem;

  font-weight: 800;
  font-size: 1.25rem;
`

const CountryInfoKey = styled.span`
  color: hsl(200, 15%, 35%);
  font-weight: 800;
`

const CountryInfoValue = styled.span`
  color: hsl(200, 15%, 0%);
  font-weight: 300;
`