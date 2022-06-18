const server = {
  BASE_URL: "https://nurihangeul.com:8081",
  Judge_URL: "https://ce.judge0.com",
  Rapid_URL: "https://judge0-ce.p.rapidapi.com",

  ROUTES: {
    signup: "/api/v1/user/signup",
    checkId: "/api/v1/user/checkid",
    checkNickName: "/api/v1/user/checkname",
    login: "/api/v1/user/login",
    userData: "/api/v1/user",
    rank: "/api/v1/mathgame/rank",
    mathgame: "/api/v1/mathgame",
    tGameSetUp: "/api/v1/mathgame/Tgame",
  }

}

export default server;