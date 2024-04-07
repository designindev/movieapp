import React, { useState } from 'react';
import Input from "@/components/Form/Input";
import Checkbox from "@/components/Form/Checkbox";
import Button from "@/components/Button/index";
import { useRouter } from 'next/router';
import { userSchema } from '@/lib/schemas/userSchema';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();
    const [error, setError] = useState('');
  
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value);
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value);
    const handleRememberMeChange = () => setRememberMe(!rememberMe);
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
  
        try {
            userSchema.parse({ email, password });
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Remember me:', rememberMe);
            router.push('/movies');
        } catch (err: any) {
            setError(err.message);
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
                    checked={false}
                    label="Remember me"
                    onChange={handleRememberMeChange}
                />
            </div>
            <Button 
                type="submit"
                view={"primary"}
                text="Login"
            />
        </form>
    );
};

export default Login;
