import data from './data.json';

const getDetail = (name) => {
  const detail = data.filter(item => {
    if (item.name === decodeURI(name)) return true
    return false
  })
  return detail[0]
}

const getSearch = (name) => {
  if (name === "") return data

  const result = data.filter(item => {
    if (item.name.toLowerCase().includes(name)) return item
    return false
  })
  return result
}

export { getDetail, getSearch };
