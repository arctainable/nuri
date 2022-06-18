import axios from "axios";
import server from "../../API/server";

const mathgameUrl = server.BASE_URL + server.ROUTES.mathgame;

function SavePratice(data) {
  return axios.post(mathgameUrl + "/practice", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

export { SavePratice }