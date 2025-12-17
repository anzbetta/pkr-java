package ua.com.reactive.gr_403_reactive.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Teacher;
import ua.com.reactive.gr_403_reactive.service.TeacherService;

@RestController
@RequestMapping("/teachers")
@RequiredArgsConstructor
public class TeacherController {

    private final TeacherService service;

    @GetMapping
    public Flux<Teacher> list() {
        return service.list();
    }

    @GetMapping("/{id}")
    public Mono<Teacher> get(@PathVariable Long id) {
        return service.get(id);
    }

    @PostMapping
    public Mono<Teacher> create(@RequestBody Teacher teacher) {
        return service.create(teacher);
    }

    @PutMapping("/{id}")
    public Mono<Teacher> update(@PathVariable Long id, @RequestBody Teacher teacher) {
        return service.update(id, teacher);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
