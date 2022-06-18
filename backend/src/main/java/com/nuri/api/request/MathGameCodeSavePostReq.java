package com.nuri.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@ApiModel("mathGameCodeSavePostReq")
public class MathGameCodeSavePostReq {
    Integer status;
    Long mathgameId;
    @ApiModelProperty(hidden=true)
    Date createdAt;

}
