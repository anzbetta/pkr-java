package ua.com.reactive.gr_403_reactive.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import ua.com.reactive.gr_403_reactive.entity.Teacher;

@Repository
public interface TeacherRepository extends ReactiveCrudRepository<Teacher, Long> {
}
