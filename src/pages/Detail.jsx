import React from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { getDetail } from '../api/api'
import styled from 'styled-components'
import arrow from '../asset/arrow.svg'

export const Detail = () => {

  const location = useLocation()
  
  const { data, isLoading, error } = useQuery(location.pathname, () => getDetail(location.pathname.replace("/", "")))
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  if (!data) return ( 404 )

  const { name, region, population, subregion, nativeName, 
    capital, topLevelDomain, currencies, languages, flag} = data

  return (
    <DetailLayout>
      <div>
        <DetailWidthBox>
          <BackBtnBox>
            <BackBtnImg src={arrow} alt="" />
            <button>
              <StyledLink to={"/"}>Back</StyledLink>
            </button>
          </BackBtnBox>
          <DetailInfoLayout>
            <DetailInfoImg src={flag} alt="" />
            <DetailInfoBox>
              <DetailInfoTitle>{name}</DetailInfoTitle>
              <DetailedInfoInsideLayout>
                <div>
                  <InfoBox>
                    <span>Native Name: </span>
                    <span>{nativeName}</span>
                  </InfoBox>
                  <InfoBox>
                    <span>Population: </span>
                    <span>{population}</span>
                  </InfoBox>
                  <InfoBox>
                    <span>Region: </span>
                    <span>{region}</span>
                  </InfoBox>
                  <InfoBox>
                    <span>Sub Region: </span>
                    <span>{subregion}</span>
                  </InfoBox>
                  <InfoBox>
                    <span>Capital: </span>
                    <span>{capital}</span>
                  </InfoBox>
                </div>
                <div>
                  <InfoBox>
                    <span>Top Level Domain: </span>
                    <span>{topLevelDomain}</span>
                  </InfoBox>
                  <InfoBox>
                    <span>Currencies: </span>
                    {currencies.map((item, idx) => {
                      return (
                        <span key={idx}>{item.name}</span>
                      )
                    })}
                  </InfoBox>
                  <InfoBox>
                    <span>Languages: </span>
                    {languages.map((item, idx) => {
                    return (
                      <span key={idx}>{item.name}</span>
                    )
                  })}
                  </InfoBox>
                </div>
              </DetailedInfoInsideLayout>
            </DetailInfoBox>
          </DetailInfoLayout>
        </DetailWidthBox>
      </div>
    </DetailLayout>
  )
}

const DetailLayout = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.mode.backgroundColor};
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: left;

    max-width: 1440px;
    padding: 0 3rem 0 3rem;
  }
`

const DetailWidthBox = styled.div`
  width: auto;
`

const BackBtnBox = styled.div`
  background-color: ${({ theme }) => theme.mode.elementColor};
  width: 10rem;
  height: 3rem;
  margin: 5rem 0 5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.5rem;
  box-shadow: 0 0 8px rgba(33,33,33,.2);
`

const BackBtnImg = styled.img`
  width: 2rem;
`

const DetailInfoLayout = styled.div`
  width: 1440px;

  display: flex;
  gap: 8rem;
`

const DetailInfoImg = styled.img`
  width: 40rem;
  height: 30rem;
  object-fit: cover;
`

const DetailInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 0 2rem 0;
`

const DetailInfoTitle = styled.h2`
  font-weight: 800;
  font-size: 2rem;

  margin-bottom: 3rem;
`

const DetailedInfoInsideLayout = styled.div`
  display: flex;
  justify-content: space-between;
`

const InfoBox = styled.div`
  margin-bottom: 0.625rem;

  & > span:first-child {
    font-weight: 600;
  }
`

const StyledLink = styled(Link)`
  font-size: 1.25rem;
`