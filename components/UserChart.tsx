import { Line } from 'react-chartjs-2';
import { options } from '../utils/chartSettings';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

import { faker } from '@faker-js/faker';

export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
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

const StyledLine = styled(Line)`
  padding: 0 2rem;
  /* width: 100%; */
  /* min-height: 400px; */
  /* margin: auto; */
`;

const UserChart = () => {
  return <StyledLine options={options} data={data}></StyledLine>;
};

export default UserChart;
