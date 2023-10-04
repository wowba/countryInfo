import React from 'react'
import { useQuery } from 'react-query';

import { getData } from '../api/api'

export const MainContentBox = () => {

  const { data, isLoading, error } = useQuery('useGetData', getData)
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {console.log(data)}  
    </div>
  )
}
