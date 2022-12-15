import React from 'react'
import { InputContainer } from './styles';


const Input = ({value, onChange}) => {
  return (
    <InputContainer>
      <input 
        value={value} 
        onChange={onChange} 
        placeholder="usuario/nome-repositorio"
      />
    </InputContainer>
  )
}

export default Input;