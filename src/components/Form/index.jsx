import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {Fieldset,SectionForm,Form,Input,Textarea,H6, ResponseText, SubmitButton} from './styles'

const SERVICE_ID = 'service_pyk3alb'
const TEMPLATE_ID = 'template_hqv3s0o'
const USER_ID = 'user_mZrX1CcjdIZxJajHBBlK8'

const FormComponent = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState(false)
  const [error, setError] = useState(false)
  const data = {
    to_name: "Yosef",
    from_name: name,
    from_email: email,
    message: message,
  }
  function handleClick(e) {
    if(!email.includes('@')) {
      setError('Invalid Email')
    } else if (!email.includes('.com')) {
      setError('Invalid Email')
    } else if (name.length < 3) {
      setError('Name too small')
    } else if (message.length < 10) {
      setError('Message too small')
    }
    else {
          emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        setResponse('Message Sent')
      },
      function (err) {
        console.log(err.toString())
        setError('Error, message not sent')
      }
    )
    

    }
  }
  return (
    <SectionForm>
      <Form>
        <H6>Contact me</H6>
        <Fieldset>
          <label htmlFor="name" name="name">Name: </label>
          <Input onChange={(e) => setName(e.target.value)} htmlFor="name" type="name" placeholder="Name" />
          <label htmlFor="email" name="email">Email: </label>
          <Input onChange={(e) => setEmail(e.target.value)} htmlFor="email" type="email" placeholder="Email" />
          <label htmlFor="message" name="message">Message: </label>
          <Textarea onChange={(e) => setMessage(e.target.value)} htmlFor="message" type="message" placeholder="Message" />
          <SubmitButton type="button" onClick={handleClick}>Send Mail</SubmitButton>
          {response && <ResponseText>{response}</ResponseText>}
          {error && <ResponseText error={error}>{error}</ResponseText>}
        </Fieldset>
      </Form>
    </SectionForm>
  )
}



export default FormComponent
