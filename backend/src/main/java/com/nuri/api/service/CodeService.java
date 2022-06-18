package com.nuri.api.service;

import com.nuri.api.request.MathCodeSavePostReq;
import com.nuri.api.request.MathGameCodeSavePostReq;
import com.nuri.api.request.PracticeCodeSavePostReq;
import com.nuri.api.response.MathGameCodeRes;
import com.nuri.api.response.PracticeCodeRes;
import com.nuri.db.entity.MathGameCode;
import com.nuri.db.entity.PracticeCode;
import com.nuri.db.entity.User;

import java.util.List;

public interface CodeService {
    MathGameCode getAnswer(Long mathgameId);
    MathGameCode saveMathGameCode(MathGameCodeSavePostReq mathGameCodeSavePostReq, User user);
    MathGameCode saveMathCode(MathCodeSavePostReq mathCodeSavePostReq, User user);
    PracticeCode savePracticeCode(PracticeCodeSavePostReq practiceCodeSavePostReq, User user);


    List<MathGameCodeRes> findCompletedGame(User user);
    List<MathGameCodeRes> findViewedGame(User user);

    List<MathGameCodeRes> findCompletedCode(User user);
    List<MathGameCodeRes> findViewedCode(User user);
    List<MathGameCodeRes> findAllCode(User user);

    List<PracticeCodeRes> findPracticeByUserId(User user);

    MathGameCode findByMathGameIdAndUserId(User user, Long mathgamecodeId);
    PracticeCode findByPracticeCodeIdAndUserId(User user, Long practicecodeId);

}
