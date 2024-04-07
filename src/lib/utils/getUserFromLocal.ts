import { User } from '@/lib/schemas/userSchema';

export const getUserFromLocalStorage = (): User | null => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
};

export const setUserInLocalStorage = (user: User): void => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = (): void => {
    localStorage.removeItem('user');
};

