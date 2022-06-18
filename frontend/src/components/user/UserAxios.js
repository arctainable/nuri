import axios from "axios";
import server from "../../API/server";

const checkIdUrl = server.BASE_URL + server.ROUTES.checkId;
const checkNickNameUrl = server.BASE_URL + server.ROUTES.checkNickName;
const signupUrl = server.BASE_URL + server.ROUTES.signup;
const loginUrl = server.BASE_URL + server.ROUTES.login;
const userInfoUrl = server.BASE_URL + server.ROUTES.userData;
const tGameUrl= server.BASE_URL + server.ROUTES.tGameSetUp;

function CheckId(id) {
  const params = { userId: id };
  return axios.get(checkIdUrl, { params })
}

function CheckNickName(nickName) {
  const params = { userNickname: nickName };
  return axios.get(checkNickNameUrl, { params });
}

function UserSignup(data) {
  return axios.post(signupUrl, data);
}

function UserLogin(data) {
  return axios.post(loginUrl, data);
}

function UserInfo() {
  return axios.get(userInfoUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    }
  })
}

function ChangeUserNickname(data) {
  return axios.patch(userInfoUrl, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function ChangeUserPhoto(data) {
  return fetch(userInfoUrl + '/user_photo', {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: data,
  })
}

function ChangeUserBackgroundImg(data) {
  return fetch(userInfoUrl + '/background_image', {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: data,
  })
}

function GetUserChallengeGame() {
  return axios.get(userInfoUrl + '/viewed_game', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function GetUserSuccessGame() {
  return axios.get(userInfoUrl + '/completed_game', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function GetUserChallengeMath() {
  return axios.get(userInfoUrl + '/viewed_problem', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function GetUserSuccessMath() {
  return axios.get(userInfoUrl + '/completed_problem', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function GetUserPractice() {
  return axios.get(userInfoUrl + '/practice', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function GetAllSaveData() {
  return axios.get(userInfoUrl + "/all_math", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function TGameSetUp(count, uNum) {
  const params = { count: count, uNum: uNum };
  return axios.get(tGameUrl, { params });
}

export { 
  CheckId, 
  CheckNickName, 
  UserSignup, 
  UserLogin, 
  UserInfo, 
  ChangeUserNickname, 
  ChangeUserPhoto, 
  ChangeUserBackgroundImg, 
  GetUserChallengeGame,
  GetUserSuccessGame,
  GetUserChallengeMath,
  GetUserSuccessMath,
  GetUserPractice,
  GetAllSaveData,
  TGameSetUp 
};