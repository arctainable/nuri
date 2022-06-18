package com.nuri.api.service;

import com.nuri.api.request.GameRankSavePostReq;
import com.nuri.api.response.GameRankRes;
import com.nuri.db.entity.GameRank;
import com.nuri.db.entity.User;
import java.util.List;

public interface GameRankService {
    List<GameRankRes> getGameRank(Long mathgameId);
    GameRank saveGameRank(GameRankSavePostReq gamerankSavePostReq, User user);
}
