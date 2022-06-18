package com.nuri.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@ApiModel("PracticeCodeSavePostReq")
public class PracticeCodeSavePostReq {
        String title;
        String code;
        @ApiModelProperty(hidden=true)
        Date createdAt;

}
