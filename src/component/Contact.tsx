import React, { useState, useRef, useCallback } from 'react';
import { styled } from 'styled-components';
import emailjs from 'emailjs-com';

const ContactDiv = styled.section`
  padding: 100px 0;
  position: relative;
`;
const ContactTitle = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
`;
const ContactForm = styled.form`
  margin: -20px 0;
  width: 50%;
  margin: 0 auto;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const DivOne = styled.div`
  position: relative;
  margin: 32px 0;
  padding: 0 20px;
  float: left;
  width: 50%;
`;
const DivTwo = styled.div`
  position: relative;
  margin: 32px 0;
  padding: 0 20px;
  float: left;
  width: 100%;
  text-align: right;
`;
const ContactInput = styled.input`
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

const Label = styled.label`
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-family: Lusitana, serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
  color: #888;
  cursor: text;
  transform: translateY(-24px);
`;

const Contact: React.FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [msgValue, setMsgValue] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const formRefCurrent = formRef.current as HTMLFormElement;
  const serviceId: string = process.env.REACT_APP_SERVICE_API_KEY as string;
  const templateId: string = process.env.REACT_APP_TEMPLATE_API_KEY as string;
  const apikey: string = process.env.REACT_APP_EMAILJS_API_KEY as string;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, formRefCurrent, apikey).then(
      (result) => {
        alert('전송되었습니다.');
      },
      (error) => {
        console.log(error);
        alert('전송에 실패 하였습니다.');
      }
    );
  };
  return (
    <ContactDiv id='4'>
      <div>
        <ContactTitle>CONTACT</ContactTitle>
        <ContactForm ref={formRef} onSubmit={sendEmail}>
          <DivOne>
            <ContactInput
              onChange={useCallback(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setNameValue(e.target.value),
                []
              )}
              value={nameValue}
              type='text'
              name='name'
              required
            />
            <Label htmlFor='name'>Name</Label>
          </DivOne>
          <DivOne>
            <ContactInput
              onChange={useCallback(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmailValue(e.target.value),
                []
              )}
              value={emailValue}
              type='email'
              name='email'
              required
            />
            <Label htmlFor='email'>E-mail</Label>
          </DivOne>
          <DivTwo>
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
            />
            <Label htmlFor='message'>Message</Label>
          </DivTwo>
          <DivTwo>
            <SubmitInput type='submit' value='보내기' />
          </DivTwo>
        </ContactForm>
      </div>
    </ContactDiv>
  );
};

export default Contact;
