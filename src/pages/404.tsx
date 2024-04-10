import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import Footer from "../components/Main/Footer/footer";
import Loader from "@/components/Loader/Loader";
import SimpleLayout from "@/components/Layouts/MainLayout";
import Wrapper from "@/components/Layouts/Wrapper";

const NotFoundPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogoutClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (Cookies.get('rememberedEmail') && Cookies.get('rememberedPassword')) {
        Cookies.remove('rememberedEmail');
        Cookies.remove('rememberedPassword');
      }
      router.push('/signin');
    }, 500);
  };
  return (
    <SimpleLayout>
      {!isLoading ? (
        <Wrapper>
          <div className='flex flex-col gap-6 items-center justify-center h-[100vh]'>
            <h1 className='text-h1 text-white'>404 - Page Not Found</h1>
            <button 
              type="button" 
              className="py-4 px-7 border text-regular rounded-[10px] text-white transition-transform hover:scale-105 bg-primary border-primary"
              onClick={handleLogoutClick}
            >
              Back
            </button>
          </div>
        </Wrapper>
      ) : (
        <Loader />      
      )}
    </SimpleLayout>
  );
};

export default NotFoundPage;