import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  FormContainer,
  InputContainer,
  CheckboxContainer,
  LoginButton,
  SubmitError,
  InputLabel,
  UserInput,
  Checkbox,
  ShowPassword,
  LoginLogo,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      showSubmitError,
      errorMsg,
      username,
      showPassword,

      password,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>
            <InputLabel htmlFor="username">USERNAME</InputLabel>
            <UserInput
              type="text"
              id="username"
              value={username}
              name="username"
              onChange={this.onChangeHandler}
              placeholder="Username"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">PASSWORD</InputLabel>
            <UserInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              name="password"
              onChange={this.onChangeHandler}
              placeholder="Password"
            />

            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="checkbox"
                onChange={this.onShowPassword}
              />
              <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
            </CheckboxContainer>
          </InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default LoginForm
