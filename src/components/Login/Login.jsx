import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} name={'login'} component={'input'} />
        </div>
        <div>
          <Field placeholder={'Password'} name={'password'} component={'input'} />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remebmer me
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