import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Input from "@/components/Form/Input";
import Checkbox from "@/components/Form/Checkbox";
import Button from "@/components/Button/index";
import { useRouter } from 'next/router';
import { userSchema } from '@/lib/schemas/userSchema';
import useAuth from '../../lib/services/hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();
    const [error, setError] = useState('');
  
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value);
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value);
    const handleRememberMeChange = () => {
      setRememberMe(!rememberMe);
    };
    const isAuthenticated = useAuth(email, password);

    useEffect(() => {
      if (rememberMe) {
        Cookies.set('rememberedEmail', email);
        Cookies.set('rememberedPassword', password);
      } else {
        Cookies.remove('rememberedEmail');
        Cookies.remove('rememberedPassword');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rememberMe]);
    useEffect(() => {
      const rememberedEmail = Cookies.get('rememberedEmail');
      const rememberedPassword = Cookies.get('rememberedPassword');
      if (rememberedEmail && rememberedPassword) {
          setEmail(rememberedEmail);
          setPassword(rememberedPassword);
          setRememberMe(true);
      }
    }, []);
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('auth', isAuthenticated)
          if (isAuthenticated) {
              router.push('/movies');
          } else {
              setError('Invalid email or password');
              router.push('/signin');
          }
      };

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full"
        >
            <div className="flex flex-col">
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required={false}
                    placeholder={'Email'}
                />
            </div>
            <div className="flex flex-col">
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required={false}
                    placeholder={'Password'}
                />
            </div>
            <div className="flex items-center">
                <Checkbox
                    id="rememberMe"
                    required={false}
                    checked={rememberMe}
                    label="Remember me"
                    onChange={handleRememberMeChange}
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button 
                type="submit"
                view={"primary"}
                text="Login"
            />
        </form>
    );
};

export default Login;
