import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  min-height: 380px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 0 8px 0 rgb(200,200,200);
`

export const H6 = styled.h6`
  margin-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
`
export const Input = styled.input`
  margin: 10px 0;
  padding: 3px 3px;
  height: 25px;
  width: 65%;
  border: none;
  border-bottom: 1px solid rgb(200,200,200);
  outline: none;
  transition: 0.5s;
  &:hover {
    border-bottom: 1px solid black;
  }
`
export const Textarea = styled.textarea`  
  margin: 10px 0;
  padding: 3px 3px;
  height: 100px;
  width: 65%;
  border: 1px solid rgb(200,200,200);
  outline: none;
  &:hover {
    border-bottom: 1px solid black;
  }
`
export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 80px 0 ;
  padding: 0 20px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 1.4rem;
  font-family: 'Raleway', sans-serif;
`;
export const ResponseText = styled.span`
  margin: 10px 0;
  font-weight: bold;
  color: gray;
`
export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 10px;
  background: #46c3db;
  border: none;
  font-weight: bold;
  color white;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background: #43dde6;
  }
`
