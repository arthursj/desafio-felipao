const nome = "Arthur";
let condicao = 5.001;
let nivel = "";

if (condicao >= 900) {
    nivel = "Ferro";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
} 

else if (condicao === 1.001 || condicao <= 2.000) {
    nivel = "Bronze";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
} 

else if (condicao === 2.001 || condicao <= 5.000) {
    nivel = "Prata";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
} 

else if (condicao === 6.001 || condicao <= 7.000) {
    nivel = "Ouro";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
} 

else if (condicao === 7.001 || condicao <= 8.000) {
    nivel = "Platina";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
} 

else if (condicao === 8.001 || condicao <= 9.000) {
    nivel = "Ascendente";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
} 

else if (condicao === 9.001 || condicao <= 10.000) {
    nivel = "Imortal";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
} 

else if (condicao === 10.001 || condicao >= 10.002) {
    nivel = "Radiante";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
}

else if (condicao === 5.001) {
    nivel = "Não encontrado";
    console.log("O Herói de nome: " + nome +  " está no nível de: " + nivel);
}

else {
    console.log("Digite apenas números");
}
