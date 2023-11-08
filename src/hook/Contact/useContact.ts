import { useRef } from 'react';
import emailjs from 'emailjs-com';

const useContact = () => {
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

  return { formRef, sendEmail };
};

export default useContact;
