package com.nuri.api.service;

import com.nuri.api.request.ConvertPostReq;
import com.nuri.convert.Convert;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ConvertService {
    public String convert(ConvertPostReq convertPostReq) {
        ArrayList tokens = Convert.lexical(convertPostReq.getUserCode());
        String tokenCode = "";
        for(int i=0; i<tokens.size(); i++){
            tokenCode += tokens.get(i);
        }
        return tokenCode;
    }
}
