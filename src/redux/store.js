import dialogReducer from "./dialog-reducer";
import friendReducer from "./friend-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 2, message: 'It\'s my first message', likesCount: 20, },
        { id: 3, message: 'Good day:)', likesCount: 33, },
        { id: 4, message: 'Best Life', likesCount: 33, },
        { id: 5, message: 'I like my Cat:)', likesCount: 100 }
      ],
      newPostText: 'it-kamasutra'
    },
    dialogPage: {
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
      newMessageText: 'Yo, How are you?'
    },
    friendsPage: {
      friendsName: [
        { id: 1, name: 'Oleg' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Valera' },
        { id: 3, name: 'Valeriya' }
      ]
    }
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State Changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.friendsPage = friendReducer(this._state.friendsPage, action);
    this._callSubscriber(this._state)
  }
}

export default store;
window.store = store;