// Declaração das variáveis
let nome = "Luffy";
let xp = 10000;

// Estrutura de decisão
switch (xp) {
  case xp < 1000:
    nivel = "Ferro";
    break;
  case 1000 <= xp && xp < 2000:
    nivel = "Bronze";
    break;
  case 2000 <= xp && xp < 5000:
    nivel = "Prata";
    break;
  case 5001 <= xp && xp < 7000:
    nivel = "Ouro";
    break;
  case 7001 <= xp && xp < 8000:
    nivel = "Platina";
    break;
  case 8001 <= xp && xp < 9000:
    nivel = "Ascendente";
    break;
  case 9001 <= xp && xp < 10000:
    nivel = "Imortal";
    break;
  default:
    nivel = "Radiante";
}

// Mensagem de saída
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);