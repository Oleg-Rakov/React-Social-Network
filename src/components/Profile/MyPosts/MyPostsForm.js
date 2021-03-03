import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { MaxLengthCreator, required } from '../../../UTILS/VALIDATORS/Validators'
import { Textarea } from '../../Common/FormControls/FormControls'


const maxLength10 = MaxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength10]} name='newPostText' component={Textarea} placeholder='Enter Post' />
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

let PostsReduxForm = reduxForm({ form: 'myPostsForm' })(AddNewPostForm)

const NewPostsForm = (props) => {
    let onSubmit = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <PostsReduxForm onSubmit={onSubmit} />
    )
}

export default NewPostsForm
