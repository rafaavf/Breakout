var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["90f4f1bc-5dcf-4336-ac24-f3acd7403a81","575101dd-25e0-4846-85cb-8b8bc944614a","3710bac8-a9a3-4659-8510-f025c141678d"],"propsByKey":{"90f4f1bc-5dcf-4336-ac24-f3acd7403a81":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/5Yl0wzKk4SY_UGA_47svi8_VOnlYOp96/category_sports/miscball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"5Yl0wzKk4SY_UGA_47svi8_VOnlYOp96","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5Yl0wzKk4SY_UGA_47svi8_VOnlYOp96/category_sports/miscball.png"},"575101dd-25e0-4846-85cb-8b8bc944614a":{"name":"cenario","sourceUrl":"assets/api/v1/animation-library/gamelab/eRBbLv0JNKLk62sMh4QJET1_ifFvV_vS/category_backgrounds/park_view.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"eRBbLv0JNKLk62sMh4QJET1_ifFvV_vS","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eRBbLv0JNKLk62sMh4QJET1_ifFvV_vS/category_backgrounds/park_view.png"},"3710bac8-a9a3-4659-8510-f025c141678d":{"name":"raquete","sourceUrl":"assets/api/v1/animation-library/gamelab/fKiSp6DMxy8IA9TFoRhPaeuf_GWeaWQa/category_household_objects/curtain_top.png","frameSize":{"x":200,"y":63},"frameCount":1,"looping":true,"frameDelay":2,"version":"fKiSp6DMxy8IA9TFoRhPaeuf_GWeaWQa","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":63},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fKiSp6DMxy8IA9TFoRhPaeuf_GWeaWQa/category_household_objects/curtain_top.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criar cenario | imagem de fundo
var cenario = createSprite(0, 0, 400, 400);
cenario.setAnimation("cenario");
cenario.scale = 2;
//pontuação do jogo iniciando em 0
var pts = 0;

//desenho das caixas
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

//raquete e suas propriedades
var raquete=createSprite(200,390,100,20);
raquete.setAnimation("raquete");
raquete.scale = 0.5;
//bola e suas propriedades
var bola=createSprite(200,200,20,20);
bola.setAnimation("bola");
bola.scale = 0.1;
createEdgeSprites();

function draw() {
  background("white");
  bola.bounceOff(topEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(raquete);
  raquete.x = World.mouseX;
  if (keyDown("space")) {
    bola.velocityX = 4;
    bola.velocityY = 5;
  }
  if (bola.isTouching(box1)) {
    box1.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box2)) {
    box2.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box3)) {
    box3.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box4)) {
    box4.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box5)) {
    box5.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box6)) {
    box6.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box7)) {
    box7.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box8)) {
    box8.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box9)) {
    box9.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box10)) {
    box10.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box11)) {
    box11.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box12)) {
    box12.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box13)) {
    box13.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box14)) {
    box14.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box15)) {
    box15.destroy();
    pts = pts + 1;
  }
  if (bola.isTouching(box16)) {
    box16.destroy();
    pts = pts + 1;
  }

  drawSprites();
  textSize(20);
  text("Pontuação:" + pts, 0, 15);

}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
