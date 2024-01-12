menu = 0
jogar = 1
guia = 2
creditos = 3
calcsoma = 4
labmedio = 5

var tcanvas = 500; //tamanho da tela
var t = 25 //tamanho do quadrado
var npix = tcanvas/t; //número de quadrados
var labirinto;

//posição do jogador
var poscoluna = 0;
var poslinha = 0;

//posição da meta
var metax, metay;

//variaveis para o calculo
digitarx = " "
digitary = " "
primx = 1
numx = 0
xy = 0

//codigo para eliminar primos
caixamultiplos = []
caixa = []
for(v = 0; v < 75; v++){
 for(numss = 1; numss <= 100; numss++){
d = 0
	for(cont = 1; cont <= numss; cont++){
		if(numss%cont == 0){
        c = cont + d
        d = cont
        }
     }
if(c == numss+1){
}
   else if(c != numss+1){
     caixa[v] = numss;
     v++
   }
  }
}

tela = menu
selmenu = jogar

ybl = 145+80
ybl1 = 142+80

function preload() {
  mino = loadImage("aa.png");
  bloc = loadImage("bloc.png");
  bloc1 = loadImage("bloc1.png");
  fun = loadImage("fun.png");
  alex = loadImage("alex.png");
}
function start(){
    //algoritimo para o calculo
quantrandom = parseInt(random(76))
 numrandom = caixa.slice(quantrandom, quantrandom+1)
  
  for(g = 0; g < 50; g){
  for(multiplos = 2; multiplos <= 10; multiplos++){
    if(numrandom%multiplos == 0 && g < 50){
      caixamultiplos[g] = multiplos;
      g++
    }
  }
  }
  quantmulti = parseInt(random(50))
  multiselect = caixamultiplos.slice(quantmulti, quantmulti+1)
  numrandomy = parseInt(multiselect)
  
    //criar matriz do labirinto
  labirinto = [];
  for (x=0; x<npix; x++){
    labirinto[x] = [];
    for (y=0; y<npix; y++){
      labirinto[x][y] = 0
  }
}
  //definir labirinto
    for (x=0; x<npix; x+=2){
      for (y=0; y<npix; y+=2){
        labirinto[x][y] = 1
        var vizin = [];
        if(x<npix){vizin.push({x:x+1 ,y:y})}
        if(y<npix){vizin.push({x:x ,y:y+1})}
        if(vizin.length>0){
          var vsel = vizin[int(random(2))];
        labirinto[vsel.x][vsel.y] = 1;
        }
        
}
}
  //console.table(labirinto);
  metax = int(random(npix/2))*2
  metay = int(random(npix/2))*2
}

function setup() {
  createCanvas(tcanvas, tcanvas);
   noStroke()
  start()
}
function keyPressed(){
  if(keyCode == DOWN_ARROW){
      selmenu++;
    }
  else if(keyCode == UP_ARROW){
      selmenu--;
    }
  if(selmenu%4 == 0){
    selmenu = 1
  }
  if(tela == jogar){
        if (keyCode == LEFT_ARROW){
    if(poscoluna == 0 && labirinto[npix-1][poslinha] != 0){
      poscoluna = npix-1
    }
    else if(labirinto[poscoluna-1][poslinha] != 0 && poscoluna>0){
    poscoluna -= 1;
      }
  }
  if (keyCode == RIGHT_ARROW){
    if (poscoluna == npix-1 && labirinto[0][poslinha] != 0){
      poscoluna = 0
    }
    else if(labirinto[poscoluna+1][poslinha] != 0 && poscoluna<npix){
    poscoluna += 1;
  }
  }
  if (keyCode == UP_ARROW){
    if(poslinha == 0 && labirinto[poscoluna][npix-1] != 0){
      poslinha = npix-1
    }
    else if(labirinto[poscoluna][poslinha-1] != 0){
    poslinha -= 1;
  }}
  if (keyCode == DOWN_ARROW){
    if(poslinha == npix-1 && labirinto[poscoluna][0] != 0){
      poslinha = 0
    }
    else if(labirinto[poscoluna][poslinha+1] != 0 && poslinha<npix){
    poslinha += 1;
  }}
  }
  if(tela == calcsoma){
    if(primx == 1){
  if(keyCode != ENTER && keyCode != BACKSPACE){
  digitarx = digitarx + key;
  }
  if(keyCode == BACKSPACE){
    digitarx = " "
  }
  if(keyCode == ENTER){
    numx = parseInt(digitarx)
    primx = 2
  }
  }
    if(primx == 2 && xy == numrandom){
      primx = 3
      if(keyCode == ENTER){
        start()
        tela = jogar
        digitarx = " "
        primx = 1
      }
    }
  if(primx == 2 && xy != numrandom){
    primx = 1
  }
  
  xy = parseInt(numrandomy * numx)
  
}
}

function draw() {
  strokeWeight(4);
stroke(5);
  image(mino, 0, 0);
  image(bloc, 190, ybl);
  image(bloc, 190, 197+80);
  image(bloc, 190, 248+80);
  fill(255, 20, 50)
  textSize(45);
  textFont('Fantasy')
  textAlign(CENTER, CENTER);
  text("Torre", 255, 30+40)
  text("dos", 255, 70+40)
  text("Labirintos", 255, 110+40)
  textSize(30);
  textAlign(CENTER, CENTER);
  noStroke()

  if(tela == menu){
    

    if(selmenu==jogar){
      image(bloc1, 185, ybl1);
      fill(255,0,0)
      if(keyIsDown(ENTER)){
      tela = jogar
    }
    }
    else{
      fill(0)
    }
    text("JOGAR", 255, ybl+20)
    if(selmenu==guia){
      image(bloc1, 185, ybl1+52);
      fill(255,0,0)
      if(keyIsDown(ENTER)){
      tela = guia
    }
    }
    else{
      fill(0)
    }
    text("GUIA", 255, ybl+52+20)
    if(selmenu==creditos){
      image(bloc1, 185, ybl1+52+51)
      fill(255,0,0)
      if(keyIsDown(ENTER)){
      tela = creditos
    }
    }
    
    else{
      fill(0)
    }
    text("CRÉDITOS", 255, ybl+52+51+20)
    fill(0)
    fill(255, 0, 0)
    
    strokeWeight(4);
stroke(5);
        textSize(15)
    text("ENTER e SETAS para selecionar", 250, 500-15)
    noStroke()
  }
  if(tela == jogar){
  //desenhar libirinto
  for (x=0; x<npix; x++){
    for (y=0; y<npix; y++){
      if(labirinto[x][y] == 0){
        fill(0);
      }
      else if(labirinto[x][y] == 1){
        fill(255);
      }
      rect(x*t, y*t, t, t)
    }
  }
  //desenhar meta
  fill(255, 0, 0);
  rect(metax*t, metay*t, t, t)
  
  
  //desenhar o jogador
  fill(0, 255, 0);
  rect(poscoluna*t, poslinha*t, t, t);
    
    
  fill(255, 0, 0);
      textSize(15)
    text("ESC para voltar", 250, 500-15)
    
  textSize(50);
  textFont('Fantasy')
  textAlign(CENTER, CENTER);
  if(poscoluna==metax && poslinha==metay){
    tela = calcsoma
}
    if(keyIsDown(ESCAPE)){
      tela = menu
    }    
  }
      if(tela == calcsoma){
        background(500)
          fill(255, 0, 0);
      textSize(15)
    text("ENTER para confirmar", 250, 500-15)
        fill(255, 0, 0);
        textSize(30);
        text("Escreva um número que o produto\n"+ "com "+numrandomy +" resulte "+numrandom, tcanvas/2, 80+tcanvas/6)
       text("\n\nSua resposta: "+digitarx, tcanvas/2, tcanvas/4+tcanvas/6)
  
  if(xy == numrandom){
  text("Muito bem!!!\n"+numrandomy+" x "+numx+" = " + numrandom+"\nAperte ENTER para continuar\n", tcanvas/2, tcanvas/2+tcanvas/5)
  }
    }
  else if(tela == guia){
    background(500)
    image(fun, 0, 0)
    strokeWeight(4);
stroke(10);
    textSize(25)
    textAlign(CENTER, CENTER);
    text("Você está preso eternamente na Torre\n"+
"dos Labirintos, para seu entretenimento\n"+
"existem infinitos testes matematicos,\n"+
"resolva-os para passar o tempo.\n"+
"A medida que você vai completando\n"+
"os andares, os teste irão aparecendo.\n"+
"Para se locomover utilize as setas\n"+
"do teclado. Atente-se, o labirinto\n"+
"tem algumas artimanhãs, você pode\n"+
"se teleportar de um caminho para o\n"+
"outro e na parte superior você\n"+
"consegue sair para fora do labirinto\n"+
"e voltar por outro caminho, mas\n"+
"tome cuidado para não se perder.", 250, 250)
    textSize(15)
    text("ESC para voltar", 50, 15)
    noStroke()
      if(keyIsDown(ESCAPE)){
      tela = menu
      }    
  }
  else if(tela == creditos){
    background(500)
    image(fun, 0, 0)
    image(alex, 175, 210)
        strokeWeight(4);
stroke(10);
    textSize(25)
    textAlign(CENTER, CENTER);
    text("Desenvolvedor:"+"\nAlex Batista da Costa", 250, 50)
    text("Contato:"+"\nalex.batista.049@ufrn.edu.br\n"+"69 993697356", 250, 450)
    textSize(15)
    text("\n\nDesenvolvedor do código do labirinto:"+"\nSergio Leonardo Rodriguez Gomez", 250, 95)
    text("ESC para voltar", 50, 15)
    noStroke()
  }
    if(keyIsDown(ESCAPE)){
    tela = menu
      }    
    if(keyIsDown(82)){
    tela = jogar
  }
}  