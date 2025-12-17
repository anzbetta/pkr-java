import { Routes, Route, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { coursesApi } from './api/courses';
import { studentsApi } from './api/students';
import { teachersApi } from './api/teachers';
import { registrationsApi } from './api/registrations';
import { gradesApi } from './api/grades';

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">Система "Факультатив"</h1>
					<nav className="flex gap-4">
						<Link to="/" className="text-blue-600 hover:text-blue-800">
							Головна
						</Link>
						<Link to="/courses" className="text-blue-600 hover:text-blue-800">
							Курси
						</Link>
						<Link to="/students" className="text-blue-600 hover:text-blue-800">
							Студенти
						</Link>
						<Link to="/teachers" className="text-blue-600 hover:text-blue-800">
							Викладачі
						</Link>
						<Link to="/registrations" className="text-blue-600 hover:text-blue-800">
							Реєстрації
						</Link>
						<Link to="/grades" className="text-blue-600 hover:text-blue-800">
							Оцінки
						</Link>
					</nav>
				</div>
			</header>

			<main className="max-w-7xl mx-auto py-6 px-4">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/courses" element={<CoursesPage />} />
					<Route path="/courses/:id" element={<CourseDetailPage />} />
					<Route path="/students" element={<StudentsPage />} />
					<Route path="/students/:id" element={<StudentDetailPage />} />
					<Route path="/teachers" element={<TeachersPage />} />
					<Route path="/teachers/:id" element={<TeacherDetailPage />} />
					<Route path="/registrations" element={<RegistrationsPage />} />
					<Route path="/grades" element={<GradesPage />} />
				</Routes>
			</main>
		</div>
	);
}

function HomePage() {
	return (
		<div className="text-center">
			<h2 className="text-2xl font-semibold mb-4">Ласкаво просимо!</h2>
			<p className="text-gray-600 mb-6">Система управління факультативними курсами</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
				<Link to="/courses" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
					<h3 className="text-xl font-semibold mb-2">Курси</h3>
					<p className="text-gray-600">Перегляд та управління курсами</p>
				</Link>
				<Link to="/students" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
					<h3 className="text-xl font-semibold mb-2">Студенти</h3>
					<p className="text-gray-600">Управління студентами</p>
				</Link>
				<Link to="/teachers" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
					<h3 className="text-xl font-semibold mb-2">Викладачі</h3>
					<p className="text-gray-600">Управління викладачами</p>
				</Link>
				<Link to="/registrations" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
					<h3 className="text-xl font-semibold mb-2">Реєстрації</h3>
					<p className="text-gray-600">Реєстрація студентів на курси</p>
				</Link>
				<Link to="/grades" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
					<h3 className="text-xl font-semibold mb-2">Оцінки</h3>
					<p className="text-gray-600">Архів оцінок студентів</p>
				</Link>
			</div>
		</div>
	);
}

function CoursesPage() {
	const {
		data: courses,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['courses'],
		queryFn: async () => {
			const response = await coursesApi.getAll();
			return response.data;
		},
	});

	if (isLoading) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Список курсів</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-gray-600">Завантаження...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Список курсів</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-red-600">Помилка завантаження курсів</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Список курсів</h2>
			<div className="bg-white shadow rounded-lg p-6">
				{courses && courses.length > 0 ? (
					<div className="grid gap-4">
						{courses.map((course) => (
							<Link key={course.id} to={`/courses/${course.id}`} className="p-4 border rounded hover:bg-gray-50 transition">
								<h3 className="text-xl font-semibold mb-2">{course.name}</h3>
								<p className="text-gray-600 mb-2">{course.description}</p>
								<p className="text-sm text-gray-500">Тривалість: {course.durationHours} годин</p>
							</Link>
						))}
					</div>
				) : (
					<p className="text-gray-600">Курсів поки немає</p>
				)}
			</div>
		</div>
	);
}

function CourseDetailPage() {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Деталі курсу</h2>
			<div className="bg-white shadow rounded-lg p-6">
				<p className="text-gray-600">Детальна інформація про курс, викладача та список студентів</p>
			</div>
		</div>
	);
}

function StudentsPage() {
	const {
		data: students,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['students'],
		queryFn: async () => {
			const response = await studentsApi.getAll();
			return response.data;
		},
	});

	if (isLoading) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Список студентів</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-gray-600">Завантаження...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Список студентів</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-red-600">Помилка завантаження студентів</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Список студентів</h2>
			<div className="bg-white shadow rounded-lg p-6">
				{students && students.length > 0 ? (
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ім'я</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Група</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{students.map((student) => (
									<tr key={student.id} className="hover:bg-gray-50">
										<td className="px-6 py-4 whitespace-nowrap">
											<Link to={`/students/${student.id}`} className="text-blue-600 hover:text-blue-800">
												{student.firstName} {student.lastName}
											</Link>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.groupName}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p className="text-gray-600">Студентів поки немає</p>
				)}
			</div>
		</div>
	);
}

function StudentDetailPage() {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Профіль студента</h2>
			<div className="bg-white shadow rounded-lg p-6">
				<p className="text-gray-600">Інформація про студента, його курси та оцінки</p>
			</div>
		</div>
	);
}

function TeachersPage() {
	const {
		data: teachers,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['teachers'],
		queryFn: async () => {
			const response = await teachersApi.getAll();
			return response.data;
		},
	});

	if (isLoading) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Список викладачів</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-gray-600">Завантаження...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Список викладачів</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-red-600">Помилка завантаження викладачів</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Список викладачів</h2>
			<div className="bg-white shadow rounded-lg p-6">
				{teachers && teachers.length > 0 ? (
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{teachers.map((teacher) => (
							<Link key={teacher.id} to={`/teachers/${teacher.id}`} className="p-4 border rounded hover:bg-gray-50 transition">
								<h3 className="text-lg font-semibold mb-1">
									{teacher.firstName} {teacher.lastName}
								</h3>
								<p className="text-sm text-gray-600 mb-2">{teacher.email}</p>
								<p className="text-sm text-gray-500">Спеціалізація: {teacher.specialization}</p>
							</Link>
						))}
					</div>
				) : (
					<p className="text-gray-600">Викладачів поки немає</p>
				)}
			</div>
		</div>
	);
}

function TeacherDetailPage() {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Профіль викладача</h2>
			<div className="bg-white shadow rounded-lg p-6">
				<p className="text-gray-600">Інформація про викладача та його курси</p>
			</div>
		</div>
	);
}

function RegistrationsPage() {
	const {
		data: registrations,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['registrations'],
		queryFn: async () => {
			const response = await registrationsApi.getAll();
			return response.data;
		},
	});

	if (isLoading) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Реєстрації на курси</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-gray-600">Завантаження...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Реєстрації на курси</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-red-600">Помилка завантаження реєстрацій</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Реєстрації на курси</h2>
			<div className="bg-white shadow rounded-lg p-6">
				{registrations && registrations.length > 0 ? (
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID Студента</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID Курсу</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Дата реєстрації</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Статус</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{registrations.map((reg) => (
									<tr key={reg.id} className="hover:bg-gray-50">
										<td className="px-6 py-4 whitespace-nowrap text-sm">{reg.studentId}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">{reg.courseId}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(reg.registrationDate).toLocaleDateString('uk-UA')}</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span
												className={`px-2 py-1 text-xs rounded-full ${
													reg.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : reg.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
												}`}
											>
												{reg.status}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p className="text-gray-600">Реєстрацій поки немає</p>
				)}
			</div>
		</div>
	);
}

function GradesPage() {
	const {
		data: grades,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['grades'],
		queryFn: async () => {
			const response = await gradesApi.getAll();
			return response.data;
		},
	});

	if (isLoading) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Архів оцінок</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-gray-600">Завантаження...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h2 className="text-2xl font-bold mb-4">Архів оцінок</h2>
				<div className="bg-white shadow rounded-lg p-6">
					<p className="text-red-600">Помилка завантаження оцінок</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Архів оцінок</h2>
			<div className="bg-white shadow rounded-lg p-6">
				{grades && grades.length > 0 ? (
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID Реєстрації</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Оцінка</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Дата</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Коментар</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{grades.map((grade) => (
									<tr key={grade.id} className="hover:bg-gray-50">
										<td className="px-6 py-4 whitespace-nowrap text-sm">{grade.registrationId}</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="text-lg font-semibold text-blue-600">{grade.gradeValue}</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(grade.gradeDate).toLocaleDateString('uk-UA')}</td>
										<td className="px-6 py-4 text-sm text-gray-500">{grade.comment || '-'}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p className="text-gray-600">Оцінок поки немає</p>
				)}
			</div>
		</div>
	);
}

export default App;
