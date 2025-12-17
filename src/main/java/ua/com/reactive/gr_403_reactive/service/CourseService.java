package ua.com.reactive.gr_403_reactive.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Course;
import ua.com.reactive.gr_403_reactive.repository.CourseRepository;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository repository;

    public Flux<Course> list() {
        return repository.findAll();
    }

    public Mono<Course> get(Long id) {
        return repository.findById(id);
    }

    public Flux<Course> getByTeacher(Long teacherId) {
        return repository.findByTeacherId(teacherId);
    }

    public Mono<Course> create(Course course) {
        return repository.save(course);
    }

    public Mono<Course> update(Long id, Course course) {
        course.setId(id);
        return repository.save(course);
    }

    public Mono<Void> delete(Long id) {
        return repository.deleteById(id);
    }
}
