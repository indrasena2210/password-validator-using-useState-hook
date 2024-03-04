// Write your code here
import {useState} from 'react'

import {
  OuterContainer,
  InnerContainer,
  Heading,
  Description,
  PasswordField,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const errorMsg = 'Your password must be at least 8 characters'

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <PasswordField
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <ErrorMessage>{password.length < 8 ? errorMsg : ''}</ErrorMessage>
      </InnerContainer>
    </OuterContainer>
  )
}

export default PasswordValidator
