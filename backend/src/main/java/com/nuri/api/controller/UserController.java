package com.nuri.api.controller;

import com.nuri.api.request.UserUpdatePostReq;
import com.nuri.api.response.MathGameCodeRes;
import com.nuri.api.response.PracticeCodeRes;
import com.nuri.api.response.UserRes;
import com.nuri.api.service.CodeService;
import com.nuri.api.service.MathGameService;
import com.nuri.api.service.UserService;
import com.nuri.common.auth.NuriUserDetails;
import com.nuri.common.model.response.BaseResponseBody;
import com.nuri.db.entity.User;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

/**
 * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	CodeService codeService;

	@Autowired
	MathGameService mathGameService;

	@GetMapping()
	@ApiOperation(value = "회원 본인 정보 조회(토큰 기반)", notes = "로그인한 회원 본인의 정보를 응답한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<UserRes> getUserInfo(@ApiIgnore Authentication authentication) {
		/**
		 * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
		 * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
		 */
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);
		return ResponseEntity.status(200).body(UserRes.of(user));
	}

	private final Logger log = LoggerFactory.getLogger(UserController.class);

	// Update(갱신)
	@PatchMapping()
	@ApiOperation(value = "회원 수정(로그인 후 토큰 방식)", notes = "해당 아이디 회원의 정보를 수정한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<? extends BaseResponseBody> updateUser(@RequestBody @ApiParam(value="수정 내용", required = true)UserUpdatePostReq userUpdatePostReq, @ApiIgnore Authentication authentication) {
		NuriUserDetails userDetails = (NuriUserDetails) authentication.getDetails();
		String getUserEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(getUserEmail);
		userService.updateUser(user, userUpdatePostReq);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	// profile image Update(갱신)
	@PatchMapping("/user_photo")
	@ApiOperation(value = "프로필 이미지 수정", notes = "해당 아이디 회원의 프로필 이미지를 수정한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<? extends BaseResponseBody> updateProfileImage(@RequestPart("userPhoto") MultipartFile userPhoto, @ApiIgnore Authentication authentication) throws IOException {
		NuriUserDetails userDetails = (NuriUserDetails) authentication.getDetails();
		String getUserEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(getUserEmail);
		System.out.println(userPhoto.getContentType());

		Base64.Encoder encoder = Base64.getEncoder();
		byte[] photoEncode = encoder.encode(userPhoto.getBytes());
		String photoImg = new String(photoEncode, "UTF8");

		userService.updateUserPhoto(user, photoImg);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	// background image Update(갱신)
	@PatchMapping("/background_image")
	@ApiOperation(value = "프로필 배경화면 수정", notes = "해당 아이디 회원의 프로필 배경화면을 수정한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<? extends BaseResponseBody> updateBackgroundImage(@RequestPart("backgroundImage") MultipartFile backgroundImage, @ApiIgnore Authentication authentication) throws IOException {
		NuriUserDetails userDetails = (NuriUserDetails) authentication.getDetails();
		String getUserEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(getUserEmail);
		System.out.println(backgroundImage.getContentType());

		Base64.Encoder encoder = Base64.getEncoder();
		byte[] photoEncode = encoder.encode(backgroundImage.getBytes());
		String photoImg = new String(photoEncode, "UTF8");

		userService.updateBackgroundImage(user, photoImg);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	// 삭제
	@DeleteMapping()
	@ApiOperation(value = "유저 정보 삭제", notes = "유저 정보 삭제")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<? extends BaseResponseBody> deleteUser(@ApiIgnore Authentication authentication){
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);
		userService.deleteUser(user);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	@GetMapping("checkid")
	@ApiOperation(value = "아이디 중복 체크(사용가능한 아이디 true)", notes = "아이디 중복 체크")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<Boolean> checkUserId(String userId){
		if(userService.getUserByUserEmail(userId)!=null){
			return ResponseEntity.status(200).body(false);
		}
		return ResponseEntity.status(200).body(true);
	}

	@GetMapping("checkname")
	@ApiOperation(value = "닉네임 중복 체크(사용가능한 닉네임 true)", notes = "닉네임 중복 체크")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<Boolean> checkUserNickname(String userNickname){
		if(userService.checkUserNickname(userNickname)!=null){
			return ResponseEntity.status(200).body(false);
		}
		return ResponseEntity.status(200).body(true);
	}

	@GetMapping("{user_nickname_photo}")
	@ApiOperation(value = "닉네임을 통해 프로필 사진 반환", notes = "닉네임을 통해 프로필 사진 반환")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<String> checkUserNicknamePhoto(String userNickname){
		User user = userService.getUserByUserNickname(userNickname);
		return ResponseEntity.status(200).body(user.getUserPhoto());

	}

	@GetMapping("/completed_game")
	@ApiOperation(value = "게임 풀이가 완료된 목록")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<List<MathGameCodeRes>> complete(@ApiIgnore Authentication authentication) {
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);

		List<MathGameCodeRes> gameCodeList = codeService.findCompletedGame(user);

		return ResponseEntity.status(200).body(gameCodeList);
	}

	@GetMapping("/viewed_game")
	@ApiOperation(value = "게임을 도전한 목록")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<List<MathGameCodeRes>> view(@ApiIgnore Authentication authentication) {
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);

		List<MathGameCodeRes> gameCodeRes = codeService.findViewedGame(user);

		return ResponseEntity.status(200).body(gameCodeRes);
	}

	@GetMapping("/completed_problem")
	@ApiOperation(value = "수학 문제 풀이가 완료된 목록")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<List<MathGameCodeRes>> completeProblem(@ApiIgnore Authentication authentication) {
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);

		List<MathGameCodeRes> mathGameCodeList = codeService.findCompletedCode(user);

		return ResponseEntity.status(200).body(mathGameCodeList);
	}


	@GetMapping("/viewed_problem")
	@ApiOperation(value = "수학 문제를 도전한 목록")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<List<MathGameCodeRes>> viewProblem(@ApiIgnore Authentication authentication) {
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);

		List<MathGameCodeRes> mathGameCodeList = codeService.findViewedCode(user);

		return ResponseEntity.status(200).body(mathGameCodeList);
	}

	@GetMapping("/practice")
	@ApiOperation(value = "ide로 저장한 코딩 목록")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<List<PracticeCodeRes>> practice(@ApiIgnore Authentication authentication) {
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);
		List<PracticeCodeRes> practiceCodeList = codeService.findPracticeByUserId(user);
		return ResponseEntity.status(200).body(practiceCodeList);
	}

	@GetMapping("/all_math")
	@ApiOperation(value = "전체 게임/수학문제/Ide 코드 저장목록")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<List[]> allMath(@ApiIgnore Authentication authentication) {
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);

		List<MathGameCodeRes> mathGameCodeTryList = codeService.findViewedCode(user);
		List<MathGameCodeRes> mathGameCodeFinishList = codeService.findCompletedCode(user);
		List<MathGameCodeRes> gameCodeTryRes = codeService.findViewedGame(user);
		List<MathGameCodeRes> gameCodeFinishList = codeService.findCompletedGame(user);
		List<PracticeCodeRes> practiceCodeList = codeService.findPracticeByUserId(user);

//		List<MathGameCodeRes> mathGameCodeList = codeService.findAllCode(user);

		List[] result = {mathGameCodeTryList, mathGameCodeFinishList, gameCodeTryRes, gameCodeFinishList, practiceCodeList};


		return ResponseEntity.status(200).body(result);
	}
}
