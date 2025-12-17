package ua.com.reactive.gr_403_reactive.repository;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import ua.com.reactive.gr_403_reactive.entity.Course;

@Repository
public interface CourseRepository extends ReactiveCrudRepository<Course, Long> {
    
    @Query("SELECT * FROM courses WHERE teacher_id = :teacherId")
    Flux<Course> findByTeacherId(Long teacherId);
}
