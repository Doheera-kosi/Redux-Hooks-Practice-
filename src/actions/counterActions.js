/* eslint-disable import/no-anonymous-default-export */
export const increment = () => {
  return {
      type: "INCREMENT"
  }
}

export const decrement = () => {
  return {
      type: "DECREMENT"
  }
}

export default {
  increment,
  decrement
}