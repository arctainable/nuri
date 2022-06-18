package com.nuri.db.repository;

import com.nuri.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import javax.transaction.Transactional;
import java.util.Optional;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * from user where user_email = :user_email", nativeQuery = true)
    User findUserByUserEmail(@Param("user_email") String userEmail);

    @Query(value = "SELECT * from user where user_nickname = :user_nickname", nativeQuery = true)
    User findUserByUserNickname(@Param("user_nickname") String user_nickname);
}