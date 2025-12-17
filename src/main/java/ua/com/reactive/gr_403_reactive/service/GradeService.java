package ua.com.reactive.gr_403_reactive.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Grade;
import ua.com.reactive.gr_403_reactive.repository.GradeRepository;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class GradeService {

    private final GradeRepository repository;

    public Flux<Grade> list() {
        return repository.findAll();
    }

    public Mono<Grade> get(Long id) {
        return repository.findById(id);
    }

    public Mono<Grade> getByRegistration(Long registrationId) {
        return repository.findByRegistrationId(registrationId);
    }

    public Flux<Grade> getByStudent(Long studentId) {
        return repository.findByStudentId(studentId);
    }

    public Mono<Grade> create(Grade grade) {
        if (grade.getGradeDate() == null) {
            grade.setGradeDate(LocalDateTime.now());
        }
        return repository.save(grade);
    }

    public Mono<Grade> update(Long id, Grade grade) {
        grade.setId(id);
        return repository.save(grade);
    }

    public Mono<Void> delete(Long id) {
        return repository.deleteById(id);
    }
}
