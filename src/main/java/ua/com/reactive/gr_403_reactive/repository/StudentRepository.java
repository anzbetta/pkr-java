package ua.com.reactive.gr_403_reactive.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import ua.com.reactive.gr_403_reactive.entity.Student;

@Repository
public interface StudentRepository extends ReactiveCrudRepository<Student, Long> {
}
