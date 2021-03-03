import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { MaxLengthCreator, required } from '../../UTILS/VALIDATORS/Validators'
import { Textarea } from '../Common/FormControls/FormControls'

const maxLength50 = MaxLengthCreator(50);

let DialogsForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field validate={[required, maxLength50]} name={'newMessageText'} component={Textarea} placeholder='Enter Your Message'/>
        <button>Add</button>
    </form>)
}

let DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm)


const NewMessageForm = (props) => {
    let onSubmit = (values) => {
        props.addMessage(values.newMessageText)
    }
    return (
        <DialogsReduxForm onSubmit={onSubmit} />
    )
}

export default NewMessageForm

{/* <textarea onChange={onMessageChange} ref={newElement} value={state.newMessageText}></textarea>
<button onClick={showElement}>Добавить</button> */}