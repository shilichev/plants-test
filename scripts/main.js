var screen = "SECOND_SCREEN";

var FIRST_SCREEN = `<div class="container__first-screen">
    <div>
      <div class="title__app-name">
        <div>
        <img src="images/icon.png" alt="" />
        <p>PlantMe</p>
        </div>
    </div>
    <div class="title__first-screen">
        STOP<br />
        Killing your plants
    </div>
</div>

<div class="content__first-screen">
  <div class="content-title__first-screen">Golden Pothos</div>
  <div class="content-list__first-screen">
    <div class="content-list__item">
      <img
        class="content-list__item-icon"
        src="images/sun__first-screen.png"
      />
      <div class="content-list__item-text">4 hours / day</div>
    </div>
    <div class="content-list__item">
      <img
        class="content-list__item-icon"
        src="images/thermometer__first-screen.png"
      />
      <div class="content-list__item-text">68 to 86 °F</div>
    </div>
    <div class="content-list__item">
      <img
        class="content-list__item-icon"
        src="images/fertilizer__first-screen.png"
      />
      <div class="content-list__item-text">1 time / month</div>
    </div>
  </div>
  <img
    class="emoji__first-screen"
    src="images/emoji__first-screen.png"
    alt=""
  />
</div>
<div class="image__first-screen">
  <img src="images/plant__first-screen.png" alt="" />
</div>
<div class="button__first-screen">Install</div>
</div>
`;

var SECOND_SCREEN = `<div class="container__second-screen">
<div>
  <div class="title__app-name">
    <div>
      <img src="images/icon.png" alt="" />
      <p>PlantMe</p>
    </div>
  </div>
</div>
<div class="content__second-screen">
  <img
    src="images/plant__second-screen.png"
    alt=""
    class="plant__second-screen"
  />
  <div class="list__second-screen">
    <div class="item__second-screen">
      <img
        src="images/icon-plant__second-screen.png"
        alt=""
        class="item-image__second-screen"
      />
      <div class="item-description__second-screen">Drainage holes</div>
    </div>
    <div class="item__second-screen">
      <img
        src="images/thermometer__second-screen.png"
        alt=""
        class="item-image__second-screen"
      />
      <div class="item-description__second-screen">60-75 °F</div>
    </div>
    <div class="item__second-screen">
      <img
        src="images/sun__second-screen.png"
        alt=""
        class="item-image__second-screen"
      />
      <div class="item-description__second-screen">
        Partial Sun <br />
        exposure
      </div>
    </div>
  </div>
</div>
<div class="title__second-screen">
  Find out more about caring for your plant
</div>
<div class="button__second-screen">Start caring</div>
</div>`;

var THIRD_SCREEN = "";

function render(frame) {
  console.log(document.getElementById("main"));
  document.getElementById("main").innerHTML = frame;
}
function checkScreen() {
  switch (screen) {
    case "FIRST_SCREEN":
      render(FIRST_SCREEN);
      break;
    case "SECOND_SCREEN":
      render(SECOND_SCREEN);
      break;
    case "THIRD_SCREEN":
      render(THIRD_SCREEN);
      break;
  }
}
checkScreen();
