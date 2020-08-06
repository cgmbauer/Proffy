import React, { SelectHTMLAttributes } from 'react';

import { SelectContainer } from './styles';

interface OptionsProps {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: OptionsProps[];
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <SelectContainer className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </SelectContainer>
  );
};

export default Select;
