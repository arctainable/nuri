package com.nuri.api.service;

import com.nuri.db.entity.MathGame;

import java.util.List;

public interface MathGameService {
    List<MathGame> findMathGame(int type);
    int updateMathGameViews(long mathgameId);
    List<MathGame> findMathGamebyId(Long mathGameId);

}
