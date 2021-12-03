const helper = new Helper();

const eventDates = [
  new Date(2007, 1, 5),
  new Date(2009, 5, 2),
  new Date(2012, 1, 5),
  new Date(2018, 5, 2),
  new Date(2020, 11, 25),
];

const metrics = ['A', 'B', 'C', 'D', 'E'];

const dataObjects = [];

for (const m of metrics) {
  const obj = {};

  obj.label = m;

  const dataArray = [];

  for (const date of eventDates) {
    const value = Math.random() * 10;

    const coordinates = {
      x: date,
      y: value,
    };

    dataArray.push(coordinates);
  }

  obj.dataArray = dataArray;

  dataObjects.push(obj);
}

console.log(dataObjects);

displayChart(dataObjects);
