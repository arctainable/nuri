package com.nuri.api.controller;

import com.nuri.api.request.ConvertPostReq;
import com.nuri.api.service.ConvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.lang.reflect.Array;
import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/console")
public class ConvertController {

    @Autowired
    ConvertService convertService;

    @PostMapping("/convert")
    public ResponseEntity<String> convert(@RequestBody ConvertPostReq convertPostReq){
        String convertCode = convertService.convert(convertPostReq);
        if(convertCode!=null){
            return ResponseEntity.status(200).body(convertCode);
        }else{
            return ResponseEntity.status(500).body(null);
        }
    }
}
