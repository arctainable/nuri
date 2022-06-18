package com.nuri.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@ApiModel("mathCodeSavePostReq")
public class MathCodeSavePostReq {
    Integer status;
    Long mathgameId;
    String code;
    @ApiModelProperty(hidden=true)
    Date createdAt;
}
