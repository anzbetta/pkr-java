package ua.com.reactive.gr_403_reactive.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Teacher;
import ua.com.reactive.gr_403_reactive.repository.TeacherRepository;

@Service
@RequiredArgsConstructor
public class TeacherService {

    private final TeacherRepository repository;

    public Flux<Teacher> list() {
        return repository.findAll();
    }

    public Mono<Teacher> get(Long id) {
        return repository.findById(id);
    }

    public Mono<Teacher> create(Teacher teacher) {
        return repository.save(teacher);
    }

    public Mono<Teacher> update(Long id, Teacher teacher) {
        teacher.setId(id);
        return repository.save(teacher);
    }

    public Mono<Void> delete(Long id) {
        return repository.deleteById(id);
    }
}
