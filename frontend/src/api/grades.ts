import { Grade } from '../types';
import { mockGrades } from '../data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const gradesApi = {
	getAll: async () => {
		await delay(300);
		return { data: mockGrades };
	},
	getById: async (id: number) => {
		await delay(200);
		const grade = mockGrades.find(g => g.id === id);
		return { data: grade };
	},
	getByRegistration: async (registrationId: number) => {
		await delay(250);
		const grade = mockGrades.find(g => g.registrationId === registrationId);
		return { data: grade };
	},
	getByStudent: async (studentId: number) => {
		await delay(250);
		// Тут би потрібно було з'єднати з registrations, але для простоти повертаємо всі
		return { data: mockGrades };
	},
	create: async (grade: Omit<Grade, 'id' | 'gradeDate'>) => {
		await delay(300);
		const newGrade = {
			...grade,
			id: mockGrades.length + 1,
			gradeDate: new Date().toISOString()
		};
		return { data: newGrade };
	},
	update: async (id: number, grade: Partial<Grade>) => {
		await delay(300);
		const updated = { ...grade, id } as Grade;
		return { data: updated };
	},
	delete: async (id: number) => {
		await delay(200);
		return { data: null };
	},
};
