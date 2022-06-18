package com.nuri.api.response;

import com.nuri.db.entity.MathGame;
import com.nuri.db.entity.MathGameCode;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.time.OffsetDateTime;

@Getter
@Setter
@ApiModel("GameRankResponse")
public class MathGameCodeRes {
    Long mathgameId;
    String title;
    String code;
    int status;
    int views;
    OffsetDateTime createdAt;

    public MathGameCodeRes(Long mathgameId, String title, String code, int status, int views, OffsetDateTime createdAt){
        this.mathgameId = mathgameId;
        this.title = title;
        this.code = code;
        this.status = status;
        this.views = views;
        this.createdAt = createdAt;
    }

    public static MathGameCodeRes of(MathGameCode mathGameCode, MathGame mathGame){
        MathGameCodeRes res = new MathGameCodeRes(mathGame.getMathgameId(), mathGame.getTitle(), mathGameCode.getCode(), mathGameCode.getStatus(), mathGame.getViews(), mathGameCode.getCreatedAt());
        return res;
    }
}
