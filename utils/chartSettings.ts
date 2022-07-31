// import { faker } from '@faker-js/faker';
// import { ChartData, ChartOptions } from 'chart.js';

export const labels = ['XX/XX', 'XX/XX', 'XX/XX', 'XX/XX', 'XX/XX', 'XX/XX', 'XX/XX'];

export const initialData = {
  labels,
  datasets: [
    {
      label: 'Temperature',
      data: ['0', '0', '0', '0', '0', '0', '0'],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Humidity',
      data: ['0', '0', '0', '0', '0', '0', '0'],
      borderColor: 'rgb(233, 127, 22)',
      backgroundColor: 'rgba(233, 127, 22, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'PH',
      data: ['0', '0', '0', '0', '0', '0', '0'],
      borderColor: 'rgb(39, 68, 216)',
      backgroundColor: 'rgba(39, 68, 216, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'EC',
      data: ['0', '0', '0', '0', '0', '0', '0'],
      borderColor: 'rgb(234, 240, 67)',
      backgroundColor: 'rgba(234, 240, 67, 0.5)',
      yAxisID: 'y',
    },
  ],
};

export const options = {
  responsive: true,
  // maintainAspectRatio: false,

  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  // stacked: false,
  plugins: {
    legend: {
      display: true,
    },
    // title: {
    //   display: true,
    //   text: 'HELLO?',
    // },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: false,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: false,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
