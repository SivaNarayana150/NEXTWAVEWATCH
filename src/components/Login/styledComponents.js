import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageElement = styled.img`
  height: 35px;
  margin-bottom: 25px;
`
export const FormContainer = styled.form`
  width: 80%;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 767px) {
    width: 370px;
  }
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-weight: 600;
  color: #475569;
  margin-bottom: 8px;
  margin-top: 6px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
`

export const InputElement = styled.input`
  height: 40px;
  width: 60vw;
  font-family: 'Roboto';
  font-weight: 900;
  padding: 8px;
  border-radius: 5px;
  border-color: #94a3b8;
  border-width: 1px;
  font-size: 15px;

  &:focus {
    outline: none;
  }
  @media screen and (min-width: 767px) {
    width: 280px;
  }
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
  width: 60vw;
  color: #ffffff;
  background-color: #4f46e5;
  font-family: 'Roboto';
  margin-top: 25px;
  border: none;
  border-radius: 4px;
  @media screen and (min-width: 767px) {
    width: 280px;
  }
`
