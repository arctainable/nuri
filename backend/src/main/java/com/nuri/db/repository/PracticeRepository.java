package com.nuri.db.repository;

import com.nuri.db.entity.PracticeCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PracticeRepository extends JpaRepository<PracticeCode, Long> {

    @Query(value = "SELECT * from practicecode where user_id = :userId and title = :title", nativeQuery = true)
    PracticeCode findByTitleAndUserId(@Param("userId") Long userId, @Param("title") String title);

    @Query(value = "SELECT * from practicecode where user_id = :userId and practicecode_id = :practicecodeId", nativeQuery = true)
    PracticeCode findByPracticeCodeIdAndUserId(@Param("userId") Long userId, @Param("practicecodeId") Long practicecodeId);

    @Query(value = "SELECT * from practicecode where user_id = :userId", nativeQuery = true)
    List<PracticeCode> findPracticeByUserId(@Param("userId") Long userId);

}
