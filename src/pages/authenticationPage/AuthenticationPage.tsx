import React from 'react'
import LoginForm from 'components/forms/loginForm/LoginForm'
import SignUpForm from 'components/forms/signUpForm/SignUpForm'

const AuthenticationPage = () => {
    return (
        <div>
            <LoginForm/>
            <SignUpForm/>
        </div>
    )
}

export default AuthenticationPage
