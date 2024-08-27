import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useEmail = () => {
  const [email, setEmail] = useState('');
  const insValidEmail = emailRegex.test(email);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    setEmail(email);
  };

  return { email, handleEmail, insValidEmail };
};

export default useEmail;
