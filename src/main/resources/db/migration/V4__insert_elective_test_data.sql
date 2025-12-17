-- Тестові дані для викладачів
INSERT INTO teachers (first_name, last_name, email, specialization) VALUES
('Іван', 'Петренко', 'ivan.petrenko@university.ua', 'Математика'),
('Марія', 'Коваленко', 'maria.kovalenko@university.ua', 'Програмування'),
('Олександр', 'Шевченко', 'oleksandr.shevchenko@university.ua', 'Фізика');

-- Тестові дані для студентів
INSERT INTO students (first_name, last_name, email, group_name) VALUES
('Тарас', 'Іваненко', 'taras.ivanenko@student.ua', 'КН-401'),
('Ольга', 'Мельник', 'olga.melnyk@student.ua', 'КН-401'),
('Андрій', 'Бойко', 'andriy.boyko@student.ua', 'КН-402'),
('Катерина', 'Ткаченко', 'kateryna.tkachenko@student.ua', 'КН-402'),
('Дмитро', 'Савченко', 'dmytro.savchenko@student.ua', 'КН-403');

-- Тестові дані для курсів
INSERT INTO courses (name, description, duration_hours, teacher_id) VALUES
('Вища математика', 'Курс з вищої математики для студентів 1-2 курсів', 60, 1),
('Java програмування', 'Основи об''єктно-орієнтованого програмування на Java', 90, 2),
('Spring Framework', 'Розробка веб-застосунків з використанням Spring Boot', 120, 2),
('Загальна фізика', 'Курс загальної фізики для технічних спеціальностей', 80, 3);

-- Тестові дані для реєстрацій
INSERT INTO registrations (student_id, course_id, registration_date, status) VALUES
(1, 1, '2024-01-15 10:00:00', 'COMPLETED'),
(1, 2, '2024-01-20 14:30:00', 'ACTIVE'),
(2, 2, '2024-01-21 09:15:00', 'ACTIVE'),
(2, 3, '2024-01-22 11:00:00', 'ACTIVE'),
(3, 1, '2024-01-18 13:45:00', 'COMPLETED'),
(3, 4, '2024-01-25 10:30:00', 'ACTIVE'),
(4, 3, '2024-01-23 15:20:00', 'ACTIVE'),
(5, 2, '2024-01-19 12:00:00', 'CANCELLED');

-- Тестові дані для оцінок (тільки для завершених курсів)
INSERT INTO grades (registration_id, grade_value, grade_date, comment) VALUES
(1, 85, '2024-05-20 16:00:00', 'Відмінне засвоєння матеріалу'),
(5, 92, '2024-05-22 14:30:00', 'Чудова робота, високий рівень знань');
