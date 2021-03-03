import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"


let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 11 },
    { id: 2, message: 'It\'s my first message', likesCount: 20, },
    { id: 3, message: 'Good day:)', likesCount: 33, },
    { id: 4, message: 'Best Life', likesCount: 33, },
    { id: 5, message: 'I like my Cat:)', likesCount: 100 }
  ]
}

it('length of post should be incremented', () => {
  let action = addPostActionCreator('it-kamasutra');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(6)
})

it('message of post should be correct', () => {
  let action = addPostActionCreator('it-kamasutra');
  let newState = profileReducer(state, action);
  expect(newState.posts[5].message).toBe('it-kamasutra')
})

it('message of post should be correct', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4)
})