import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin: -20px 0;
  width: 50%;
  margin: 0 auto;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

interface ContactFromProps {
  ref: any;
  onSubmit: any;
  children?: ReactNode;
}

const ContactFrom: React.FC<ContactFromProps> = ({
  children,
  ref,
  onSubmit,
}) => {
  return (
    <>
      <Form ref={ref} onSubmit={onSubmit}>
        {children}
      </Form>
    </>
  );
};

export default ContactFrom;
