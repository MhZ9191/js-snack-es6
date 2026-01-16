/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicycles = [
  { name: "MTB", weight: 7.5 },
  { name: "elettrica", weight: 8 },
  { name: "da corsa", weight: 3 },
  { name: "Graziella", weight: 12 },
];

//Assegno alla variabile il peso del primo elemento se esiste
let minWeight;
if (bicycles[0].weight) minWeight = bicycles[0].weight;
let outName = "";
//Ciclo confrontando se il peso del secondo elemento è minore ecc..
for (let bicycle of bicycles) {
  const tmpWeight = bicycle.weight;
  const tmpName = bicycle.name;
  if (tmpWeight < minWeight) {
    minWeight = tmpWeight;
    outName = tmpName;
  }
}
console.log(`La bici con peso minore è la bici ${outName} con ${minWeight}Kg`);

//! Versione con map()

let mini;
if (bicycles[0].weight) mini = bicycles[0].weight;

const tmpArray = bicycles.map((el) => {
  const elWeight = el.weight;
  if (elWeight < mini) mini = elWeight;
});
console.log(mini);

//! Versione compatta

let minimo;
if (bicycles[0].weight) minimo = bicycles[0].weight;

bicycles.map((el) => (el.weight < minimo ? (minimo = el.weight) : null));
console.log(minimo);

//! Altro

let minus;
if (bicycles[0].weight) minus = bicycles[0].weight;
let outputName = "";
bicycles.map((el) => {
  if (el.weight < minus) {
    minus = el.weight;
    outputName = el.name;
  }
});

sendMessage(minus, outputName);

function sendMessage(peso, nome) {
  console.log(`La bici con peso minore è la bici ${nome} con ${peso}Kg`);
}
