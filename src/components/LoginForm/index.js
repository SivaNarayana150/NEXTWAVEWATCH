import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginBgContainer,
  ImageElement,
  FormContainer,
  InputElement,
  LabelElement,
  InputContainer,
  CheckboxInputElement,
  CheckboxContainer,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    textType: 'password',
    errorMsg: '',
    showError: false,
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitFailureView = () => {
    this.setState({
      errorMsg: "Username and Password didn't Matched",
      showError: true,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState({
      showError: true,
      errorMsg: "Username and Password didn't Match",
    })
  }

  getListOfAllVideos = async event => {
    event.preventDefault()

    const {usernameInput, passwordInput} = this.state

    const userDetails = {username: usernameInput, password: passwordInput}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const apiUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure()
    }
  }

  onChangePasswordShow = event => {
    if (event.target.checked === true) {
      this.setState({textType: 'text'})
    } else {
      this.setState({textType: 'password'})
    }
  }

  render() {
    const {
      textType,
      usernameInput,
      passwordInput,
      showError,
      errorMsg,
    } = this.state
    const showErrorMsg = showError && errorMsg

    return (
      <LoginBgContainer>
        <FormContainer onSubmit={this.getListOfAllVideos}>
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>
            <LabelElement htmlFor="USERNAME">USERNAME</LabelElement>
            <InputElement
              type="text"
              placeholder="Username"
              id="USERNAME"
              value={usernameInput}
              onChange={this.onChangeUsername}
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="PASSWORD">PASSWORD</LabelElement>
            <InputElement
              type={textType}
              placeholder="Password"
              id="PASSWORD"
              value={passwordInput}
              onChange={this.onChangePassword}
            />
          </InputContainer>

          <CheckboxContainer>
            <CheckboxInputElement
              type="checkbox"
              id="SHOW"
              onChange={this.onChangePasswordShow}
            />
            <LabelElement htmlFor="SHOW">Show Password</LabelElement>
          </CheckboxContainer>
          <LoginButton type="submit">Login</LoginButton>

          {showError && <ErrorMessage>{`*${showErrorMsg}`}</ErrorMessage>}
        </FormContainer>
      </LoginBgContainer>
    )
  }
}

export default LoginForm
