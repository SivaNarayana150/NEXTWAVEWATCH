import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-weight: 600;
  color: #475569;
  margin-bottom: 8px;
  margin-top: 6px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const CheckboxInputElement = styled.input`
  height: 18px;
  width: 18px;
  margin-right: 10px;
  margin-left: 30px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`

export const LoginButton = styled.button`
  height: 30px;
  width: 100%;
  color: #ffffff;
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-size: 15px;
  height: 30px;
  border: none;
  border-radius: 5px;
`

export const SubmitError = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
