import data from './data.json';

const getData = () => {
  return data
};

const getDetail = (name) => {
  const detail = data.filter((item) => {
    if (item.name.toLowerCase() === name) return item
  })
  return detail[0]
}

export { getData, getDetail };
