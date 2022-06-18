package com.nuri.api.controller;

import com.nuri.api.request.GameRankSavePostReq;
import com.nuri.api.request.MathCodeSavePostReq;
import com.nuri.api.request.MathGameCodeSavePostReq;
import com.nuri.api.request.PracticeCodeSavePostReq;
import com.nuri.api.response.GameRankRes;
import com.nuri.api.service.CodeService;
import com.nuri.api.service.GameRankService;
import com.nuri.api.service.MathGameService;
import com.nuri.common.auth.NuriUserDetails;
import com.nuri.common.model.response.BaseResponseBody;
import com.nuri.db.entity.MathGame;
import com.nuri.db.entity.MathGameCode;
import com.nuri.db.entity.PracticeCode;
import com.nuri.db.entity.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;
import java.util.Random;
import java.util.Scanner;


@CrossOrigin(origins = "http://localhost:8081")
@Api(value = "게임, 수학문제 API", tags = {"MathGame"})
@RestController
@RequestMapping("/api/v1/mathgame")
public class MathGameController {

    @Autowired
    MathGameService mathgameService;

    @Autowired
    CodeService codeService;

    @Autowired
    GameRankService gamerankService;

    @GetMapping("{type}")
    @ApiOperation(value = "전체 게임/문제 목록 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<MathGame>> findMathGameList(@PathVariable("type") int type){
        List<MathGame> mathgameList = mathgameService.findMathGame(type);
        return ResponseEntity.status(200).body(mathgameList);
    }

    @PatchMapping("{mathgame_id}")
    @ApiOperation(value = "특정 게임/문제 선택 후 조회수 증가")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Integer> updateMathGameViews(@PathVariable("mathgame_id") int mathgameId){
        int updateviews = mathgameService.updateMathGameViews(mathgameId);
        return ResponseEntity.status(200).body(updateviews);
    }

    @GetMapping("/answer/{mathgame_id}")
    @ApiOperation(value = "관리자의 모범 답안을 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<MathGameCode> getAnswer(@PathVariable("mathgame_id") Long mathgameId){
        MathGameCode answercode = codeService.getAnswer(mathgameId);
         if(answercode!=null) {
             return ResponseEntity.status(200).body(answercode);
         }else return ResponseEntity.status(500).body(null);
    }

    @GetMapping("/rank/{mathgame_id}")
    @ApiOperation(value = "게임의 랭킹을 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<GameRankRes>> getGameRank(@PathVariable("mathgame_id") Long mathgameId){
        List<GameRankRes> gamerank = gamerankService.getGameRank(mathgameId);
        return ResponseEntity.status(200).body(gamerank);
    }

    @PostMapping("/rank")
    @ApiOperation(value = "게임이 끝나고 랭킹 저장")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> save(@RequestBody GameRankSavePostReq gamerankSavePostReq, @ApiIgnore Authentication authentication){
        NuriUserDetails userDetails = (NuriUserDetails) authentication.getDetails();
        Long userId = userDetails.getUser().getUserId();
        User user = userDetails.getUser();

        if (gamerankService.saveGameRank(gamerankSavePostReq, user) != null) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Error"));
    }

    @PostMapping("/play")
    @ApiOperation(value = "게임의 도전/성공 여부 저장")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> play(@RequestBody MathGameCodeSavePostReq mathGameCodeSavePostReq, @ApiIgnore Authentication authentication){
        NuriUserDetails userDetails = (NuriUserDetails) authentication.getDetails();
        Long userId = userDetails.getUser().getUserId();
        User user = userDetails.getUser();

        if (codeService.saveMathGameCode(mathGameCodeSavePostReq, user) != null) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Error"));
    }

    @PostMapping("/problem")
    @ApiOperation(value = "수학 문제의 도전/성공 여부 저장")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> problem(@RequestBody MathCodeSavePostReq mathCodeSavePostReq, @ApiIgnore Authentication authentication){
        NuriUserDetails userDetails = (NuriUserDetails) authentication.getDetails();
        Long userId = userDetails.getUser().getUserId();
        User user = userDetails.getUser();

        if (codeService.saveMathCode(mathCodeSavePostReq, user) != null) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Error"));
    }


    @PostMapping("/practice")
    @ApiOperation(value = "ide로 연습 코딩 저장")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> practice(@RequestBody PracticeCodeSavePostReq practiceCodeSavePostReq, @ApiIgnore Authentication authentication) {
        NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
        Long userId = userDetails.getUser().getUserId();
        User user = userDetails.getUser();

        if (codeService.savePracticeCode(practiceCodeSavePostReq, user) != null) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Error"));
    }

    @PostMapping("/playOne")
    @ApiOperation(value = "저장한 개별 게임/문제 코드 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<MathGameCode> playOne(@ApiIgnore Authentication authentication, Long mathgamecodeId) {
        NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
        Long userId = userDetails.getUser().getUserId();
        User user = userDetails.getUser();

        MathGameCode gameCode = codeService.findByMathGameIdAndUserId(user, mathgamecodeId);

        return ResponseEntity.status(200).body(gameCode);
    }

    @PostMapping("/practiceOne")
    @ApiOperation(value = "저장한 개별 ide 코드 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<PracticeCode> practiceOne(@ApiIgnore Authentication authentication, Long practicecodeId) {
        NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
        Long userId = userDetails.getUser().getUserId();
        User user = userDetails.getUser();

        PracticeCode practiceCode = codeService.findByPracticeCodeIdAndUserId(user, practicecodeId);

        return ResponseEntity.status(200).body(practiceCode);
    }

    @GetMapping("/Tgame")
    @ApiOperation(value = "31게임")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public <dict> String Tgame(int count, int uNum){
        Scanner sc = new Scanner(System.in);
        Random r = new Random();
        System.out.println("<<< Game Start >>>");
//        int count = 0;
        String answer = "";
        System.out.println("<< your Turn >>");
        System.out.print("Input Number(1~3) : ");
//          int uNum = 2;
        for (int i = 0; i < uNum; i++) {
            count++;
            if (count == 31) {
                answer = "패배";
                System.out.println("패배");
                return answer;
            } else {
                answer = Integer.toString(count);
                System.out.println((count) + "!");
            }
        }
        if (count >= 31) {
            answer = "패배";
            System.out.println("패배");
            return answer;
        }
        System.out.println("<< Computer Turn >>");
        int cNum = r.nextInt(3) + 1;
        for (int i = 0; i < cNum; i++) {
            count++;
            if (count == 31) {
                System.out.println("승리");
                answer = "승리";
                return answer;
            } else {
                System.out.println((count) + "!");
                answer = Integer.toString(count);
            }
        }
        if (count >= 31) {
            answer = "패배";
            System.out.println("패배");
            return answer;
        }
        return answer;
    }
}
