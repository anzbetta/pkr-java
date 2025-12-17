import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
	id: number;
	username: string;
	role: 'STUDENT' | 'TEACHER' | 'ADMIN';
}

interface AuthState {
	user: User | null;
	token: string | null;
	setAuth: (user: User, token: string) => void;
	logout: () => void;
	isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set, get) => ({
			user: null,
			token: null,
			setAuth: (user, token) => {
				localStorage.setItem('authToken', token);
				set({ user, token });
			},
			logout: () => {
				localStorage.removeItem('authToken');
				set({ user: null, token: null });
			},
			isAuthenticated: () => !!get().token,
		}),
		{
			name: 'auth-storage',
		}
	)
);
