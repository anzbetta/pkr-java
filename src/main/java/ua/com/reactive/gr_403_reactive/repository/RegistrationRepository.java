package ua.com.reactive.gr_403_reactive.repository;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import ua.com.reactive.gr_403_reactive.entity.Registration;

@Repository
public interface RegistrationRepository extends ReactiveCrudRepository<Registration, Long> {
    
    @Query("SELECT * FROM registrations WHERE student_id = :studentId")
    Flux<Registration> findByStudentId(Long studentId);
    
    @Query("SELECT * FROM registrations WHERE course_id = :courseId")
    Flux<Registration> findByCourseId(Long courseId);
}
