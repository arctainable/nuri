package com.nuri.api.response;

import com.nuri.common.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("AnswerCodeResponse")
public class AnswerCodeRes extends BaseResponseBody {
    Long codeId;
    Long adminId;
    Long mathgameId;
    String code;

    public static AnswerCodeRes of(Integer statusCode, String message, Long codeId, Long adminId, Long mathgameId, String code){
        AnswerCodeRes res = new AnswerCodeRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setCodeId(codeId);
        res.setAdminId(adminId);
        res.setMathgameId(mathgameId);
        res.setCode(code);
        return res;
    }
}
