import { Teacher, Student, Course, Registration, Grade } from '../types'

export const mockTeachers: Teacher[] = [
  {
    id: 1,
    firstName: 'Іван',
    lastName: 'Петренко',
    email: 'ivan.petrenko@university.ua',
    specialization: 'Математика',
  },
  {
    id: 2,
    firstName: 'Марія',
    lastName: 'Коваленко',
    email: 'maria.kovalenko@university.ua',
    specialization: 'Програмування',
  },
  {
    id: 3,
    firstName: 'Олександр',
    lastName: 'Шевченко',
    email: 'oleksandr.shevchenko@university.ua',
    specialization: 'Фізика',
  },
]

export const mockStudents: Student[] = [
  {
    id: 1,
    firstName: 'Тарас',
    lastName: 'Іваненко',
    email: 'taras.ivanenko@student.ua',
    groupName: 'КН-401',
  },
  {
    id: 2,
    firstName: 'Ольга',
    lastName: 'Мельник',
    email: 'olga.melnyk@student.ua',
    groupName: 'КН-401',
  },
  {
    id: 3,
    firstName: 'Андрій',
    lastName: 'Бойко',
    email: 'andriy.boyko@student.ua',
    groupName: 'КН-402',
  },
  {
    id: 4,
    firstName: 'Катерина',
    lastName: 'Ткаченко',
    email: 'kateryna.tkachenko@student.ua',
    groupName: 'КН-402',
  },
  {
    id: 5,
    firstName: 'Дмитро',
    lastName: 'Савченко',
    email: 'dmytro.savchenko@student.ua',
    groupName: 'КН-403',
  },
]

export const mockCourses: Course[] = [
  {
    id: 1,
    name: 'Вища математика',
    description: 'Курс з вищої математики для студентів 1-2 курсів',
    durationHours: 60,
    teacherId: 1,
  },
  {
    id: 2,
    name: 'Java програмування',
    description: 'Основи об\'єктно-орієнтованого програмування на Java',
    durationHours: 90,
    teacherId: 2,
  },
  {
    id: 3,
    name: 'Spring Framework',
    description: 'Розробка веб-застосунків з використанням Spring Boot',
    durationHours: 120,
    teacherId: 2,
  },
  {
    id: 4,
    name: 'Загальна фізика',
    description: 'Курс загальної фізики для технічних спеціальностей',
    durationHours: 80,
    teacherId: 3,
  },
]

export const mockRegistrations: Registration[] = [
  {
    id: 1,
    studentId: 1,
    courseId: 1,
    registrationDate: '2024-01-15T10:00:00',
    status: 'COMPLETED',
  },
  {
    id: 2,
    studentId: 1,
    courseId: 2,
    registrationDate: '2024-01-20T14:30:00',
    status: 'ACTIVE',
  },
  {
    id: 3,
    studentId: 2,
    courseId: 2,
    registrationDate: '2024-01-21T09:15:00',
    status: 'ACTIVE',
  },
  {
    id: 4,
    studentId: 2,
    courseId: 3,
    registrationDate: '2024-01-22T11:00:00',
    status: 'ACTIVE',
  },
  {
    id: 5,
    studentId: 3,
    courseId: 1,
    registrationDate: '2024-01-18T13:45:00',
    status: 'COMPLETED',
  },
  {
    id: 6,
    studentId: 3,
    courseId: 4,
    registrationDate: '2024-01-25T10:30:00',
    status: 'ACTIVE',
  },
  {
    id: 7,
    studentId: 4,
    courseId: 3,
    registrationDate: '2024-01-23T15:20:00',
    status: 'ACTIVE',
  },
  {
    id: 8,
    studentId: 5,
    courseId: 2,
    registrationDate: '2024-01-19T12:00:00',
    status: 'CANCELLED',
  },
]

export const mockGrades: Grade[] = [
  {
    id: 1,
    registrationId: 1,
    gradeValue: 85,
    gradeDate: '2024-05-20T16:00:00',
    comment: 'Відмінне засвоєння матеріалу',
  },
  {
    id: 2,
    registrationId: 5,
    gradeValue: 92,
    gradeDate: '2024-05-22T14:30:00',
    comment: 'Чудова робота, високий рівень знань',
  },
]
