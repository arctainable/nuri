package com.nuri.api.response;

import com.nuri.db.entity.GameRank;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

/**
 * 게임 랭킹 조회 API ([POST] api/v1/mathgame/rank/{mathgame_id}) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("GameRankResponse")
public class GameRankRes {
    Long gamerankId;
    Long mathgameId;
    Long userId;
    String userEmail;
    String userNickname;
    double time;

    public GameRankRes(Long gamerankId, Long mathgameId, Long userId, String userEmail, String userNickname, double time){
        this.gamerankId = gamerankId;
        this.mathgameId = mathgameId;
        this.userId = userId;
        this.userEmail = userEmail;
        this.userNickname = userNickname;
        this.time = time;
    }

    public static GameRankRes of(GameRank gamerank){
        GameRankRes res = new GameRankRes(gamerank.getGamerankId(), gamerank.getMathgame().getMathgameId(), gamerank.getUser().getUserId(), gamerank.getUser().getUserEmail(), gamerank.getUser().getUserNickname(), gamerank.getTime());
        return res;
    }
}
