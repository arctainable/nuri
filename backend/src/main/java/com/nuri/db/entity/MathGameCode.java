package com.nuri.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "mathgamecode")
@NoArgsConstructor
@Getter
@Setter
public class MathGameCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="mathgamecode_id", nullable = false)
    Long mathgamecodeId;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    @JsonBackReference
    User user;
    @ManyToOne
    @JoinColumn(name="mathgame_id", nullable = false)
    @JsonBackReference
    MathGame mathgame;
    @Column(name="code", length = 5000)
    String code;
    @Column(name="status", nullable = false)
    int status;
    @Column(name="created_at", nullable = false)
    OffsetDateTime createdAt = OffsetDateTime.now();

}
