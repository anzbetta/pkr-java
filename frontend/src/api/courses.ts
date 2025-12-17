import { Course } from '../types';
import { mockCourses } from '../data/mockData';

// Симулюємо затримку мережі
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const coursesApi = {
	getAll: async () => {
		await delay(300);
		return { data: mockCourses };
	},
	getById: async (id: number) => {
		await delay(200);
		const course = mockCourses.find(c => c.id === id);
		return { data: course };
	},
	getByTeacher: async (teacherId: number) => {
		await delay(250);
		const courses = mockCourses.filter(c => c.teacherId === teacherId);
		return { data: courses };
	},
	create: async (course: Omit<Course, 'id'>) => {
		await delay(300);
		const newCourse = { ...course, id: mockCourses.length + 1 };
		return { data: newCourse };
	},
	update: async (id: number, course: Omit<Course, 'id'>) => {
		await delay(300);
		const updated = { ...course, id };
		return { data: updated };
	},
	delete: async (id: number) => {
		await delay(200);
		return { data: null };
	},
};
