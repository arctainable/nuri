package com.nuri.api.response;

import com.nuri.db.entity.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserResponse")
public class UserRes{
	@ApiModelProperty(name="User ID", example = "nuri@naver.com")
	String userNickname;
	String userEmail;
	String userPhoto;
	String userBackgroundImage;
	Integer isAdmin;
	Date createdAt;

	public UserRes(String userEmail, Integer isAdmin, String userPhoto, String userBackgroundImage, String userNickname, Date createdAt) {
		this.userEmail = userEmail;
		this.isAdmin = isAdmin;
		this.userPhoto = userPhoto;
		this.userBackgroundImage = userBackgroundImage;
		this.userNickname = userNickname;
		this.createdAt = createdAt;
	}

	public static UserRes of(User user) {
		UserRes res = new UserRes(user.getUserEmail(),user.getIsAdmin(), user.getUserPhoto(), user.getBackgroundImage(), user.getUserNickname(), user.getCreatedAt());
		return res;
	}
}
