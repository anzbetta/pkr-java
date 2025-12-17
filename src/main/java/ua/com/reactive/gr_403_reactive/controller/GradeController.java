package ua.com.reactive.gr_403_reactive.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Grade;
import ua.com.reactive.gr_403_reactive.service.GradeService;

@RestController
@RequestMapping("/grades")
@RequiredArgsConstructor
public class GradeController {

    private final GradeService service;

    @GetMapping
    public Flux<Grade> list() {
        return service.list();
    }

    @GetMapping("/{id}")
    public Mono<Grade> get(@PathVariable Long id) {
        return service.get(id);
    }

    @GetMapping("/registration/{registrationId}")
    public Mono<Grade> getByRegistration(@PathVariable Long registrationId) {
        return service.getByRegistration(registrationId);
    }

    @GetMapping("/student/{studentId}")
    public Flux<Grade> getByStudent(@PathVariable Long studentId) {
        return service.getByStudent(studentId);
    }

    @PostMapping
    public Mono<Grade> create(@RequestBody Grade grade) {
        return service.create(grade);
    }

    @PutMapping("/{id}")
    public Mono<Grade> update(@PathVariable Long id, @RequestBody Grade grade) {
        return service.update(id, grade);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
