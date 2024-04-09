import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import Footer from "../components/Main/Footer/footer";

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  const handleLogoutClick = () => {
    router.push('/signin');
    Cookies.remove('rememberedEmail');
    Cookies.remove('rememberedPassword');
  };
  return (
    <main className="min-h-screen bg-main w-full flex flex-col justify-between items-center text-white">
      <section className="w-full h-full flex justify-center items-center flex-col gap-6 grow px-6 pb-5">
        <h1 className='text-h1 text-white'>404 - Page Not Found</h1>
          <button 
            type="button" 
            className="py-4 px-7 border text-regular rounded-[10px] text-white transition-transform hover:scale-105 bg-primary border-primary"
            onClick={handleLogoutClick}
          >
            Back
          </button>
      </section>         
      <Footer />
    </main> 
  );
};

export default NotFoundPage;