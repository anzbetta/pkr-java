import { Student } from '../types';
import { mockStudents } from '../data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const studentsApi = {
	getAll: async () => {
		await delay(300);
		return { data: mockStudents };
	},
	getById: async (id: number) => {
		await delay(200);
		const student = mockStudents.find(s => s.id === id);
		return { data: student };
	},
	create: async (student: Omit<Student, 'id'>) => {
		await delay(300);
		const newStudent = { ...student, id: mockStudents.length + 1 };
		return { data: newStudent };
	},
	update: async (id: number, student: Omit<Student, 'id'>) => {
		await delay(300);
		const updated = { ...student, id };
		return { data: updated };
	},
	delete: async (id: number) => {
		await delay(200);
		return { data: null };
	},
};
