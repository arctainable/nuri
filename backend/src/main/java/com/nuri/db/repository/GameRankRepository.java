package com.nuri.db.repository;

import com.nuri.db.entity.GameRank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GameRankRepository extends JpaRepository<GameRank, Long> {
    @Query(value = "SELECT * from gamerank where mathgame_id = :mathgame_id", nativeQuery = true)
    List<GameRank> findByMathGameId(@Param("mathgame_id") Long mathgameId);

    @Query(value = "SELECT * from gamerank where mathgame_id = :mathgame_id order by time asc", nativeQuery = true)
    List<GameRank> findByMathGameIdOrderByTimeAsc(@Param("mathgame_id") Long mathgameId);

    @Query(value = "SELECT * from gamerank where user_id = :user_id", nativeQuery = true)
    GameRank findByUserId(@Param("user_id")Long userId);
}
