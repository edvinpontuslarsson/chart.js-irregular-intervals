const dataObjects = [];
const letters = ['A', 'B', 'C', 'D', 'E'];

const random = Math.random() * 10;

for (let i = 0; i < 5; i++) {
  const obj = {};

  obj.label = letters[i];

  const dataArray = [];

  // const random = Math.random() * 10;

  for (let j = 0; j < 12; j++) {
    const value = random + j;
    dataArray.push(value);
  }

  obj.dataArray = dataArray;

  dataObjects.push(obj);
}

console.log(dataObjects);

displayChart(dataObjects);
