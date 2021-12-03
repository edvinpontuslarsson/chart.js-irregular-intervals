/**
 * @typedef IData
 * @property {Date} date
 * @property {number} value
 *
 * @typedef IMetric
 * @property {string} label
 * @property {IData[]} dataArray
 */

/**
 * @param {IMetric[]} metrics
 * @param {number} rangeInDays
 */
function displayChart(metrics, rangeInDays) {
  const helper = new Helper();

  const data = {
    datasets: metrics.map((metricObj, i) => ({
      label: metricObj.label,
      data: metricObj.dataArray.map((item) => ({
        x: item.date,
        y: item.value,
      })),

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
          type: 'time',
          time: {
            unit: rangeInDays && rangeInDays > 365 ? 'quarter' : 'month',

            displayFormats: {
              quarter: 'MMM yyyy',
            },

            // Luxon format string
            tooltipFormat: 'DD',
          },
          title: {
            display: true,
            text: 'Date',
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
