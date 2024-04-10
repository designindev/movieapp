import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Login from "@/components/Authorization/login";


interface SignInProps {
    title: string;
}

const SignIn: React.FC<SignInProps> = ({ title }) => {
  const router = useRouter();
  const rememberedEmail = Cookies.get('rememberedEmail');
  const rememberedPassword = Cookies.get('rememberedPassword');

  if (rememberedEmail && rememberedPassword) {
      router.push('/movies');
      return null;
  }
    return (
      <div className='flex flex-col gap-10 w-full sm:max-w-[300px] text-center'>
          <h1 className="text-h1">{title}</h1>
          <Login />
      </div>
    );
};

export default SignIn;
