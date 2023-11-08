import React, { useState, useCallback } from 'react';
import { styled } from 'styled-components';
import ContactInput from '../component/Contact/ContactInput';
import ContactFrom from '../component/Contact/ContactForm';
import useContact from '../hook/Contact/useContact';

const ContactDiv = styled.section`
  padding: 100px 0;
  position: relative;
`;

const TopDiv = styled.div`
  position: relative;
  margin: 32px 0;
  padding: 0 20px;
  float: left;
  width: 50%;
`;
const BottomDiv = styled.div`
  position: relative;
  margin: 32px 0;
  padding: 0 20px;
  float: left;
  width: 100%;
  text-align: right;
`;

const SubmitInput = styled.input`
  display: inline-block;
  background-color: #000;
  color: #fff;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const ContactTitle = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
`;

const Contact: React.FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [msgValue, setMsgValue] = useState('');

  const { sendEmail, formRef } = useContact();

  return (
    <ContactDiv id='4'>
      <ContactTitle>CONTACT</ContactTitle>
      <ContactFrom ref={formRef} onSubmit={sendEmail}>
        <TopDiv>
          <ContactInput
            type='text'
            value={nameValue}
            id='name'
            name='contactName'
            label='Name'
            required
            onChange={useCallback(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                setNameValue(e.target.value),
              []
            )}
          />
        </TopDiv>
        <TopDiv>
          <ContactInput
            onChange={useCallback(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                setEmailValue(e.target.value),
              []
            )}
            value={emailValue}
            type='email'
            name='email'
            id='email'
            required
            label='Email'
          />
        </TopDiv>
        <BottomDiv>
          <ContactInput
            onChange={useCallback(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                setMsgValue(e.target.value),
              []
            )}
            value={msgValue}
            name='msg'
            type='text'
            required
            id='message'
            label='Message'
          />
        </BottomDiv>
        <BottomDiv>
          <SubmitInput type='submit' value='보내기' />
        </BottomDiv>
      </ContactFrom>
    </ContactDiv>
  );
};

export default Contact;
