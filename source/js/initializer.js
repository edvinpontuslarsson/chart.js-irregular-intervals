const helper = new Helper();

const eventDates = [
  new Date(2017, 1, 5),
  new Date(2017, 3, 2),
  new Date(2018, 5, 21),
  new Date(2018, 8, 2),
  new Date(2021, 11, 25),
];

const metrics = ['A', 'B', 'C', 'D', 'E'];

const dataObjects = [];

for (const m of metrics) {
  const obj = {};

  obj.label = m;

  const dataArray = [];

  let value = Math.random() * 1000;

  for (let i = 0; i < eventDates.length; i++) {
    if (i !== 0) {
      const daysPassed = helper.getDaysPassed(eventDates[i - 1], eventDates[i]);
      value += daysPassed * 2;
    }

    const data = {
      date: eventDates[i],
      value,
    };

    dataArray.push(data);
  }

  obj.dataArray = dataArray;

  dataObjects.push(obj);
}

displayChart(dataObjects);
