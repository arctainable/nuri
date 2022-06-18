package com.nuri.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "gamerank")
@NoArgsConstructor
@Getter
@Setter
public class GameRank implements Comparable<GameRank>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="gamerank_id", nullable = false)
    Long gamerankId;

    @ManyToOne
    @JoinColumn(name="mathgame_id", nullable = false)
    @JsonBackReference
    MathGame mathgame;
    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    @JsonBackReference
    User user;
    @Column(name="time", nullable = false)
    double time;

    @Override
    public int compareTo(GameRank o) {
        int result=0;
        if(this.time<o.time) result=-1;
        else if(this.time==o.time) result=0;
        else result=1;
        return result;
    }
}
