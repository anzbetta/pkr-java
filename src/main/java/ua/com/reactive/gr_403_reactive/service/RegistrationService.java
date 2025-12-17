package ua.com.reactive.gr_403_reactive.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Registration;
import ua.com.reactive.gr_403_reactive.repository.RegistrationRepository;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class RegistrationService {

    private final RegistrationRepository repository;

    public Flux<Registration> list() {
        return repository.findAll();
    }

    public Mono<Registration> get(Long id) {
        return repository.findById(id);
    }

    public Flux<Registration> getByStudent(Long studentId) {
        return repository.findByStudentId(studentId);
    }

    public Flux<Registration> getByCourse(Long courseId) {
        return repository.findByCourseId(courseId);
    }

    public Mono<Registration> create(Registration registration) {
        if (registration.getRegistrationDate() == null) {
            registration.setRegistrationDate(LocalDateTime.now());
        }
        if (registration.getStatus() == null) {
            registration.setStatus("ACTIVE");
        }
        return repository.save(registration);
    }

    public Mono<Registration> update(Long id, Registration registration) {
        registration.setId(id);
        return repository.save(registration);
    }

    public Mono<Void> delete(Long id) {
        return repository.deleteById(id);
    }
}
