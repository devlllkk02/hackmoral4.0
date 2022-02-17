
// var info;
fetch(
  "https://cors-anywhere.herokuapp.com/https://www.hackerrank.com/rest/contests/master/tracks/algorithms/leaderboard?type=contest&offset=0&limit=20&level=1&elo_version=true",
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
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
