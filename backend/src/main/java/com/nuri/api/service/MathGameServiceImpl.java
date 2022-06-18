package com.nuri.api.service;

import com.nuri.db.entity.MathGame;
import com.nuri.db.repository.MathGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("MathGameService")
public class MathGameServiceImpl implements MathGameService{
    @Autowired
    MathGameRepository mathgameRepository;

    @Override
    public List<MathGame> findMathGame(int type) {
        return mathgameRepository.findMathGamebytype(type);
    }

    @Override
    public int updateMathGameViews(long mathgameId) {
        mathgameRepository.updateMathGameViews(mathgameId);
        MathGame updateMathGame = mathgameRepository.getOne(mathgameId);
        return updateMathGame.getViews();
    }

    @Override
    public List<MathGame> findMathGamebyId(Long mathGameId) {
        return mathgameRepository.findMathGamebyId(mathGameId);
    }


}
