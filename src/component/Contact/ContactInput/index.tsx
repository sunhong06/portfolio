import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #000;
  font-family: Lusitana, serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
  background-color: #f9f9f9;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-family: Lusitana, serif;
  font-size: 1.1rem;
  line-height: 1.8rem;
  font-weight: 600;
  color: #888;
  cursor: text;
  transform: translateY(-24px);
`;

interface ContactInputProps {
  type: string;
  value: string;
  name: string;
  required: boolean;
  onChange: any;
  label: string;
  id: string;
}

const ContactInput: React.FC<ContactInputProps> = ({
  type,
  value,
  name,
  required,
  onChange,
  label,
  id,
}) => {
  return (
    <>
      <Input
        onChange={onChange}
        value={value}
        id={id}
        type={type}
        name={name}
        required={required}
      />
      <Label htmlFor={id}>{label}</Label>
    </>
  );
};

export default ContactInput;
