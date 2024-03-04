// Style your elements here
import styled from 'styled-components'

export const OuterContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InnerContainer = styled.div`
  background-color: #383a4e;
  height: 450px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    width: 350px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 44px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 28px;
  }
`

export const Description = styled.p`
  color: #ffffff;
  font-size: 22;
  margin-top: 10px;
  font-weight: 400;
`

export const PasswordField = styled.input`
  background-color: #edeeff;
  height: 40px;
  width: 80%;
  border: none;
  border-radius: 6px;
  outline: none;
  padding: 10px;
  margin-top: 40px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  margin-top: 4px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`
