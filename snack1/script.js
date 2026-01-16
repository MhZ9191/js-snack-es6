/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicycles = [
  { name: "MTB", weight: 7.5 },
  { name: "Elettrica", weight: 8 },
  { name: "Da corsa", weight: 4 },
  { name: "Graziella", weight: 10.4 },
];

//Assegno alla variabile il peso del primo elemento se esiste
let minWeight;
if (bicycles[0].weight) minWeight = bicycles[0].weight;

//Ciclo confrontando se il peso del secondo elemento è minore ecc..
for (let bicycle of bicycles) {
  const tmpWeight = bicycle.weight;
  if (tmpWeight < minWeight) minWeight = tmpWeight;
}

console.log(minWeight);

//! Versione con map()

let mini;
if (bicycles[0].weight) mini = bicycles[0].weight;

const tmpArray = bicycles.map((el) => {
  const elWeight = el.weight;
  if (elWeight < mini) mini = elWeight;
});
console.log(mini);
