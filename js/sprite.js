const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 522;
const CANVAS_HEIGHT = canvas.height = 161;
const playerImage = new Image();
playerImage.src = 'img/sprite.png'
const spriteWidth = 1928;
const spriteHeight = 669;
let frameX = 16;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 10;
function animate() {
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   ctx.drawImage(playerImage, frameX*spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight,0,0,CANVAS_WIDTH, CANVAS_HEIGHT)
   if(gameFrame % staggerFrames == 0){
      if(frameX < 15)frameX++;
      else frameX = 0;
   }
   gameFrame++

   requestAnimationFrame(animate)
}
animate()
