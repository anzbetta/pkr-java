package ua.com.reactive.gr_403_reactive.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Student;
import ua.com.reactive.gr_403_reactive.service.StudentService;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService service;

    @GetMapping
    public Flux<Student> list() {
        return service.list();
    }

    @GetMapping("/{id}")
    public Mono<Student> get(@PathVariable Long id) {
        return service.get(id);
    }

    @PostMapping
    public Mono<Student> create(@RequestBody Student student) {
        return service.create(student);
    }

    @PutMapping("/{id}")
    public Mono<Student> update(@PathVariable Long id, @RequestBody Student student) {
        return service.update(id, student);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
