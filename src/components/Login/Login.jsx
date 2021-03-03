import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../UTILS/VALIDATORS/Validators';
import { createField, Input } from '../Common/FormControls/FormControls';
import styles from '../Common/FormControls/FormControls.module.css'

let FormLogin = ({ handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField([required], 'email', 'Email', Input)}
            {createField([required], 'password', 'Password', Input, { type: 'password' })}
            {createField([], 'rememberMe', null, Input, { type: 'checkbox' }, 'remember me')}
            {error && <div className={styles.stobSubmitForm}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(FormLogin)

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to='/profile' />

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login) 