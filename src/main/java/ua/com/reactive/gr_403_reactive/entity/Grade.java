package ua.com.reactive.gr_403_reactive.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table("grades")
public class Grade {

    @Id
    private Long id;

    @Column("registration_id")
    private Long registrationId;

    @Column("grade_value")
    private int gradeValue; // Оцінка (наприклад, від 1 до 100)

    @Column("grade_date")
    private LocalDateTime gradeDate;

    @Column("comment")
    private String comment;
}
