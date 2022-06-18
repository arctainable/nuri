package com.nuri.api.service;

import com.nuri.api.request.MathCodeSavePostReq;
import com.nuri.api.request.MathGameCodeSavePostReq;
import com.nuri.api.request.PracticeCodeSavePostReq;
import com.nuri.api.response.MathGameCodeRes;
import com.nuri.api.response.PracticeCodeRes;
import com.nuri.db.entity.MathGame;
import com.nuri.db.entity.MathGameCode;
import com.nuri.db.entity.PracticeCode;
import com.nuri.db.entity.User;
import com.nuri.db.repository.CodeRepository;
import com.nuri.db.repository.MathGameRepository;
import com.nuri.db.repository.PracticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service("CodeService")
public class CodeServiceImpl implements CodeService{
    @Autowired
    CodeRepository codeRepository;
    @Autowired
    MathGameRepository mathgameRepository;
    @Autowired
    PracticeRepository practiceRepository;

    @Override
    public MathGameCode getAnswer(Long mathgameId) {
        MathGameCode answercode = codeRepository.getAnswer(mathgameId);
        return answercode;
    }

    @Override
    public MathGameCode saveMathGameCode(MathGameCodeSavePostReq mathGameCodeSavePostReq, User user) {
        MathGameCode mathGameCode = new MathGameCode();
        mathGameCode.setUser(user);
//        mathGameCode.setMathgamecodeId(mathGameCode.getMathgamecodeId());
        mathGameCode.setStatus(mathGameCodeSavePostReq.getStatus());
        MathGame mathgame = mathgameRepository.getOne(mathGameCodeSavePostReq.getMathgameId());
        mathGameCode.setMathgame(mathgame);
        MathGameCode mathGameCodeExist = codeRepository.findByMathGameIdAndUserId(user.getUserId(), mathGameCodeSavePostReq.getMathgameId());
        // 먼저 이 유저가 이 게임을 한 적이 있는지 (null값 여부 판단)
        // 있다면 해결한 게임이 아닌 경우 즉, 도전한 게임인 경우 이전 기록 삭제 후 저장
        if(mathGameCodeExist!=null) {
            // 있는데 해결한 게임인 경우, 도전한 게임으로 안바뀌게!
            if (mathGameCodeExist.getStatus() != 1) {  // 해결한 게임이 아닌 경우
                // null값이 아니면( 중복 방지 )
                codeRepository.delete(mathGameCodeExist);  // 이미 있는 게임 기록을 삭제
                codeRepository.save(mathGameCode);  // 후 저장
            }
        }else{
            codeRepository.save(mathGameCode);
        }
        return mathGameCode;
    }

    @Override
    public MathGameCode saveMathCode(MathCodeSavePostReq mathCodeSavePostReq, User user) {
        MathGameCode mathGameCode = new MathGameCode();
        mathGameCode.setUser(user);
        mathGameCode.setCode(mathCodeSavePostReq.getCode());
//      mathGameCode.setMathgamecodeId(mathGameCode.getMathgamecodeId());
        mathGameCode.setStatus(mathCodeSavePostReq.getStatus());
        MathGame mathgame = mathgameRepository.getOne(mathCodeSavePostReq.getMathgameId());
        mathGameCode.setMathgame(mathgame);
        MathGameCode mathGameCodeExist = codeRepository.findByMathGameIdAndUserId(user.getUserId(), mathCodeSavePostReq.getMathgameId());
        if(mathGameCodeExist!=null) {
            codeRepository.delete(mathGameCodeExist);
        }
        codeRepository.save(mathGameCode);
        return mathGameCode;
    }


    @Override
    public List<MathGameCodeRes> findCompletedGame(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findMathGameCompletedByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }

    @Override
    public List<MathGameCodeRes> findViewedGame(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findMathGameViewedByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }

    @Override
    public List<MathGameCodeRes> findCompletedCode(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findMathCompletedByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }

    @Override
    public List<MathGameCodeRes> findViewedCode(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findMathViewedByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }

    @Override
    public List<MathGameCodeRes> findAllCode(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findAllMathByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }


    @Override
    public PracticeCode savePracticeCode(PracticeCodeSavePostReq practiceCodeSavePostReq, User user) {
        PracticeCode practiceCode = new PracticeCode();
        practiceCode.setUser(user);
        practiceCode.setCode(practiceCodeSavePostReq.getCode());
        practiceCode.setTitle(practiceCodeSavePostReq.getTitle());
        PracticeCode practiceCodeExist = practiceRepository.findByTitleAndUserId(user.getUserId(), practiceCodeSavePostReq.getTitle());
        if(practiceCodeExist!=null) {
            practiceRepository.delete(practiceCodeExist);
        }
        practiceRepository.save(practiceCode);
        return practiceCode;
    }

    @Override
    public List<PracticeCodeRes> findPracticeByUserId(User user) {
        List<PracticeCode> practiceCodeList = practiceRepository.findPracticeByUserId(user.getUserId());
        List<PracticeCodeRes> practiceCodeResList = new LinkedList<>();
        for(int i=0; i<practiceCodeList.size(); i++){
            practiceCodeResList.add(PracticeCodeRes.of(practiceCodeList.get(i)));
        }
        return practiceCodeResList;
    }

    @Override
    public MathGameCode findByMathGameIdAndUserId(User user, Long mathgamecodeId) {
        MathGameCode mathGameCode = codeRepository.findByMathGameIdAndUserId(user.getUserId(), mathgamecodeId);
        return mathGameCode;
    }

    @Override
    public PracticeCode findByPracticeCodeIdAndUserId(User user, Long practicecodeId) {
        PracticeCode practiceCode = practiceRepository.findByPracticeCodeIdAndUserId(user.getUserId(), practicecodeId);
        return practiceCode;
    }


}