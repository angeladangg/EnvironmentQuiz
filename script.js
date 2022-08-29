// Be sure to name any p5.js functions/variables we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global circle, square, angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, resizeCanvas, pow, sqrt,keyPressed, lerpColor, push, pop, ellipse, stroke, image, loadImage, collidePointCircle, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, mouseButton, LEFT, line, mouseIsPressed, mouseIsClicked,noFill, windowWidth, windowHeight, noStroke, 
          textFont,createA, loadAnimation, createSprite, createSlider, textStyle,BOLDITALIC, loadSound, collidePointRect, createRadio, loadFont, fontRegular, function, NORMAL, textStyle, BOLD, loadImg, textAlign, RGB, CENTER, windowWidth, windowHeightkeyCode, createButton, createImg, createDiv, createP, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize,loadJSON, Windmill */

let good = 0;
let bad = 0;
let start = false;
let bgImage;
let quiz;
let qNum = 1;
var song;
var slider;
let drops = [];
let buttonSize = 36;
let battery;
let bottle;
let waterRunning;
let driving;
let walking;
let teentitansMad;
let teentitansHappy;
let plasticBag;
let button;
let exit = false;
let resource = false;
let title;
let mission;
let div;

let newstart;
let img;
let logo;
const CDN = "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2F";
let spritesheet, spritedata;
let animation = [];
let windmill1;
let windmill2;
let a;
let zero;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let image1;
let image2;
let image3;
let buttona;

function preload() {
  bgImage = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fcartoon-meadow-landscape-summer-green-fields-view-spring-lawn-hill-blue-sky-green-grass-fields-landscape-background-illustration-field-grass-meadow-landscape-spring-summer_229548-381.jpg?v=1627972745403"
  );

  song = loadSound(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2FKetsa%20-%20Never-Give-Up.mp3?v=1628117127586"
  );
  
  battery = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fbatteryq.jpg?v=1628032267476"
  );
  bottle = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fwaterbottle1.jpg?v=1628032231126"
  );

  waterRunning = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fwaterrunning.jpg?v=1628032215494"
  );

  driving = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fdriving.jpg?v=1628032250603"
  );

  walking = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fwalking.jpg?v=1628032254672"
  );

  teentitansMad = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fteentitans.png?v=1628032486596"
  );

  teentitansHappy = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fteentitanshappyface.jpg?v=1628032474216"
  );

  plasticBag = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fplastic%20bag%20q.jpg?v=1628032260974"
  );

  image1 = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Frrr.png?v=1627945083146"
  );

  image2 = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Ftrash1.png?v=1627945008872"
  );

  image3 = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fsustain-removebg-preview.png?v=1627945144397"
  );
  img = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fearth.png?v=1627942991666"
  );
  logo = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2FScreenshot%20(29).png?v=1628098992497"
  );
  //Sprite loads
  spritedata = loadJSON("windmill.json");
  spritesheet = loadImage(
    "https://cdn.glitch.com/1d35a8f1-d190-42f9-a5bc-913041ba6417%2Fwindmill.png?v=1628191737316"
  );

  //  battery.size(140, 200);
  //battery.position(windowWidth/2, 300);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //song = loadSound("music.mp3");
  song.play();
  slider = createSlider(0, 1, 0.07, 0.01);
  for (let i = 0; i < width; i++) {
    // Create a new drop and add it to the list
    let newDrop = {
      x: random(width),
      y: random(height),
      d: random(5, 15),
      fallSpeed: random(1, 3)
    };

    drops.push(newDrop);
  }

  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  windmill1 = new Windmill(
    0.1,
    animation,
    windowWidth / 14,
    0.5 * windowHeight
  );
  windmill2 = new Windmill(
    0.1,
    animation,
    0.75 * windowWidth,
    0.3 * windowHeight
  );

  //colorMode(HSB, 360, 100, 100);
  //colorMode(RGB, 0, 255, 0);
  // background
  quiz = new Quiz();
  let quizQuestions = [];

  title = createP("Save the Earth, Start from Yourself");

  title.style("font-size", "40px");
  title.position(20, 5);
  title.style("color", "#ffffff");
  title.class("text");

  //short meaningful phrase
  div = createDiv("Small daily habit changes that help our green planet.");
  div.style("font-size", "22px");
  div.position(20, 99);
  div.style("color", "white");
  div.class("text");

  //mission statement
  mission = createP(
    "The actions of every single person can impact our planet Earth. Food waste, garbage, deforestation, pollution, burning fossil fuels, and many more severely harms the place we call home to approximately 7.8 billion people and 8.7 million species of animals. The ultimate goal of “Save the Earth, Start from Yourself” is to educate users about the impact and consequences of their daily actions and provide several sustainable and eco-friendly changes to support our green planet."
  );
  mission.style("font-size", "24px");
  mission.position(35, 165);
  mission.style("color", "#ffffff");
  mission.class("text");

  begin();
}

function draw() {
  song.setVolume(slider.value());

  if (start === false) {
    homeScreen();
  }
  if (start) {
    if (qNum === 1) {
      background(bgImage);
      quiz.q1();
      windmill1.show();
      windmill1.animate();
    }
    if (qNum === 2) {
      background(bgImage);
      // print("passed");
      quiz.q2();
      windmill2.show();
      windmill2.animate();
    }
    if (qNum === 3) {
      // print("passed");
      background(bgImage);
      quiz.q3();
      windmill1.show();
      windmill1.animate();
    }
    if (qNum === 4) {
      // print("passed");
      background(bgImage);
      quiz.q4();
      windmill2.show();
      windmill2.animate();
    }
    if (qNum === 5) {
      background(bgImage);
      quiz.q5();
      windmill1.show();
      windmill1.animate();
    }
  }
  if (qNum === 6) {
    if (good >= 3) {
      background(bgImage);
      quiz.goodResult();
      home();
    } else if (bad >= 3) {
      background(bgImage);
      quiz.badResult();
      home();
    }
  }
  if (qNum === 7) {
    quiz.resourcePage();
    mission.hide();
    div.hide();
    title.hide();
    home();
  }
}

//store a variabe for what it's suppossed to show
//call quiz.second, third, fourth, fifth

//TO DO: quiz logic
class Quiz {
  constructor() {
    let hitY = this.hitY;
    let hitN = this.hitN;
    let hitE = this.hitE;
  }

  q1() {
    //Displays question 1

    textSize(32);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    text(
      "Do you dispose of your batteries in a different trash can \n specialized for batteries only?",
      windowWidth / 2,
      windowHeight / 4 - 20
    );

    //Forms option boxes
    rect(
      0.66 * windowWidth - 20,
      windowHeight / 3 - 10,
      100,
      50,
      10,
      10,
      10,
      10
    );
    //insert image here
    image(battery, windowWidth / 2 - 200 / 2, windowHeight * (2 / 5), 250, 370);

    rect(windowWidth / 3 - 20, windowHeight / 3 - 10, 100, 50, 10, 10, 10, 10);
    textSize(buttonSize);
    text("No", 0.65 * windowWidth, windowHeight / 3, 100, 50);
    text("Yes", windowWidth / 3.1, windowHeight / 3, 100, 50);
    // hitY = click on Yes button | hitN = click on No button
    this.hitY = collidePointRect(
      mouseX,
      mouseY,
      windowWidth / 3,
      windowHeight / 3,
      100,
      50
    );
    this.hitN = collidePointRect(
      mouseX,
      mouseY,
      0.66 * windowWidth,
      windowHeight / 3,
      100,
      50
    );
  }

  q2() {
    //Displays question 2
    textSize(27);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    text(
      "You're getting ready to go on a trip with imaginary friends.\n You've packed food & sunscreen, but will you bring a water bottle too?",
      windowWidth / 2,
      windowHeight / 4
    );

    //Forms option boxes
    rect(
      0.66 * windowWidth - 20,
      windowHeight / 3 - 10,
      100,
      50,
      10,
      10,
      10,
      10
    );
    //insert image here
    image(bottle, windowWidth / 2 - 200 / 2, windowHeight * (2 / 5), 320, 380);

    rect(windowWidth / 3 - 20, windowHeight / 3 - 10, 100, 50, 10, 10, 10, 10);
    textSize(buttonSize);
    text("No", 0.65 * windowWidth, windowHeight / 3, 100, 50);
    text("Yes", windowWidth / 3.1, windowHeight / 3, 100, 50);
    //hitY = click on Yes button | hitN = click on No button
    this.hitY = collidePointRect(
      mouseX,
      mouseY,
      windowWidth / 3,
      windowHeight / 3,
      100,
      50
    );
    this.hitN = collidePointRect(
      mouseX,
      mouseY,
      0.66 * windowWidth,
      windowHeight / 3,
      100,
      50
    );
  }

  q3() {
    //Displays question 3
    textSize(25);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    text(
      "You're on your way home and remember you need to pick up something from the supermarket. \n You're at the register to pay and realize you forgot to bring a bag.\n Are you going to purchase a reusable grocery bag?",
      windowWidth / 2,
      windowHeight / 5
    );

    //Forms option boxes
    rect(
      0.66 * windowWidth - 20,
      windowHeight / 3 - 10,
      100,
      50,
      10,
      10,
      10,
      10
    );

    image(plasticBag, windowWidth / 2 - 200, windowHeight * (2 / 5), 440, 320);
    textSize(buttonSize);
    rect(windowWidth / 3 - 20, windowHeight / 3 - 10, 100, 50, 10, 10, 10, 10);
    text("No", 0.65 * windowWidth, windowHeight / 3, 100, 50);
    text("Yes", windowWidth / 3.1, windowHeight / 3, 100, 50);
    //hitY = click on Yes button | hitN = click on No button
    this.hitY = collidePointRect(
      mouseX,
      mouseY,
      windowWidth / 3,
      windowHeight / 3,
      100,
      50
    );
    this.hitN = collidePointRect(
      mouseX,
      mouseY,
      0.66 * windowWidth,
      windowHeight / 3,
      100,
      50
    );
  }

  q4() {
    //Displays question 4
    textSize(25);
    textStyle(BOLDITALIC);
    textAlign(CENTER);

    text(
      "You're going to meet your friends at a cafe nearby. It'll take you 8 minutes to drive there, or it's a 30 minute walk. \n Are you walking?",
      windowWidth / 2,
      windowHeight / 4
    );
    // textAlign(CENTER);
    //Forms option boxes
    rect(
      0.66 * windowWidth - 20,
      windowHeight / 3 - 10,
      100,
      50,
      10,
      10,
      10,
      10
    );

    image(driving, windowWidth / 4 - 300 / 2, windowHeight * 0.5, 400, 280);
    image(walking, windowWidth / 4 + 700 / 2, windowHeight * 0.5, 400, 280);
    textSize(buttonSize);
    rect(windowWidth / 3 - 20, windowHeight / 3 - 10, 100, 50, 10, 10, 10, 10);
    text("No", 0.65 * windowWidth, windowHeight / 3, 100, 50);
    text("Yes", windowWidth / 3.1, windowHeight / 3, 100, 50);
    //hitY = click on Yes button | hitN = click on No button
    this.hitY = collidePointRect(
      mouseX,
      mouseY,
      windowWidth / 3,
      windowHeight / 3,
      100,
      50
    );
    this.hitN = collidePointRect(
      mouseX,
      mouseY,
      0.66 * windowWidth,
      windowHeight / 3,
      100,
      50
    );
  }

  q5() {
    //Displays question 5
    textSize(32);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    text(
      "Do you leave the tap running when you are brushing your teeth or washing your hands?",
      windowWidth / 2,
      windowHeight / 4
    );

    //Forms option boxes
    rect(
      0.66 * windowWidth - 20,
      windowHeight / 3 - 10,
      100,
      50,
      10,
      10,
      10,
      10
    );
    image(
      waterRunning,
      windowWidth / 2 - 200,
      windowHeight * (2 / 5) + 10,
      360,
      380
    );
    textSize(buttonSize);
    rect(windowWidth / 3 - 20, windowHeight / 3 - 10, 100, 50, 10, 10, 10, 10);
    text("No", 0.65 * windowWidth, windowHeight / 3, 100, 50);
    text("Yes", windowWidth / 3.1, windowHeight / 3, 100, 50);
    //hitY = click on Yes button | hitN = click on No button
    this.hitY = collidePointRect(
      mouseX,
      mouseY,
      windowWidth / 3,
      windowHeight / 3,
      100,
      50
    );
    this.hitN = collidePointRect(
      mouseX,
      mouseY,
      0.66 * windowWidth,
      windowHeight / 3,
      100,
      50
    );
    // if Yes or No are clicked, question number increments
    if (mouseIsPressed) {
      if (this.hitY || this.hitN) {
        console.log("Display Results");
      }
    }
  }

  goodResult() {
    textSize(20);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    text(
      "You know our actions as humans can either benefit or harm the earth,\n and you want to pave the way for a prosperous future, \n climate change and animal cruelty! Keep up the great work, and never stop looking for \n opportunities to cut out waste and conserve energy. \n Would you like to see some helpful resources?",
      windowWidth / 2,
      windowHeight / 6
    );
    textAlign(CENTER);
    image(
      teentitansHappy,
      windowWidth / 2 - 160,
      (windowHeight * 2) / 5,
      340,
      200
    );

    //Resource option box

    rect(windowWidth / 2 + 2, windowHeight / 3 - 10, 100, 50, 10, 10, 10, 10);
    textSize(buttonSize);
    //text("No", 0.65 * windowWidth, windowHeight / 3, 100, 50);
    text("Yes!", windowWidth / 2, windowHeight / 3, 100, 50);
    // hitY = click on Yes button | hitN = click on No button
    this.hitY = collidePointRect(
      mouseX,
      mouseY,
      windowWidth / 2,
      windowHeight / 3,
      100,
      50
    );

    this.hitE = collidePointRect(mouseX, mouseY, (windowWidth * 4) / 5, 50);
  }

  badResult() {
    textSize(18);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    text(
      "Unfortunately, our world needs a hand from us to continue prospering.\n The good news is, your small actions can make a tremendous difference! \n By doing things like switching off appliances at the power outlet, and trading plastic\n for reusable things like metal straws and green-bags,\n you're on your way to becoming a friend to the environment! \n Would you learn to see some helpful resources?",
      windowWidth / 2 + 30,
      windowHeight / 5
    );
    image(teentitansMad, windowWidth / 2, windowHeight * (1 / 2), 200, 200);
    textAlign(CENTER);

    //Resource option box

    rect(windowWidth / 2, windowHeight / 3 + 30, 100, 50, 10, 10, 10, 10);
    textSize(buttonSize);
    //text("No", 0.65 * windowWidth, windowHeight / 3, 100, 50);
    text("Yes!", windowWidth / 2, windowHeight / 3 + 30, 100, 50);
    // hitY = click on Yes button | hitN = click on No button
    this.hitY = collidePointRect(
      mouseX,
      mouseY,
      windowWidth / 2,
      windowHeight / 3 + 30,
      150,
      75
    );
  }

  resourcePage() {
    background(166, 234, 239);
    textSize(20);
    fill(0, 102, 153);
    textAlign(CENTER);
    text(
      "Below are some resources to learn more about the consequences and daily \n actions to create a sustainable environment!",
      windowWidth / 2,
      25
    );

    image(image1, windowWidth / 2, 380, 160, 160);

    image(image2, windowWidth / 3, 380, 140, 165);

    image(image3, windowWidth * (2 / 3), 380, 160, 160);
    zero = text(
      "Below are some resources to learn more about the consequences and daily \n actions to create a sustainable environment!",
      windowWidth / 2,
      25
    );

    textSize(14);
    textAlign(CENTER);

    // resources and links (articles on environmental awareness and consequences)
    text(
      "Actions to Help: https://oceanservice.noaa.gov/ocean/earthday.html",
      windowWidth / 2,
      80
    );

    text(
      "50 Ways to Help: https://www.50waystohelp.com/",
      windowWidth / 2,
      110
    );

    text(
      "Impacts of Mismanaged Trash: https://www.epa.gov/trash-free-waters/impacts-mismanaged-trash ",
      windowWidth / 2,
      140
    );

    text(
      "Overflowing garbage bins: https://www.ecubelabs.com/overflowing-garbage-bins-5-impacts-on-health-and-environment-and-how-to-prevent/",
      windowWidth / 2,
      170
    );

    text(
      "7 Volunteering Ideas to Help the Environment: https://www.dosomething.org/us/articles/volunteering-ideas-to-help-the-environment",
      windowWidth / 2,
      200
    );

    text(
      "Environmental Volunteer Abroad: https://www.volunteerworld.com/en/volunteer-abroad/environment",
      windowWidth / 2,
      230
    );

    text(
      "Health and Environmental Agencies of U.S. States and Territories: https://www.epa.gov/aboutepa/health-and-environmental-agencies-us-states-and-territories",
      windowWidth / 2,
      260
    );
  }
}

// Wenny: home page prior to starting hame, placed into draw function
function homeScreen() {
  // title, project name
  background(112, 178, 219);
  //different color drops for background
  for (let i = 0; i < drops.length; i++) {
    let drop = drops[i];

    // Move droplet
    drop.y += drop.fallSpeed;
    // If it goes off the screen...
    if (drop.y > height) {
      // ...reset it...
      drop.y = 0;
      // ...and move it somewhere random.
      drop.x = random(width);
    }
    // Display droplet
    noStroke();
    fill(0, 128, 255);
    ellipse(drop.x, drop.y, drop.d);
  }

  //earth image
  image(img, 710, 10, 165, 165);

  //logo of our project
  image(logo, 280, 350, 800, 250);
}

function mousePressed() {
  print("questionNumber" + qNum);
  print("good:" + good);
  print("bad:" + bad);
  if (quiz.hitY || quiz.hitN || quiz.hitE) {
    // battery.hide();
    qNum++;
    if (quiz.hitY) {
      good++;
    } else if (quiz.hitN) {
      bad++;
    }
    quiz.hitY = false;
    quiz.hitN = false;
    quiz.hitE = false;
  }
}

function home() {
  buttona = createButton("EXIT");
  buttona.position((windowWidth * 4) / 5, 50);
  buttona.class("css");
  buttona.style("background-color", "#328034");
  buttona.mousePressed(changeExit);

  // if exit is clicked
  function changeExit() {
    start = false;
    qNum = 0;
    createCanvas(windowWidth, windowHeight);
    //song = loadSound("music.mp3");
    //song.play();
    //slider = createSlider(0, 1, 0.07, 0.01);

    title = createP("Save the Earth, Start from Yourself");

    title.style("font-size", "40px");
    title.position(20, 5);
    title.style("color", "#ffffff");
    title.class("text");

    //short meaningful phrase
    div = createDiv("Small daily habit changes that help our green planet.");
    div.style("font-size", "22px");
    div.position(20, 99);
    div.style("color", "white");
    div.class("text");

    //retake quiz
    div = createDiv(
      "Thank you for taking the time to take our quiz! Refresh the page to take the quiz again!"
    );
    div.style("font-size", "30px");
    div.position(20, 700);
    div.style("color", "white");
    div.class("text");

    //mission statement
    mission = createP(
      "The actions of every single person can impact our planet Earth. Food waste, garbage, deforestation, pollution, burning fossil fuels, and many more severely harms the place we call home to approximately 7.8 billion people and 8.7 million species of animals. The ultimate goal of “Save the Earth, Start from Yourself” is to educate users about the impact and consequences of their daily actions and provide several sustainable and eco-friendly changes to support our green planet."
    );
    mission.style("font-size", "20px");
    mission.position(35, 165);
    mission.style("color", "#ffffff");
    mission.class("text");
  }
}

function begin() {
  button = createButton("START");
  button.position(25, 140);
  button.class("css");
  button.style("background-color", "#be9edb");
  button.mousePressed(changeBG);

  // if start is pressed
  function changeBG() {
    start = true;
    button.remove();
    div.hide();
    mission.hide();
    title.hide();
  }
}
