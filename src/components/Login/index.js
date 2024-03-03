import {Component} from 'react'

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
} from './styledComponents'

class Login extends Component {
  state = {usernameInput: '', passwordInput: '', textType: 'password'}

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  getListOfAllVideos = async event => {
    event.preventDefault()

    const {usernameInput, passwordInput} = this.state

    const userDetails = {usernameInput, passwordInput}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const apiUrl = 'https://apis.ccbp.in/login'

    const response = await fetch(apiUrl, options)

    const data = await response.json()

    console.log(data)
  }

  onChangePasswordShow = event => {
    if (event.target.checked === true) {
      this.setState({textType: 'text'})
    } else {
      this.setState({textType: 'password'})
    }
  }

  render() {
    const {textType, usernameInput, passwordInput} = this.state
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
        </FormContainer>
      </LoginBgContainer>
    )
  }
}

export default Login
