var users;

fetch(
  "http://alloworigin.com/get?url=https://www.hackerrank.com/rest/contests/master/tracks/algorithms/leaderboard?type=contest&offset=0&limit=20&level=1&elo_version=true",
  {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    users = data;
    console.log(data);
  })
  .catch((error) => console.log(error));

const users_div = document.getElementsByClassName("leaderboard__players")[0];



