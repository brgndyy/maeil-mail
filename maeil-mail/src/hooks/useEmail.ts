import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useEmail = () => {
  const [email, setEmail] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValidEmail = isTouched ? emailRegex.test(email) : true;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    setEmail(email);

    if (!isTouched) {
      setIsTouched(true);
    }
  };

  return { email, handleEmail, isValidEmail };
};

export default useEmail;
