import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { userSchema, User } from '@/lib/schemas/userSchema';
import { getUserFromLocalStorage } from '@/lib/utils/setUserDataLocal';
import { db, tableUser } from "@/lib/utils/db";

const useAuth = (email: string, password: string) => {
    const router = useRouter();
    const [data, setData] = useState<boolean>(false);

    useEffect(() => {
      db.scan({ TableName: tableUser }, (err: any, fetchedData: any) => {
        if (err) {
          console.error('Error fetching data:', err);
        } else {
            const extractedItems = fetchedData.Items.map((item: any) => ({
              email: item.email.S,
              password: item.password.S,
            }))
            setData(extractedItems[0].password == password && extractedItems[0].email == email)
        }      
      });
    }, [email, password]);

    return data;
};

export default useAuth;
