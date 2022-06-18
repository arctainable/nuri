package com.nuri.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 게임 종료 후 랭킹 저장 API ([PATCH] api/v1/mathgame/rank) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@ApiModel("gamerankPostReq")
public class GameRankSavePostReq {
    @ApiModelProperty(name="mathgametable의 id", example="1")
    Long mathgameId;
    @ApiModelProperty(name="유저의 게임 플레이 시간", example="5.67")
    double time;
}
