export interface Teacher {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	specialization: string;
}

export interface Student {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	groupName: string;
}

export interface Course {
	id: number;
	name: string;
	description: string;
	durationHours: number;
	teacherId: number;
}

export interface Registration {
	id: number;
	studentId: number;
	courseId: number;
	registrationDate: string;
	status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
}

export interface Grade {
	id: number;
	registrationId: number;
	gradeValue: number;
	gradeDate: string;
	comment: string;
}
