import { Registration } from '../types';
import { mockRegistrations } from '../data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const registrationsApi = {
	getAll: async () => {
		await delay(300);
		return { data: mockRegistrations };
	},
	getById: async (id: number) => {
		await delay(200);
		const registration = mockRegistrations.find(r => r.id === id);
		return { data: registration };
	},
	getByStudent: async (studentId: number) => {
		await delay(250);
		const registrations = mockRegistrations.filter(r => r.studentId === studentId);
		return { data: registrations };
	},
	getByCourse: async (courseId: number) => {
		await delay(250);
		const registrations = mockRegistrations.filter(r => r.courseId === courseId);
		return { data: registrations };
	},
	create: async (registration: Omit<Registration, 'id' | 'registrationDate'>) => {
		await delay(300);
		const newReg = {
			...registration,
			id: mockRegistrations.length + 1,
			registrationDate: new Date().toISOString()
		};
		return { data: newReg };
	},
	update: async (id: number, registration: Partial<Registration>) => {
		await delay(300);
		const updated = { ...registration, id } as Registration;
		return { data: updated };
	},
	delete: async (id: number) => {
		await delay(200);
		return { data: null };
	},
};
