import Login from "@/components/Login/index";

interface SignInProps {
    title: string;
}

const SignIn: React.FC<SignInProps> = ({ title }) => {
    return (
        <div className='flex flex-col gap-10 w-full sm:max-w-[300px] text-center'>
            <h1 className="text-h1">{title}</h1>
            <Login />
        </div>
    );
};

export default SignIn;
