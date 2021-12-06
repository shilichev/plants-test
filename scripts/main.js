function onClickEvent() {
  window.location.href =
    "https://apps.apple.com/by/app/plantme-plant-identification/id1532875668";
}
function addEvent() {
  if (document.getElementById("button__first-screen")) {
    document
      .getElementById("button__first-screen")
      .addEventListener("click", function () {
        onClickEvent();
      });
  }
  if (document.getElementById("button__second-screen")) {
    document
      .getElementById("button__second-screen")
      .addEventListener("click", function () {
        onClickEvent();
      });
  }
  if (document.getElementById("button__third-screen")) {
    document
      .getElementById("button__third-screen")
      .addEventListener("click", function () {
        onClickEvent();
      });
  }
}

function documentReady() {
  addEvent();
}

documentReady();
