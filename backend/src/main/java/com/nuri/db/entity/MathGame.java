package com.nuri.db.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "mathgame")
@NoArgsConstructor
@Getter
@Setter
public class MathGame {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="mathgame_id", nullable = false)
    Long mathgameId;

    @JsonManagedReference
    @OneToMany(mappedBy = "mathgame")
    List<MathGameCode> codes = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "mathgame")
    List<GameRank> gameranks = new ArrayList<>();

    @Column(name="content", nullable = false, length = 5000)
    String content;
    @Column(name="type", nullable = false)
    int type;
    @Column(name="title", nullable = false)
    String title;
    @Column(name="thumbnail", nullable = false)
    String thumbnail;
    @Column(name="image")
    String image;
    @Column(name="views", nullable = false)
    int views;
    @Column(name="help")
    String help;

    @Override
    public String toString() {
        return "MathGame{" +
                "mathgameId=" + mathgameId +
                ", codes=" + codes +
                ", content='" + content + '\'' +
                ", type=" + type +
                ", title='" + title + '\'' +
                ", thumbnail='" + thumbnail + '\'' +
                ", image='" + image + '\'' +
                ", views=" + views +
                ", help='" + help + '\'' +
                '}';
    }
}
