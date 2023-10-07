function displayData(data) {
  // 데이터를 가져와서 웹 페이지에 표시합니다.
  var dataContainer = document.getElementById("dataContainer");
  dataContainer.textContent = "서버에서 가져온 데이터: " + JSON.stringify(data);
}

// axios를 사용하여 백엔드 서버로 HTTP GET 요청을 보냅니다.
axios
  .get("http://52.79.227.4/")
  .then(function (response) {
    var responseData = response.data;
    displayData(responseData);
  })
  .catch(function (error) {
    console.error("에러 발생:", error);
    displayData({ result: "error" });
  });
