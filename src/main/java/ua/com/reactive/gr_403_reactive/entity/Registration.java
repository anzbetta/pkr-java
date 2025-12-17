package ua.com.reactive.gr_403_reactive.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table("registrations")
public class Registration {

    @Id
    private Long id;

    @Column("student_id")
    private Long studentId;

    @Column("course_id")
    private Long courseId;

    @Column("registration_date")
    private LocalDateTime registrationDate;

    @Column("status")
    private String status; // "ACTIVE", "COMPLETED", "CANCELLED"
}
