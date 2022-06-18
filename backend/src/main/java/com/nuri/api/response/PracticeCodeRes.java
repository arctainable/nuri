package com.nuri.api.response;

import com.nuri.db.entity.PracticeCode;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.time.OffsetDateTime;

/**
 * 게임 랭킹 조회 API ([POST] api/v1/mathgame/rank/{mathgame_id}) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("PracticeCodeResponse")
public class PracticeCodeRes {
    Long practicecodeId;
    String title;
    String code;
    OffsetDateTime createdAt;

    public PracticeCodeRes(Long practicecodeId, String title, String code, OffsetDateTime createdAt){
        this.practicecodeId = practicecodeId;
        this.title = title;
        this.code = code;
        this.createdAt = createdAt;
    }

    public static PracticeCodeRes of(PracticeCode practiceCode){
        PracticeCodeRes res = new PracticeCodeRes(practiceCode.getPracticecodeId(), practiceCode.getTitle(), practiceCode.getCode(), practiceCode.getCreatedAt());
        return res;
    }
}
