package com.nuri.api.service;

import com.nuri.api.request.GameRankSavePostReq;
import com.nuri.api.response.GameRankRes;
import com.nuri.db.entity.GameRank;
import com.nuri.db.entity.MathGame;
import com.nuri.db.entity.User;
import com.nuri.db.repository.GameRankRepository;
import com.nuri.db.repository.MathGameRepository;
import com.nuri.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("GameRankService")
public class GameRankServiceImpl implements GameRankService{

    @Autowired
    GameRankRepository gameRankRepository;
    @Autowired
    MathGameRepository mathgameRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public List<GameRankRes> getGameRank(Long mathgameId) {
        List<GameRank> gamerank = gameRankRepository.findByMathGameIdOrderByTimeAsc(mathgameId);
        List<GameRankRes> gamerankResult = new LinkedList<GameRankRes>();
        for(int i=0; i<gamerank.size(); i++){
            User user = userRepository.getOne(gamerank.get(i).getUser().getUserId());
            String userEmail = user.getUserEmail();
            gamerankResult.add(GameRankRes.of(gamerank.get(i)));
        }
        return gamerankResult;
    }

    @Override
    public GameRank saveGameRank(GameRankSavePostReq gamerankSavePostReq, User user) {
        GameRank gamerank = new GameRank();
        gamerank.setUser(user);
        gamerank.setGamerankId(gamerankSavePostReq.getMathgameId());
        gamerank.setTime(gamerankSavePostReq.getTime());

        MathGame mathgame = mathgameRepository.getOne(gamerankSavePostReq.getMathgameId());
        gamerank.setMathgame(mathgame);

        List<GameRank> gamerankList = gameRankRepository.findByMathGameId(gamerankSavePostReq.getMathgameId());
        if(gamerankList.size()<5){
            GameRank existgamerank = gameRankRepository.findByUserId(user.getUserId());
            if(existgamerank!=null){
                gameRankRepository.delete(existgamerank);
            }
            gamerank = gameRankRepository.save(gamerank);
        }else{
            Collections.sort(gamerankList);

            if(gamerankList.get(gamerankList.size()-1).getTime()>gamerankSavePostReq.getTime()){
                GameRank existgamerank = gameRankRepository.findByUserId(user.getUserId());
                if(existgamerank!=null){
                    if(existgamerank.getTime()>gamerankSavePostReq.getTime()){
                        gameRankRepository.delete(existgamerank);
                        gamerank = gameRankRepository.save(gamerank);
                    }else{
                        gamerank=null;
                    }
                }else{
                    gameRankRepository.delete(gamerankList.get(gamerankList.size()-1));
                    gamerank = gameRankRepository.save(gamerank);
                }
            }else{
                gamerank = null;
            }
        }

        return gamerank;
    }
}
