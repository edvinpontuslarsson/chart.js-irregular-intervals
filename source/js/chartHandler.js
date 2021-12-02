/**
 * @typedef IDataObject
 * @property {string} label
 * @property {number[]} dataArray
 */

/**
 * @param {IDataObject[]} dataObjects
 */
function displayChart(dataObjects) {
  const helper = new Helper();

  const data = {
    labels: helper.getAllMonths(),
    datasets: dataObjects.map((dataObj, i) => ({
      label: dataObj.label,
      data: dataObj.dataArray,

      borderColor: helper.getBorderColor(i),
      backgroundColor: helper.getBackgroundColor(i),

      pointRadius: 5,
      pointHoverRadius: 5,
    })),
  };

  const config = {
    type: 'line',
    data: data,
    options: {},
  };

  const myChart = new Chart(document.getElementById('myChart'), config);
}
