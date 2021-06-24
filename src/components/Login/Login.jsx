import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Element } from './../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from './../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css'

const Input = Element("input")
const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'email'} name={'email'} component={Input} validate={[required, maxLength30]} />
        </div>
        <div>
          <Field placeholder={'password'} name={'password'} type={'password'} component={Input} validate={[required, maxLength30]} />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={Input} validate={[required, maxLength30]} /> remebmer me
        </div>
        {props.error && <div className={style.formSummaryError}>
          {props.error}
        </div>}
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
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login)