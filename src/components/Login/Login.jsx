import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Element } from './../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from './../../utils/validators/validators';

const Input = Element("input")
const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLength30]} />
        </div>
        <div>
          <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLength30]} />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={Input} validate={[required, maxLength30]} /> remebmer me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) //прокидывает особый пропс handleSubmit:

const Login = (props) => {
  const onSubmit = (formData) => { //сюда придут все значения из форм
    console.log(formData)
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

export default Login