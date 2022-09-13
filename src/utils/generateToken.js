import { suid } from 'rand-token';

const generateToken = () => {
  const token = suid(16);

  return token;
};

export { generateToken };