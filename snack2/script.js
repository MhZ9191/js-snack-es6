/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà “punti” fatti
 e “falli subiti”.

 Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
 e stampiamo tutto in console.
*/

const squadre = [
  { name: "TeamA", point: 0, fail: 0 },
  { name: "TeamB", point: 0, fail: 0 },
  { name: "TeamC", point: 0, fail: 0 },
  { name: "TeamD", point: 0, fail: 0 },
];

for (let team of squadre) {
  team.point = generateRandom(1, 50);
  team.fail = generateRandom(1, 20);
}

const newArray = [];

for (let i = 0; i < squadre.length; i++) {
  const tmpObject = { nome: squadre[i].name, falli: squadre[i].fail };
  newArray.push(tmpObject);
}

console.table(newArray);

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
