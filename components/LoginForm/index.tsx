import { FormEvent, SyntheticEvent, useState } from 'react'
import { ButtonComponent } from '../ButtonComponent'
import { InputForm } from '../InputForm'
import styles from './styles.module.css'

export const LoginForm = () => {
  const [emailValue, setEmailValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  console.log('EMAIL VALUE', emailValue)
  console.log('PASSWORD VALUE', passwordValue)
  const emailInputProps = {
    labelProps: {
      htmlFor: 'email'
    },
    inputProps: {
      name: 'email',
      value: emailValue,
      onChange: (e: FormEvent<HTMLInputElement>) =>
        setEmailValue(e.currentTarget.value)
    }
  }
  const passwordInputProps = {
    labelProps: {
      htmlFor: 'password'
    },
    inputProps: {
      name: 'password',
      value: passwordValue,
      onChange: (e: FormEvent<HTMLInputElement>) =>
        setPasswordValue(e.currentTarget.value)
    }
  }
  return (
    <form className={styles.loginForm}>
      <InputForm {...emailInputProps} labelTitle='Email' />
      <InputForm {...passwordInputProps} labelTitle='Password' />
      <ButtonComponent title='log in' loading={false} />
    </form>
  )
}
