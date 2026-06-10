function mostrarMensagem(){
document.getElementById("mensagem").innerHTML =
"🚀 A Inteligência Artificial está ajudando a construir um futuro mais sustentável, saudável e tecnológico!";
}

function animar(id, valor){

let numero = 0;

let intervalo = setInterval(()=>{

numero += Math.ceil(valor/100);

if(numero >= valor){
numero = valor;
clearInterval(intervalo);
}

document.getElementById(id).innerHTML = numero.toLocaleString();

},20);
}

animar("n1", 5000);
animar("n2", 250000);
animar("n3", 15000);
// DIGITAÇÃO

const texto =
"INTELIGÊNCIA ARTIFICIAL NO DIAGNÓSTICO";

let i = 0;

function digitar(){

if(i < texto.length){

document.getElementById("typing").innerHTML += texto.charAt(i);

i++;

setTimeout(digitar,100);

}

}

digitar();


// CHATBOT

function responder(){

let pergunta =
document.getElementById("pergunta").value.toLowerCase();

let resposta = "";

if(pergunta.includes("ia")){

resposta =
"A Inteligência Artificial aprende com dados e auxilia em diagnósticos.";

}
else if(pergunta.includes("campo")){

resposta =
"A IA ajuda a identificar pragas, doenças e melhorar colheitas.";

}
else if(pergunta.includes("saude")){

resposta =
"A IA analisa exames e auxilia médicos.";

}
else{

resposta =
"A IA conecta tecnologia, saúde e agricultura.";

}

document.getElementById("chat").innerHTML +=
"<p><b>Você:</b> "+pergunta+"</p>";

document.getElementById("chat").innerHTML +=
"<p><b>IA:</b> "+resposta+"</p>";

}


// MAPA

function mostrarInfo(local){

let texto="";

if(local==="Brasil")
texto="O Brasil utiliza IA na agricultura de precisão.";

if(local==="Estados Unidos")
texto="Os EUA lideram pesquisas médicas com IA.";

if(local==="Japão")
texto="O Japão usa IA em robótica e hospitais.";

if(local==="Europa")
texto="A Europa investe em IA sustentável.";

document.getElementById("infoMapa").innerHTML = texto;

}


// PARTÍCULAS

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let particles=[];

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.r,
0,
Math.PI*2
);

ctx.fillStyle="#ff8fd8";

ctx.fill();

p.x += p.dx;
p.y += p.dy;

if(p.x<0||p.x>canvas.width)
p.dx*=-1;

if(p.y<0||p.y>canvas.height)
p.dy*=-1;

});

requestAnimationFrame(animate);

}

animate();
