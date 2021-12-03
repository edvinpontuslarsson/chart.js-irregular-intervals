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
    // commented out, now fixes automatically
    // labels: months,
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
      scales: {
        x: {
          // offset: true,
          type: 'time',
          time: {
            // TODO maybe this should depend on time interval
            unit: 'quarter',

            displayFormats: {
              quarter: 'MMM yyyy',
            },

            // Luxon format string
            tooltipFormat: 'DD',
          },
          grid: {
            // offset: true,
          },
          title: {
            display: true,
            text: 'Date',
          },
          ticks: {
            // align: 'start',
          },
        },
        y: {
          title: {
            display: true,
            text: 'value',
          },
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById('myChart'), config);
}
