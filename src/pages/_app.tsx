import "@/components/globals.css";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from "@/components/Loader/Loader";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading && router.pathname === '/') {
      router.push('/signin');
    }
  }, [isLoading, router]);

  if (isLoading) {
    return <Loader />;
  }

  return <Component {...pageProps} />;
}
