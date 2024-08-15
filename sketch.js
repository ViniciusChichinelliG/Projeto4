let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600, 600);
  palavra = fabao();
  som.loop();
  
}
function preload(){
  imagem=loadImage("imagem.jpg");
  som=loadSound("som.mp3");
}

function draw() {
  
  batatao();
  fabao();
  let maximo=width;
  let minimo=0;
  
  let aparecer=map(mouseX, 0, width,1, palavra.length);
  let inicio=palavra.substring(0,aparecer);
  text(inicio, 300,300);
}

function batatao(){
  background("black");
  image(imagem,0,0,600,500)
  fill("blue");
  textSize(60);
  textAlign(CENTER,CENTER);
  
}
function fabao(){
  let palavras=["feijoada","pizza","hambúrguer","churrasco"];
  return random(palavras);
}