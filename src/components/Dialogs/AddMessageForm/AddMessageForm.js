import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Element } from './../../common/FormsControls/FormsControls';

const Textarea = Element("textarea")
const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
        validate={[required, maxLength50]}
        placeholder="Enter your message" name='newMessageBody' />
      <button>add message</button>
    </form>
  )
}
s
export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm)
