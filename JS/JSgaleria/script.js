const animales= [
    ["Dingo","dingo.jpg","Canino"],
    ["León","leon.jpg","Felino"],
    ["Zebra","zebra.jpg","Equino"],
    ["Aguila","zebra.jpg","Ave"],
    ["Cobra","zebra.jpg","Reptil"],
    ["Tiburón","zebra.jpg","Pez"]
]

const carpetaimg="img/";
let indice=0;

function sig(){
    document.querySelector("img").src=carpetaimg+animales[indice][1];
document.querySelector("img").alt=animales[indice][0];
document.querySelector("h1").innerText=animales[indice][0];
document.querySelector("p").innerText=animales[indice][2];
document.querySelector("h2").innerText=indice;
indice++

if(indice>animales.length-1){
    indice=0;
}
}

setInterval(sig,1000);