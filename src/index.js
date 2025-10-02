let heroName;

do {
  heroName = prompt("Digite o nome do herói: ");
  let heroXp = parseInt(prompt("Digite o XP do herói: "));
  let heroLevel;

  // Condição de parada
  if (heroName === null || heroName === "") break;

  if (heroXp <= 1000) {
    heroLevel = "Ferro";
  } else if (heroXp <= 2000) {
    heroLevel = "Bronze";
  } else if (heroXp <= 5000) {
    heroLevel = "Prata";
  } else if (heroXp <= 7000) {
    heroLevel = "Ouro";
  } else if (heroXp <= 8000) {
    heroLevel = "Platina";
  } else if (heroXp <= 9000) {
    heroLevel = "Ascendente";
  } else if (heroXp <= 10000) {
    heroLevel = "Imortal";
  } else {
    heroLevel = "Radiante";
  }

  console.log(`O herói de nome ${heroName} está no nível ${heroLevel}.`);
} while (true);
