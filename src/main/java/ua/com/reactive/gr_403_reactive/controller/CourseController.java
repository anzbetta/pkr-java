package ua.com.reactive.gr_403_reactive.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ua.com.reactive.gr_403_reactive.entity.Course;
import ua.com.reactive.gr_403_reactive.service.CourseService;

@RestController
@RequestMapping("/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService service;

    @GetMapping
    public Flux<Course> list() {
        return service.list();
    }

    @GetMapping("/{id}")
    public Mono<Course> get(@PathVariable Long id) {
        return service.get(id);
    }

    @GetMapping("/teacher/{teacherId}")
    public Flux<Course> getByTeacher(@PathVariable Long teacherId) {
        return service.getByTeacher(teacherId);
    }

    @PostMapping
    public Mono<Course> create(@RequestBody Course course) {
        return service.create(course);
    }

    @PutMapping("/{id}")
    public Mono<Course> update(@PathVariable Long id, @RequestBody Course course) {
        return service.update(id, course);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
