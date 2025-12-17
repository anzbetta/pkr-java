package ua.com.reactive.gr_403_reactive.repository;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Grade;

@Repository
public interface GradeRepository extends ReactiveCrudRepository<Grade, Long> {
    
    @Query("SELECT * FROM grades WHERE registration_id = :registrationId")
    Mono<Grade> findByRegistrationId(Long registrationId);
    
    @Query("SELECT g.* FROM grades g JOIN registrations r ON g.registration_id = r.id WHERE r.student_id = :studentId")
    Flux<Grade> findByStudentId(Long studentId);
}
