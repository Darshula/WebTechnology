{
  const ctx = document.getElementById('salesProjection').getContext('2d');

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const datasets = [
    {
      label: 'Sales in thousands',
      data: [70, 85, 80, 60, 60, 65, 60, 70, 65, 70, 80, 85],
      borderColor: '#55f',
      backgroundColor: '#00f',
      tension: 0
    },
    {
      label: 'Projection in thousands',
      data: [60, 65, 60, 75, 65, 70, 65, 75, 80, 85, 75, 70],
      borderColor: '#5f5',
      backgroundColor: '#0f0',
      tension: 0
    }
  ];

  const data = {
    labels: labels,
    datasets: datasets
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      y: {
        min: 55,
        max: 100
      }
    },
    plugins: []
  };

  var salesProjection = new Chart(ctx, config);
}

{
  const ctx = document.getElementById('siteHits').getContext('2d');

  const labels = [2018, 2019, 2020, 2021, 2022];

  const datasets = [
    {
      label: 'Site hits in thousands',
      data: [40, 50, 55, 55, 60],
      backgroundColor: '#f55',
      borderWidth: 1
    }
  ];

  const data = {
    labels: labels,
    datasets: datasets
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      y: {
        min: 35,
        max: 60
      }
    },
    plugins: []
  };

  var siteHits = new Chart(ctx, config);
}
