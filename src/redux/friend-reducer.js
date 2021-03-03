let initialState = {
  friendsName: [
    { id: 1, name: 'Oleg' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Valera' },
    { id: 3, name: 'Valeriya' }
  ]
}

let friendReducer = (state = initialState, action) => {
  return state
}

export default friendReducer;