package com.nuri.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "testcase")
@NoArgsConstructor
@Getter
@Setter
public class Testcase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="testcase_id", nullable = false)
    Long testcaseId;

    @ManyToOne
    @JoinColumn(name="mathgame_id")
    MathGame mathgame;
    @Column(name="problem")
    String problem;
    @Column(name="answer")
    String answer;

    @Override
    public String toString() {
        return "Testcase{" +
                "testcaseId=" + testcaseId +
                ", mathgame=" + mathgame +
                ", problem='" + problem + '\'' +
                ", answer='" + answer + '\'' +
                '}';
    }
}
