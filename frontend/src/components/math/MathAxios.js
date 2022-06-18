import axios from "axios";
import server from "../../API/server";

const mathgameUrl = server.BASE_URL + server.ROUTES.mathgame;

function GetAllMath() {
  return axios.get(mathgameUrl + "/1", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function SaveMath(data) {
  return axios.post(mathgameUrl + "/problem", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }) 
}

export { GetAllMath, SaveMath };