import React from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'

import { getDetail } from '../api/api'

export const Detail = () => {

  const location = useLocation()

  const { data, isLoading, error } = useQuery(location.pathname, () => getDetail(location.pathname.replace("/", "")))
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  if (!data) return ( 404 )

  const { name, region, population, subregion, nativeName, 
    capital, topLevelDomain, currencies, languages, flag, borders} = data

  return (
    <div>
      <div>
        <button>Back
          <img src="" alt="" />
        </button>
      </div>
      <div>
        <img src={flag} alt="" />
        <div>
          <h2>{name}</h2>
          <div>
            <div>
              <span>Native Name: </span>
              <span>{nativeName}</span>
            </div>
            <div>
              <span>Population: </span>
              <span>{population}</span>
            </div>
            <div>
              <span>Region: </span>
              <span>{region}</span>
            </div>
            <div>
              <span>Sub Region: </span>
              <span>{subregion}</span>
            </div>
            <div>
              <span>Capital: </span>
              <span>{capital}</span>
            </div>
          </div>
          <div>
            <div>
              <span>Top Level Domain: </span>
              <span>{topLevelDomain}</span>
            </div>
            <div>
              <span>Currencies: </span>
              {currencies.map((item, idx) => {
                return (
                  <span key={idx}>{item.name}</span>
                )
              })}
            </div>
            <div>
              <span>Languages: </span>
              {languages.map((item, idx) => {
              return (
                <span key={idx}>{item.name}</span>
              )
            })}
            </div>
          </div>
        </div>
        <div>
            <span>Border Countries</span>
            {borders.map((item, idx) => {
              return (
                <span key={idx}>{item}</span>
              )
            })}
          </div>
      </div>
    </div>
  )
}
