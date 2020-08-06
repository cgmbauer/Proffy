import React, { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <InputContainer className="input-block">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </InputContainer>
  );
};

export default Input;
