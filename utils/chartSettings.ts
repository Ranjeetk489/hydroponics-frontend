import { faker } from '@faker-js/faker';
import { ChartData, ChartOptions } from 'chart.js';

export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data: ChartData = {
  labels,
  datasets: [
    {
      label: 'Temperature',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Humidity',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
    {
      label: 'PH',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(74, 235, 53)',
      backgroundColor: 'rgba(74, 235, 53, 0.5)',
      yAxisID: 'y',
    },
  ],
};

export const options: ChartOptions = {
  // responsive: true,
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
