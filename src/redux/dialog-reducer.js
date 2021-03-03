let ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
  dialogs: [
    { id: 1, name: 'Oleg' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Valera' },
    { id: 4, name: 'Dimych' },
    { id: 5, name: 'Grisha' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How your day?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Same good' },
    { id: 5, message: 'Hey Bro' }
  ],
}

let dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      }
    }
    default:
      return state;
  }
}

export let addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText
});




export default dialogReducer;