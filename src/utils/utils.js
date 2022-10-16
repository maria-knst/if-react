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

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true
  } else {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false
    }
    for (const propName in obj1) {
      // eslint-disable-next-line no-prototype-builtins
      if (!obj2.hasOwnProperty(propName)) {
        return false
      }
      if (obj1[propName].valueOf() !== obj2[propName].valueOf()) {
        return false
      }
    }
  }
  return true
}

const generateURL = (searchingString, start, end, adults, childrenAge, rooms ) => {
  return (
    BASE_PATH +
    `?search=${searchingString}&dateFrom=${start.getTime()}&dateTo=${end.getTime()}&adults=${adults}&children=${childrenAge}&rooms=${rooms}`
  )
}

export const VISIBLE_DIV_SIZE = 4
export const BASE_PATH = 'https://fe-student-api.herokuapp.com/api/hotels'
export const CHILD_YEARS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
]

export const autorizUsers = [
  {
    email: 'user1@gmail.com',
    password: '11111',
  },
  {
    email: 'user2@gmail.com',
    password: '22222',
  },
  {
    email: 'user3@gmail.com',
    password: '33333',
  },
  {
    email: 'user4@gmail.com',
    password: '44444',
  },
]

export {
  madeQueueFrom,
  decrement,
  increment,
  getMatchedElements,
  bubbleSort,
  deepEqual,
  generateURL,
}
