package com.nuri.db.repository;

import com.nuri.db.entity.MathGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface MathGameRepository extends JpaRepository<MathGame, Long> {
    @Query(value = "SELECT * from mathgame where type = :type", nativeQuery = true)
    List<MathGame> findMathGamebytype(@Param("type") int type);

    @Query(value = "SELECT * from mathgame where mathgame_id = :mathgameId", nativeQuery = true)
    List<MathGame> findMathGamebyId(@Param("mathgameId") Long mathgameId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE mathgame set views = views + 1 where mathgame_id = :id", nativeQuery = true)
    void updateMathGameViews(@Param("id") Long id);
}
