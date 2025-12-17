import { Teacher } from '../types';
import { mockTeachers } from '../data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const teachersApi = {
	getAll: async () => {
		await delay(300);
		return { data: mockTeachers };
	},
	getById: async (id: number) => {
		await delay(200);
		const teacher = mockTeachers.find(t => t.id === id);
		return { data: teacher };
	},
	create: async (teacher: Omit<Teacher, 'id'>) => {
		await delay(300);
		const newTeacher = { ...teacher, id: mockTeachers.length + 1 };
		return { data: newTeacher };
	},
	update: async (id: number, teacher: Omit<Teacher, 'id'>) => {
		await delay(300);
		const updated = { ...teacher, id };
		return { data: updated };
	},
	delete: async (id: number) => {
		await delay(200);
		return { data: null };
	},
};
