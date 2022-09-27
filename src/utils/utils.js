import { today } from './dates_work'

const madeQueueFrom = (array, start, end) => {
  return array.slice(start, end)
}

const decrement = (index) => {
  if (index > 0) {
    return --index
  }
  return false
}

const increment = (index, array) => {
  if (index < array.length) {
    return ++index
  }
  return false
}

const getMatchedElements = (str1, data) => {
  const arr = []
  if (str1 === '') {
    return arr
  }
  const regex1 = new RegExp(`${str1}`, 'i')
  for (let i = 0; i < data.length; i++) {
    if (
      regex1.test(data[i].country) ||
      regex1.test(data[i].city) ||
      regex1.test(data[i].name)
    ) {
      arr.push(data[i])
    }
  }
  return arr
}

const bubbleSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j].name > data[j + 1].name) {
        const tmp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = tmp
      }
    }
  }
  return data
}

export const VISIBLE_DIV_SIZE = 4
export const BASE_PATH = 'https://fe-student-api.herokuapp.com/api/hotels'
export const CHILD_YEARS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
]

export { madeQueueFrom, decrement, increment, getMatchedElements, bubbleSort }
