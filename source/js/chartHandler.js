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

  const months = Array(12)
    .fill()
    .map((item, index) => new Date(2020, index, 1));

  const data = {
    labels: months,
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
    options: {
      stacked: true,
    },
  };

  const myChart = new Chart(document.getElementById('myChart'), config);
}
