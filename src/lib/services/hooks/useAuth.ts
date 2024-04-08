import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { userSchema, User } from '@/lib/schemas/userSchema';
import { getUserFromLocalStorage } from '@/lib/utils/getUserFromLocal';

const useAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const userData: User | null = getUserFromLocalStorage();

        if (!userData) {
            router.push('/signin');
            return;
        }

        try {
            const parsedUserData = userSchema.parse(userData);
            router.push('/movies');
        } catch (error) {
            router.push('/signin');
        }
    }, [router]);

    return null;
};

export default useAuth;
