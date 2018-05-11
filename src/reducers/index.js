
import { SET_RANDOM_DATA } from '../actions/index'

const initialState = {
  merch:[
    {
      item: 'Hoodie',
      price: 74.00,
      style:'bullet peach'
    },
    {
      item: 'Fitted Cap',
      price: 69.50,
      style: 'bullet gold'
    },
    {
      item: 'Bracelet',
      price: 39.05,
      style: 'bullet aqua-blue'
    },
  ]
}
export default (state=initialState, action) => {
  switch(action.type) {
    case SET_RANDOM_DATA:
      return {
        merch: state.merch,
        ...action.data
      }
    default:
      return state
  }
}
