const helper = new Helper();

const eventDates = [
  new Date(2017, 1, 5),
  new Date(2017, 5, 2),
  new Date(2018, 1, 5),
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

displayChart(dataObjects);
