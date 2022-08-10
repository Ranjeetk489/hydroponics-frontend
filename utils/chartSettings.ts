import type { ChartData, ChartOptions } from 'chart.js';

export const labels = ['MM/DD', 'MM/DD', 'MM/DD', 'MM/DD', 'MM/DD', 'MM/DD', 'MM/DD'];

export const initialData: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Temperature',
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      // yAxisID: 'y',
    },
    {
      label: 'Humidity',
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(233, 127, 22)',
      backgroundColor: 'rgba(233, 127, 22, 0.5)',
      // yAxisID: 'y1',
    },
    {
      label: 'PH',
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(39, 68, 216)',
      backgroundColor: 'rgba(39, 68, 216, 0.5)',
      // yAxisID: 'y2',
    },
    {
      label: 'EC',
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(234, 240, 67)',
      backgroundColor: 'rgba(234, 240, 67, 0.5)',
      // yAxisID: 'y3',
    },
  ],
};

export const options: ChartOptions<'line'> = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    legend: {
      display: true,
    },
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
