class Helper {
  constructor() {
    this.borderColors = [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)',
    ];

    this.bgColors = [
      '#ff6384',
      '#36a2eb',
      '#ffce56',
      '#4bc0c0',
      '#9966ff',
      '#ff9f40',
      '#ff6384',
    ];
  }

  getBorderColor(i) {
    if (i > this.borderColors.length - 1) return 'rgb(0, 0, 0)';
    return this.borderColors[i];
  }

  getBackgroundColor(i) {
    if (i > this.bgColors.length - 1) return 'rgb(0, 0, 0)';
    return this.bgColors[i];
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
