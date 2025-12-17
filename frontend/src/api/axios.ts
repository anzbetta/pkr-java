import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.DEV ? '/api' : 'http://localhost:8080',
	headers: {
		'Content-Type': 'application/json',
	},
});

// Request interceptor для додавання токена
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('authToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Response interceptor для обробки помилок
api.interceptors.response.use(
	(response) => response,
	(error) => {
		// Не редиректимо на логін, просто логуємо помилку
		console.error('API Error:', error);
		return Promise.reject(error);
	}
);

export default api;
