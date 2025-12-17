package ua.com.reactive.gr_403_reactive.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Student;
import ua.com.reactive.gr_403_reactive.repository.StudentRepository;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository repository;

    public Flux<Student> list() {
        return repository.findAll();
    }

    public Mono<Student> get(Long id) {
        return repository.findById(id);
    }

    public Mono<Student> create(Student student) {
        return repository.save(student);
    }

    public Mono<Student> update(Long id, Student student) {
        student.setId(id);
        return repository.save(student);
    }

    public Mono<Void> delete(Long id) {
        return repository.deleteById(id);
    }
}
