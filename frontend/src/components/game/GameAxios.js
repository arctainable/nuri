import server from "../../API/server";
import axios from "axios";

const rankUrl = server.BASE_URL + server.ROUTES.rank;
const mathgameUrl = server.BASE_URL + server.ROUTES.mathgame;

function SaveRank(data) {
  return axios.post(rankUrl, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function GetRank(mathgameId) {
  return axios.get(rankUrl + `/${mathgameId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function SaveGame(data) {
  return axios.post(mathgameUrl + "/play", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function addViews(mathgameId) {
  return axios.patch(mathgameUrl + `/${mathgameId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

export { SaveRank, GetRank, SaveGame, addViews }