package ua.com.reactive.gr_403_reactive.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Registration;
import ua.com.reactive.gr_403_reactive.service.RegistrationService;

@RestController
@RequestMapping("/registrations")
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationService service;

    @GetMapping
    public Flux<Registration> list() {
        return service.list();
    }

    @GetMapping("/{id}")
    public Mono<Registration> get(@PathVariable Long id) {
        return service.get(id);
    }

    @GetMapping("/student/{studentId}")
    public Flux<Registration> getByStudent(@PathVariable Long studentId) {
        return service.getByStudent(studentId);
    }

    @GetMapping("/course/{courseId}")
    public Flux<Registration> getByCourse(@PathVariable Long courseId) {
        return service.getByCourse(courseId);
    }

    @PostMapping
    public Mono<Registration> create(@RequestBody Registration registration) {
        return service.create(registration);
    }

    @PutMapping("/{id}")
    public Mono<Registration> update(@PathVariable Long id, @RequestBody Registration registration) {
        return service.update(id, registration);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
