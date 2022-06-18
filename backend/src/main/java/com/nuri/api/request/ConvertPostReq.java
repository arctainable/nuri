package com.nuri.api.request;

import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("convertPostReq")
public class ConvertPostReq {
    Long id;
    String userCode;
    Long mathGameId;
}
